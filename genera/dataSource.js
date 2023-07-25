const timestamp_saved = '07/25/2023 05:03 AM';
const dataFechaAcualizado = '7/25/2023' + ' 12:55:30 AM';
const dataFuelCost = [
	{place: 'San Juan', value: 100},
	{place: 'San Juan CC', value: 144},
	{place: 'Palo Seco', value: 100},
	{place: 'Aguirre', value: 106},
	{place: 'Aguirre CC', value: 147},
	{place: 'Costa Sur', value: 100},
	{place: 'Cambalache', value: 150},
	{place: 'Mayaguez', value: 144},
	{place: 'Costa Sur LNG', value: 9},
];
const dataByFuel = [
	{fuel: 'Bunker', value: 21},
	{fuel: 'Diesel', value: 21},
	{fuel: 'LNG', value: 39},
	{fuel: 'Coal', value: 18},
	{fuel: 'Renew', value: 0},
];
const dataMetrics = [
	{Index:'0', Desc:'Total de Generación', value: 2513},
	{Index:'1', Desc:'PREPA', value: 61},
	{Index:'2', Desc:'COGEN', value: 39},
	{Index:'3', Desc:'Reserva en Rotación', value: 290},
	{Index:'4', Desc:'Reserva Operacional', value: 324},
	{Index:'5', Desc:'Capacidad Disponible', value: 2825},
	{Index:'6', Desc:'Próxima Hora MW', value: 2384},
	{Index:'7', Desc:'Máxima para Hoy', value: 2616},
	{Index:'8', Desc:'Máxima Mensual', value: 3004},
];
const dataLoadPerSite = [
	{Index:'0', Type:'Hidroelectricas', Desc:'Dos Bocas', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '0'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId: '0'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId: '0'},
		]
	},
	{Index:'1', Type:'Hidroelectricas', Desc:'Caonillas', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '1'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId: '1'},
		]
	},
	{Index:'2', Type:'Hidroelectricas', Desc:'Garzas', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '2'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId: '2'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId: '2'},
		]
	},
	{Index:'3', Type:'Hidroelectricas', Desc:'Rio Blanco', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '3'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId: '3'},
		]
	},
	{Index:'4', Type:'Hidroelectricas', Desc:'Toro Negro', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '4'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId: '4'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId: '4'},
			{Index:'3', Unit:'Hidro 4', MW: 0, MVar:'0', Cost:0, ParentId: '4'},
			{Index:'4', Unit:'Hidro 5', MW: 0, MVar:'0', Cost:0, ParentId: '4'},
		]
	},
	{Index:'5', Type:'Hidroelectricas', Desc:'Yauco', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '5'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId: '5'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId: '5'},
		]
	},
	{Index:'6', Type:'COGEN', Desc:'AES', SiteTotal: 453,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 238, MVar:'58', Cost:4.39, ParentId: '6'},
			{Index:'1', Unit:'Unit 2', MW: 214, MVar:'56', Cost:4.39, ParentId: '6'},
		]
	},
	{Index:'7', Type:'COGEN', Desc:'Ecoelectrica', SiteTotal: 427,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 170, MVar:'50', Cost:10.98, ParentId: '7'},
			{Index:'1', Unit:'Gas 2', MW: 118, MVar:'52', Cost:10.98, ParentId: '7'},
			{Index:'2', Unit:'STG', MW: 140, MVar:'50', Cost:10.98, ParentId: '7'},
		]
	},
	{Index:'8', Type:'Turbina de Gas', Desc:'Estaciones GT', SiteTotal: 140,
		units:[
			{Index:'0', Unit:'Palo Seco', MW: 102, MVar:'0', Cost:4.90, ParentId: '8'},
			{Index:'1', Unit:'Vega Baja', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'2', Unit:'Costa Sur', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'3', Unit:'Jobos', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'4', Unit:'Daguao', MW: 37, MVar:'0', Cost:31.35, ParentId: '8'},
			{Index:'5', Unit:'Yabucoa', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'6', Unit:'Aguirre', MW: 0, MVar:'0', Cost:17.47, ParentId: '8'},
			{Index:'7', Unit:'FEMA GT PS', MW: 155, MVar:'16', Cost:0, ParentId: '8'},
			{Index:'8', Unit:'FEMA GT SJ', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
		]
	},
	{Index:'9', Type:'Turbina de Gas', Desc:'Mayaguez', SiteTotal: 172,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 51, MVar:'0', Cost:21.94, ParentId: '9'},
			{Index:'1', Unit:'Gas 2', MW: 25, MVar:'0', Cost:26.33, ParentId: '9'},
			{Index:'2', Unit:'Gas 3', MW: 46, MVar:'5', Cost:22.33, ParentId: '9'},
			{Index:'3', Unit:'Gas 4', MW: 50, MVar:'0', Cost:22.17, ParentId: '9'},
		]
	},
	{Index:'10', Type:'Turbina de Gas', Desc:'Cambalache', SiteTotal: 101,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId: '10'},
			{Index:'1', Unit:'Gas 2', MW: 51, MVar:'1', Cost:30.92, ParentId: '10'},
			{Index:'2', Unit:'Gas 3', MW: 50, MVar:'2', Cost:30.95, ParentId: '10'},
		]
	},
	{Index:'11', Type:'Ciclo Combinado', Desc:'San Juan', SiteTotal: 416,
		units:[
			{Index:'0', Unit:'CTG 5', MW: 157, MVar:'46', Cost:8.25, ParentId: '11'},
			{Index:'1', Unit:'STG 5', MW: 52, MVar:'11', Cost:8.25, ParentId: '11'},
			{Index:'2', Unit:'CTG 6', MW: 159, MVar:'0', Cost:8.16, ParentId: '11'},
			{Index:'3', Unit:'STG 6', MW: 48, MVar:'9', Cost:8.16, ParentId: '11'},
		]
	},
	{Index:'12', Type:'Ciclo Combinado', Desc:'Aguirre Stag 1', SiteTotal: 60,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 30, MVar:'2', Cost:31.58, ParentId: '12'},
			{Index:'1', Unit:'Gas 2', MW: 30, MVar:'9', Cost:31.37, ParentId: '12'},
			{Index:'2', Unit:'Gas 3', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
			{Index:'3', Unit:'Gas 4', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
			{Index:'4', Unit:'STG 1', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
		]
	},
	{Index:'13', Type:'Ciclo Combinado', Desc:'Aguirre Stag 2', SiteTotal: 60,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
			{Index:'1', Unit:'Gas 2', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
			{Index:'2', Unit:'Gas 3', MW: 30, MVar:'0', Cost:31.22, ParentId: '13'},
			{Index:'3', Unit:'Gas 4', MW: 30, MVar:'3', Cost:31.09, ParentId: '13'},
			{Index:'4', Unit:'STG 2', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
		]
	},
	{Index:'14', Type:'Vapor', Desc:'San Juan', SiteTotal: 96,
		units:[
			{Index:'0', Unit:'Unit 7', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
			{Index:'1', Unit:'Unit 8', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
			{Index:'2', Unit:'Unit 9', MW: 96, MVar:'6', Cost:18.65, ParentId: '14'},
			{Index:'3', Unit:'Unit 10', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
		]
	},
	{Index:'15', Type:'Vapor', Desc:'Palo Seco', SiteTotal: 170,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
			{Index:'1', Unit:'Unit 2', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
			{Index:'2', Unit:'Unit 3', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
			{Index:'3', Unit:'Unit 4', MW: 170, MVar:'58', Cost:15.42, ParentId: '15'},
		]
	},
	{Index:'16', Type:'Vapor', Desc:'Aguirre', SiteTotal: 268,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId: '16'},
			{Index:'1', Unit:'Unit 2', MW: 268, MVar:'117', Cost:17.47, ParentId: '16'},
		]
	},
	{Index:'17', Type:'Vapor', Desc:'Costa Sur', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Unit 3', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'1', Unit:'Unit 4', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'2', Unit:'Unit 5', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'3', Unit:'Unit 6', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
		]
	},
	{Index:'18', Type:'Renovable', Desc:'Wind', SiteTotal: 2,
		units:[
			{Index:'0', Unit:'Pattern', MW: 2, MVar:'0', Cost:16.29, ParentId: '18'},
		]
	},
	{Index:'19', Type:'Renovable', Desc:'Solar', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'San Fermin', MW: 0, MVar:'0', Cost:18.32, ParentId: '19'},
			{Index:'1', Unit:'Ilumina', MW: 0, MVar:'0', Cost:21.43, ParentId: '19'},
			{Index:'2', Unit:'Horizon', MW: 0, MVar:'0', Cost:19.60, ParentId: '19'},
			{Index:'3', Unit:'Coto Laurel', MW: 0, MVar:'0', Cost:19.10, ParentId: '19'},
			{Index:'4', Unit:'Oriana', MW: 0, MVar:'3', Cost:19.60, ParentId: '19'},
			{Index:'5', Unit:'Fonroche', MW: 0, MVar:'1', Cost:17, ParentId: '19'},
		]
	},
	{Index:'20', Type:'Renovable', Desc:'Landfill', SiteTotal: 1,
		units:[
			{Index:'0', Unit:'Toa Baja', MW: 0, MVar:'0', Cost:10, ParentId: '20'},
			{Index:'1', Unit:'Fajardo', MW: 1, MVar:'0', Cost:10, ParentId: '20'},
		]
	},
	{Index:'21', Type:'Turbina de Gas', Desc:'Palo Seco', SiteTotal: 39,
		units:[
			{Index:'0', Unit:'CT Block 1', MW: 19, MVar:'0', Cost:26, ParentId: '21'},
			{Index:'1', Unit:'CT Block 2', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'2', Unit:'CT Block 3', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'3', Unit:'GT1', MW: 19, MVar:'0', Cost:25.82, ParentId: '21'},
			{Index:'4', Unit:'GT2', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'5', Unit:'GT3', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'6', Unit:'GT4', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'7', Unit:'GT5', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'8', Unit:'GT6', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
		]
	},
	{Index:'22', Type:'Turbina de Gas', Desc:'Aguirre', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'GT1', MW: 0, MVar:'0', Cost:0, ParentId: '22'},
			{Index:'1', Unit:'GT2', MW: 0, MVar:'0', Cost:0, ParentId: '22'},
		]
	},
	{Index:'23', Type:'Turbina de Gas', Desc:'Costa Sur', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'GT1', MW: 0, MVar:'0', Cost:19, ParentId: '23'},
			{Index:'1', Unit:'GT2', MW: 0, MVar:'0', Cost:0, ParentId: '23'},
		]
	},
];