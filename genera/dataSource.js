const timestamp_saved = '09/21/2023 08:45 PM';
const dataFechaAcualizado = '9/21/2023' + ' 4:40:54 PM';
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
	{fuel: 'Bunker', value: 24},
	{fuel: 'Diesel', value: 24},
	{fuel: 'LNG', value: 34},
	{fuel: 'Coal', value: 17},
	{fuel: 'Renew', value: 1},
];
const dataMetrics = [
	{Index:'0', Desc:'Total de Generación', value: 2740},
	{Index:'1', Desc:'PREPA', value: 56},
	{Index:'2', Desc:'COGEN', value: 44},
	{Index:'3', Desc:'Reserva en Rotación', value: 203},
	{Index:'4', Desc:'Reserva Operacional', value: 216},
	{Index:'5', Desc:'Capacidad Disponible', value: 2939},
	{Index:'6', Desc:'Próxima Hora MW', value: 2863},
	{Index:'7', Desc:'Máxima para Hoy', value: 2812},
	{Index:'8', Desc:'Máxima Mensual', value: 3188},
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
	{Index:'5', Type:'Hidroelectricas', Desc:'Yauco', SiteTotal: 3,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '5'},
			{Index:'1', Unit:'Hidro 2', MW: 0, MVar:'0', Cost:0, ParentId: '5'},
			{Index:'2', Unit:'Hidro 3', MW: 3, MVar:'0', Cost:9.35, ParentId: '5'},
		]
	},
	{Index:'6', Type:'COGEN', Desc:'AES', SiteTotal: 454,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 255, MVar:'80', Cost:4.39, ParentId: '6'},
			{Index:'1', Unit:'Unit 2', MW: 199, MVar:'98', Cost:4.39, ParentId: '6'},
		]
	},
	{Index:'7', Type:'COGEN', Desc:'Ecoelectrica', SiteTotal: 447,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 152, MVar:'46', Cost:10.62, ParentId: '7'},
			{Index:'1', Unit:'Gas 2', MW: 152, MVar:'51', Cost:10.62, ParentId: '7'},
			{Index:'2', Unit:'STG', MW: 144, MVar:'66', Cost:10.62, ParentId: '7'},
		]
	},
	{Index:'8', Type:'Turbina de Gas', Desc:'Estaciones GT', SiteTotal: 167,
		units:[
			{Index:'0', Unit:'Palo Seco', MW: 96, MVar:'0', Cost:4.88, ParentId: '8'},
			{Index:'1', Unit:'Vega Baja', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'2', Unit:'Costa Sur', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'3', Unit:'Jobos', MW: 19, MVar:'0', Cost:30.77, ParentId: '8'},
			{Index:'4', Unit:'Daguao', MW: 35, MVar:'0', Cost:31.63, ParentId: '8'},
			{Index:'5', Unit:'Yabucoa', MW: 16, MVar:'0', Cost:42.58, ParentId: '8'},
			{Index:'6', Unit:'Aguirre', MW: 0, MVar:'0', Cost:32.86, ParentId: '8'},
			{Index:'7', Unit:'FEMA GT PS', MW: 154, MVar:'69', Cost:0, ParentId: '8'},
			{Index:'8', Unit:'FEMA GT SJ', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
		]
	},
	{Index:'9', Type:'Turbina de Gas', Desc:'Mayaguez', SiteTotal: 194,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 52, MVar:'0', Cost:21.98, ParentId: '9'},
			{Index:'1', Unit:'Gas 2', MW: 53, MVar:'0', Cost:21.90, ParentId: '9'},
			{Index:'2', Unit:'Gas 3', MW: 40, MVar:'3', Cost:22.94, ParentId: '9'},
			{Index:'3', Unit:'Gas 4', MW: 50, MVar:'0', Cost:22.21, ParentId: '9'},
		]
	},
	{Index:'10', Type:'Turbina de Gas', Desc:'Cambalache', SiteTotal: 152,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId: '10'},
			{Index:'1', Unit:'Gas 2', MW: 76, MVar:'10', Cost:28.14, ParentId: '10'},
			{Index:'2', Unit:'Gas 3', MW: 76, MVar:'10', Cost:28.15, ParentId: '10'},
		]
	},
	{Index:'11', Type:'Ciclo Combinado', Desc:'San Juan', SiteTotal: 332,
		units:[
			{Index:'0', Unit:'CTG 5', MW: 154, MVar:'46', Cost:19.83, ParentId: '11'},
			{Index:'1', Unit:'STG 5', MW: 50, MVar:'11', Cost:19.83, ParentId: '11'},
			{Index:'2', Unit:'CTG 6', MW: 92, MVar:'0', Cost:9.80, ParentId: '11'},
			{Index:'3', Unit:'STG 6', MW: 35, MVar:'8', Cost:9.80, ParentId: '11'},
		]
	},
	{Index:'12', Type:'Ciclo Combinado', Desc:'Aguirre Stag 1', SiteTotal: 50,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 50, MVar:'7', Cost:28.68, ParentId: '12'},
			{Index:'1', Unit:'Gas 2', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
			{Index:'2', Unit:'Gas 3', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
			{Index:'3', Unit:'Gas 4', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
			{Index:'4', Unit:'STG 1', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
		]
	},
	{Index:'13', Type:'Ciclo Combinado', Desc:'Aguirre Stag 2', SiteTotal: 101,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
			{Index:'1', Unit:'Gas 2', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
			{Index:'2', Unit:'Gas 3', MW: 50, MVar:'0', Cost:28.62, ParentId: '13'},
			{Index:'3', Unit:'Gas 4', MW: 51, MVar:'7', Cost:28.55, ParentId: '13'},
			{Index:'4', Unit:'STG 2', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
		]
	},
	{Index:'14', Type:'Vapor', Desc:'San Juan', SiteTotal: 35,
		units:[
			{Index:'0', Unit:'Unit 7', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
			{Index:'1', Unit:'Unit 8', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
			{Index:'2', Unit:'Unit 9', MW: 35, MVar:'28', Cost:27.06, ParentId: '14'},
			{Index:'3', Unit:'Unit 10', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
		]
	},
	{Index:'15', Type:'Vapor', Desc:'Palo Seco', SiteTotal: 180,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
			{Index:'1', Unit:'Unit 2', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
			{Index:'2', Unit:'Unit 3', MW: 180, MVar:'100', Cost:16.42, ParentId: '15'},
			{Index:'3', Unit:'Unit 4', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
		]
	},
	{Index:'16', Type:'Vapor', Desc:'Aguirre', SiteTotal: 66,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId: '16'},
			{Index:'1', Unit:'Unit 2', MW: 66, MVar:'91', Cost:32.86, ParentId: '16'},
		]
	},
	{Index:'17', Type:'Vapor', Desc:'Costa Sur', SiteTotal: 368,
		units:[
			{Index:'0', Unit:'Unit 3', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'1', Unit:'Unit 4', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'2', Unit:'Unit 5', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'3', Unit:'Unit 6', MW: 368, MVar:'110', Cost:16.06, ParentId: '17'},
		]
	},
	{Index:'18', Type:'Renovable', Desc:'Wind', SiteTotal: 12,
		units:[
			{Index:'0', Unit:'Pattern', MW: 12, MVar:'0', Cost:16.29, ParentId: '18'},
		]
	},
	{Index:'19', Type:'Renovable', Desc:'Solar', SiteTotal: 18,
		units:[
			{Index:'0', Unit:'San Fermin', MW: 1, MVar:'5', Cost:18.32, ParentId: '19'},
			{Index:'1', Unit:'Ilumina', MW: 3, MVar:'6', Cost:21.43, ParentId: '19'},
			{Index:'2', Unit:'Horizon', MW: 1, MVar:'5', Cost:19.60, ParentId: '19'},
			{Index:'3', Unit:'Coto Laurel', MW: 0, MVar:'0', Cost:19.10, ParentId: '19'},
			{Index:'4', Unit:'Oriana', MW: 0, MVar:'27', Cost:19.60, ParentId: '19'},
			{Index:'5', Unit:'Fonroche', MW: 15, MVar:'4', Cost:17, ParentId: '19'},
		]
	},
	{Index:'20', Type:'Renovable', Desc:'Landfill', SiteTotal: 1,
		units:[
			{Index:'0', Unit:'Toa Baja', MW: 1, MVar:'0', Cost:10, ParentId: '20'},
			{Index:'1', Unit:'Fajardo', MW: 0, MVar:'0', Cost:10, ParentId: '20'},
		]
	},
	{Index:'21', Type:'Turbina de Gas', Desc:'Palo Seco', SiteTotal: 36,
		units:[
			{Index:'0', Unit:'CT Block 1', MW: 18, MVar:'0', Cost:26, ParentId: '21'},
			{Index:'1', Unit:'CT Block 2', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'2', Unit:'CT Block 3', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'3', Unit:'GT1', MW: 18, MVar:'0', Cost:26.16, ParentId: '21'},
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