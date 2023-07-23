import json
import datetime
import os
import polars as pl
import requests

# Format as "07/19/2023 12:55 PM"
timestamp_saved = datetime.datetime.now().strftime("%m/%d/%Y %I:%M %p")
print(timestamp_saved)

# Get the data from the API
url = 'https://api.miluma.lumapr.com/miluma-outage-api/outage/municipality/towns'
r = requests.post(url, json=(
    [
		"ADJUNTAS",
		"AGUADA",
		"AGUADILLA",
		"AGUAS BUENAS",
		"AIBONITO",
		"ARECIBO",
		"ARROYO",
		"ANASCO",
		"AÑASCO",
		"BARCELONETA",
		"BARRANQUITAS",
		"BAYAMON",
		"BAYAMÓN",
		"CABO ROJO",
		"CAGUAS",
		"CAMPANILLA",
		"CAMUY",
		"CANDELARIA",
		"CANDELARIA ARENAS",
		"CANOVANAS",
		"CANÓVANAS",
		"CAROLINA",
		"CATANO",
		"CATAÑO",
		"CAYEY",
		"CEIBA",
		"CIALES",
		"CIDRA",
		"COAMO",
		"COCO",
		"COMERIO",
		"COMERÍO",
		"COROZAL",
		"CULEBRA",
		"DORADO",
		"ESTANCIAS DE FLORIDA",
		"FAJARDO",
		"FLORIDA",
		"GUANICA",
		"GUAYAMA",
		"GUAYANILLA",
		"GUAYNABO",
		"GURABO",
		"GUANICA",
		"GUÁNICA",
		"HATILLO",
		"HORMIGUEROS",
		"HUMACAO",
		"INGENIO",
		"ISABEL SEGUNDA",
		"ISABELA",
		"JAYUYA",
		"JUANA DIAZ",
		"JUANA DÍAZ",
		"JUNCOS",
		"LAJAS",
		"LARES",
		"LAS MARIAS",
		"LAS MARÍAS",
		"LAS PIEDRAS",
		"LEVITTOWN",
		"LOIZA",
		"LOÍZA",
		"LUQUILLO",
		"MANATI",
		"MANATÍ",
		"MARICAO",
		"MAUNABO",
		"MAYAGUEZ",
		"MAYAGÜEZ",
		"MOCA",
		"MOROVIS",
		"NAGUABO",
		"NARANJITO",
		"OROCOVIS",
		"PAJAROS",
		"PATILLAS",
		"PENUELAS",
		"PEÑUELAS",
		"PONCE",
		"PUERTO REAL",
		"PUNTA SANTIAGO",
		"QUEBRADILLAS",
		"RINCON",
		"RINCÓN",
		"RIO GRANDE",
		"RÍO GRANDE",
		"SABANA GRANDE",
		"SABANA SECA",
		"SALINAS",
		"SAN ANTONIO",
		"SAN GERMAN",
		"SAN GERMÁN",
		"SAN ISIDRO",
		"SAN JUAN",
		"HATO REY",
		"PUERTO NUEVO",
		"RIO PIEDRAS",
		"RÍO PIEDRAS",
		"SANTURCE",
		"SAN LORENZO",
		"SAN SEBASTIAN",
		"SAN SEBASTIÁN",
		"SANTA BARBARA",
		"SANTA ISABEL",
		"TOA ALTA",
		"TOA BAJA",
		"TRUJILLO ALTO",
		"UTUADO",
		"VEGA ALTA",
		"VEGA BAJA",
		"VIEQUES",
		"VILLALBA",
		"YABUCOA",
		"YAUCO"
	]
))
towns_dict = r.json()
towns_dict['timestamp_saved'] = timestamp_saved

fname = 'outageTowns.json'
with open(fname, 'w', encoding='UTF-8') as f:
    json.dump(towns_dict, f, indent=2, sort_keys=True, ensure_ascii=False)

print(json.dumps(towns_dict, indent=2, sort_keys=True, ensure_ascii=False))

# "Reopen" the file

# timestamp = regions_dict['timestamp']
# regions_list = regions_dict['regions']
# totals_obj = regions_dict['totals']

# new_list = []

# totals_obj['type'] = 'totals'
# totals_obj['name'] = None
# totals_obj['percentageClientsWithoutService'] = totals_obj['totalPercentageWithoutService']
# totals_obj['percentageClientsWithService'] = totals_obj['totalPercentageWithService']
# del totals_obj['totalPercentageWithoutService']
# del totals_obj['totalPercentageWithService']
# new_list.append(totals_obj)

# for region in regions_list:
#     region['type'] = 'region'
#     new_list.append(region)

# for row in new_list:
#     row['timestamp'] = timestamp
#     row['timestamp_saved'] = timestamp_saved

# print(json.dumps(new_list, indent=2, sort_keys=True))

# df = (
#     pl.DataFrame(new_list)
#     .select([
#         'timestamp_saved',
#         'timestamp', 'type', pl.col('name').alias('region_name'),
#         'totalClients', 'totalClientsWithoutService', 'totalClientsWithService',
#         'percentageClientsWithoutService', 'percentageClientsWithService',

#     ])
# )
# with pl.Config(tbl_cols=-1):
#     print(df)

# out_fname = 'regionsWithoutService_historical.csv'
# if os.path.exists(out_fname):
#     existing_df = pl.read_csv(out_fname)
#     if ('csv_timestamp' in existing_df.columns):
#         existing_df = existing_df.rename({'csv_timestamp': 'timestamp_saved'})
#     df = existing_df.vstack(df)

# df.write_csv(out_fname)
# print(f'Wrote {out_fname}')