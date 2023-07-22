import json
import datetime
import os
import polars as pl
import requests

# Format as "07/19/2023 12:55 PM"
timestamp_saved = datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p")
print(timestamp_saved)

# Get the data from the API
url = 'https://api.miluma.lumapr.com/miluma-outage-api/outage/regionsWithoutService'
r = requests.get(url)
regions_dict = r.json()
regions_dict['timestamp_saved'] = timestamp_saved

fname = 'regionsWithoutService.json'
with open(fname, 'w') as f:
    json.dump(regions_dict, f, indent=2, sort_keys=True)

print(json.dumps(regions_dict, indent=2, sort_keys=True))

# "Reopen" the file

timestamp = regions_dict['timestamp']
regions_list = regions_dict['regions']
totals_obj = regions_dict['totals']

new_list = []

totals_obj['type'] = 'totals'
totals_obj['name'] = None
totals_obj['percentageClientsWithoutService'] = totals_obj['totalPercentageWithoutService']
totals_obj['percentageClientsWithService'] = totals_obj['totalPercentageWithService']
del totals_obj['totalPercentageWithoutService']
del totals_obj['totalPercentageWithService']
new_list.append(totals_obj)

for region in regions_list:
    region['type'] = 'region'
    new_list.append(region)

for row in new_list:
    row['timestamp'] = timestamp
    row['timestamp_saved'] = timestamp_saved

print(json.dumps(new_list, indent=2, sort_keys=True))

df = (
    pl.DataFrame(new_list)
    .select([
        'timestamp_saved',
        'timestamp', 'type', pl.col('name').alias('region_name'),
        'totalClients', 'totalClientsWithoutService', 'totalClientsWithService',
        'percentageClientsWithoutService', 'percentageClientsWithService',

    ])
)
with pl.Config(tbl_cols=-1):
    print(df)

out_fname = 'regionsWithoutService_historical.csv'
if os.path.exists(out_fname):
    existing_df = pl.read_csv(out_fname)
    if ('csv_timestamp' in existing_df.columns):
        existing_df = existing_df.rename({'csv_timestamp': 'timestamp_saved'})
    df = existing_df.vstack(df)

df.write_csv(out_fname)
print(f'Wrote {out_fname}')