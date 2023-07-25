import json
import datetime
import os
import polars as pl
import shutil
import requests

# If directory 'genera' doesn't exist, create it
if not os.path.exists('genera'):
    os.makedirs('genera')
if not os.path.exists('genera/historical'):
    os.makedirs('genera/historical')

# Format as "07/19/2023 12:55 PM"
timestamp_saved = datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p")
print(timestamp_saved)

# Get the data from the API
url = 'https://aeepr.com/es-pr/generacion/Documents/DataJS/dataSource.js'
r = requests.get(url)
data_source_script = r.text
# regions_dict['timestamp_saved'] = timestamp_saved

fname = 'genera/dataSource.js'
with open(fname, 'w') as f:
    f.write(f"const timestamp_saved = '{timestamp_saved}';\n")
    f.write(data_source_script)

fname_run = 'genera/dataSource_run.js'
shutil.copyfile(fname, fname_run)
with open(fname_run, 'a') as f:
    f.write(
        """

const fs = require('fs');

const metadata = {timestamp_saved, dataFechaActualizado: dataFechaAcualizado};

fs.writeFileSync('genera/metadata.json', JSON.stringify(metadata, null, 2));
fs.writeFileSync('genera/dataFuelCost.json', JSON.stringify(dataFuelCost, null, 2));
fs.writeFileSync('genera/dataByFuel.json', JSON.stringify(dataByFuel, null, 2));
fs.writeFileSync('genera/dataMetrics.json', JSON.stringify(dataMetrics, null, 2));

fs.writeFileSync('genera/dataLoadPerSite.json',
JSON.stringify(dataLoadPerSite, null, 2));
        """

    )

# Run the script
os.system(f'node {fname_run}')
# delete the run file
os.remove(fname_run)

# Start reopening files
with open('genera/metadata.json') as f:
    metadata = json.load(f)
timestamp_saved = metadata['timestamp_saved']
dataFechaActualizado = metadata['dataFechaActualizado']

print(metadata)

for fbase in ['dataFuelCost', 'dataByFuel', 'dataMetrics']:
    fname = f'genera/{fbase}.json'
    with open(fname) as f:
        data = json.load(f)

    df = pl.DataFrame(data)
    initial_cols = df.columns
    df = df.select([
        pl.lit(timestamp_saved).alias('timestamp_saved'),
        pl.lit(dataFechaActualizado).alias('dataFechaActualizado'),
        *initial_cols
    ])

    # To match historical data
    cast_map = {
        'Index': int,
    }
    for col in cast_map:
        if col in df.columns:
            df = df.with_columns([pl.col(col).cast(cast_map[col])])



    print(fbase)
    with pl.Config(tbl_cols=-1):
        print(df)
    print()

    out_fname = f'genera/historical/{fbase}_historical.csv'
    if os.path.exists(out_fname):
        existing_df = pl.read_csv(out_fname)
        
        df = existing_df.vstack(df)

    df.write_csv(out_fname)
    print(f'Wrote {out_fname}')
    print()


# Esta es diferente
with open('genera/dataLoadPerSite.json') as f:
    dataLoadPerSite = json.load(f)

print('dataLoadPerSite')
# print(json.dumps(dataLoadPerSite, indent=2, sort_keys=False, ensure_ascii=False))
# print()

flat_dataLoadPerSite = []
for site in dataLoadPerSite:
    site['site_index'] = site['Index']
    del site['Index']

    for unit in site['units']:
        unit['unit_index'] = unit['Index']
        del unit['Index']

        row = {
            **site,
            **unit,
        }
        del row['units']
        flat_dataLoadPerSite.append(row)

df = pl.DataFrame(flat_dataLoadPerSite)
initial_cols = df.columns
df = df.select([
    pl.lit(timestamp_saved).alias('timestamp_saved'),
    pl.lit(dataFechaActualizado).alias('dataFechaActualizado'),
    
    # Not casting all of it because some are strings in the original data (idk why)
    pl.col('site_index').cast(str),
    'Type', 'Desc',
    pl.col('SiteTotal').cast(int),
    pl.col('unit_index').cast(str),
    'Unit',
    pl.col('MW').cast(int),
    pl.col('MVar').cast(str),
    pl.col('Cost').cast(float), 
    pl.col('ParentId').cast(str),
])
with pl.Config(tbl_cols=-1):
    print(df)

missing_cols = set(initial_cols) - set(df.columns)
if len(missing_cols) > 0:
    raise ValueError(f'Missing columns: {missing_cols}')

out_fname = 'genera/historical/dataLoadPerSite_historical.csv'
if os.path.exists(out_fname):
    existing_df = pl.read_csv(out_fname)
    existing_df = (
        existing_df
        .with_columns([
            pl.col(k).cast(v) for k, v in df.schema.items()
        ])
    )
    
    df = existing_df.vstack(df)

df.write_csv(out_fname)
print(f'Wrote {out_fname}')
print()