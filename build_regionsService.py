import json
import datetime
import os
import polars as pl

fname = 'regionsWithoutService.json'
with open(fname, 'r') as f:
    regions_dict = json.load(f)

print(json.dumps(regions_dict, indent=2, sort_keys=True))

# Format as "07/19/2023 12:55 PM"
csv_timestamp = datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p")
print(csv_timestamp)
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
    row['csv_timestamp'] = csv_timestamp

print(json.dumps(new_list, indent=2, sort_keys=True))

df = (
    pl.DataFrame(new_list)
    .select([
        'csv_timestamp',
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
    df = existing_df.vstack(df)

df.write_csv(out_fname)
print(f'Wrote {out_fname}')