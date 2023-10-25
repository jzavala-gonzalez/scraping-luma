const timestamp_saved = '10/25/2023 09:10 PM';
const dataFechaAcualizado = '10/25/2023' + ' 5:06:17 PM';
const dataFuelCost = [
	{place: 'San Juan', value: 98},
	{place: 'San Juan CC', value: 127},
	{place: 'Palo Seco', value: 97},
	{place: 'Aguirre', value: 96},
	{place: 'Aguirre CC', value: 127},
	{place: 'Costa Sur', value: 92},
	{place: 'Cambalache', value: 134},
	{place: 'Mayaguez', value: 127},
	{place: 'Costa Sur LNG', value: 9},
];
const dataByFuel = [
	{fuel: 'Bunker', value: 24},
	{fuel: 'Diesel', value: 22},
	{fuel: 'LNG', value: 43},
	{fuel: 'Coal', value: 11},
	{fuel: 'Renew', value: 1},
];
const dataMetrics = [
	{Index:'0', Desc:'Total de Generación', value: 2401},
	{Index:'1', Desc:'PREPA', value: 61},
	{Index:'2', Desc:'COGEN', value: 39},
	{Index:'3', Desc:'Reserva en Rotación', value: 392},
	{Index:'4', Desc:'Reserva Operacional', value: 707},
	{Index:'5', Desc:'Capacidad Disponible', value: 3097},
	{Index:'6', Desc:'Próxima Hora MW', value: 2542},
	{Index:'7', Desc:'Máxima para Hoy', value: 2444},
	{Index:'8', Desc:'Máxima Mensual', value: 3077},
];
const dataLoadPerSite = [
	{Index:'0', Type:'Hidroelectricas', Desc:'Dos Bocas', SiteTotal: 5,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '0'},
			{Index:'1', Unit:'Hidro 2', MW: 5, MVar:'3', Cost:9.35, ParentId: '0'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'3', Cost:0, ParentId: '0'},
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
	{Index:'5', Type:'Hidroelectricas', Desc:'Yauco', SiteTotal: 2,
		units:[
			{Index:'0', Unit:'Hidro 1', MW: 0, MVar:'0', Cost:0, ParentId: '5'},
			{Index:'1', Unit:'Hidro 2', MW: 2, MVar:'0', Cost:9.35, ParentId: '5'},
			{Index:'2', Unit:'Hidro 3', MW: 0, MVar:'0', Cost:0, ParentId: '5'},
		]
	},
	{Index:'6', Type:'COGEN', Desc:'AES', SiteTotal: 253,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 253, MVar:'77', Cost:4.39, ParentId: '6'},
			{Index:'1', Unit:'Unit 2', MW: 0, MVar:'0', Cost:4.39, ParentId: '6'},
		]
	},
	{Index:'7', Type:'COGEN', Desc:'Ecoelectrica', SiteTotal: 474,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 170, MVar:'49', Cost:10.48, ParentId: '7'},
			{Index:'1', Unit:'Gas 2', MW: 134, MVar:'50', Cost:10.48, ParentId: '7'},
			{Index:'2', Unit:'STG', MW: 169, MVar:'53', Cost:10.48, ParentId: '7'},
		]
	},
	{Index:'8', Type:'Turbina de Gas', Desc:'Estaciones GT', SiteTotal: 59,
		units:[
			{Index:'0', Unit:'Palo Seco', MW: 39, MVar:'0', Cost:26.02, ParentId: '8'},
			{Index:'1', Unit:'Vega Baja', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'2', Unit:'Costa Sur', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'3', Unit:'Jobos', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'4', Unit:'Daguao', MW: 20, MVar:'0', Cost:28.81, ParentId: '8'},
			{Index:'5', Unit:'Yabucoa', MW: 0, MVar:'0', Cost:0, ParentId: '8'},
			{Index:'6', Unit:'Aguirre', MW: 0, MVar:'0', Cost:17.38, ParentId: '8'},
			{Index:'7', Unit:'FEMA GT PS', MW: 160, MVar:'27', Cost:0, ParentId: '8'},
			{Index:'8', Unit:'FEMA GT SJ', MW: 205, MVar:'0', Cost:0, ParentId: '8'},
		]
	},
	{Index:'9', Type:'Turbina de Gas', Desc:'Mayaguez', SiteTotal: 0,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId: '9'},
			{Index:'1', Unit:'Gas 2', MW: 0, MVar:'0', Cost:0, ParentId: '9'},
			{Index:'2', Unit:'Gas 3', MW: 0, MVar:'0', Cost:0, ParentId: '9'},
			{Index:'3', Unit:'Gas 4', MW: 0, MVar:'0', Cost:0, ParentId: '9'},
		]
	},
	{Index:'10', Type:'Turbina de Gas', Desc:'Cambalache', SiteTotal: 51,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId: '10'},
			{Index:'1', Unit:'Gas 2', MW: 51, MVar:'19', Cost:31.11, ParentId: '10'},
			{Index:'2', Unit:'Gas 3', MW: 0, MVar:'0', Cost:0, ParentId: '10'},
		]
	},
	{Index:'11', Type:'Ciclo Combinado', Desc:'San Juan', SiteTotal: 325,
		units:[
			{Index:'0', Unit:'CTG 5', MW: 123, MVar:'39', Cost:17.26, ParentId: '11'},
			{Index:'1', Unit:'STG 5', MW: 40, MVar:'9', Cost:17.26, ParentId: '11'},
			{Index:'2', Unit:'CTG 6', MW: 123, MVar:'38', Cost:18.16, ParentId: '11'},
			{Index:'3', Unit:'STG 6', MW: 39, MVar:'8', Cost:18.16, ParentId: '11'},
		]
	},
	{Index:'12', Type:'Ciclo Combinado', Desc:'Aguirre Stag 1', SiteTotal: 60,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 30, MVar:'5', Cost:31.52, ParentId: '12'},
			{Index:'1', Unit:'Gas 2', MW: 30, MVar:'0', Cost:30.05, ParentId: '12'},
			{Index:'2', Unit:'Gas 3', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
			{Index:'3', Unit:'Gas 4', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
			{Index:'4', Unit:'STG 1', MW: 0, MVar:'0', Cost:0, ParentId: '12'},
		]
	},
	{Index:'13', Type:'Ciclo Combinado', Desc:'Aguirre Stag 2', SiteTotal: 30,
		units:[
			{Index:'0', Unit:'Gas 1', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
			{Index:'1', Unit:'Gas 2', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
			{Index:'2', Unit:'Gas 3', MW: 30, MVar:'0', Cost:31.22, ParentId: '13'},
			{Index:'3', Unit:'Gas 4', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
			{Index:'4', Unit:'STG 2', MW: 0, MVar:'0', Cost:0, ParentId: '13'},
		]
	},
	{Index:'14', Type:'Vapor', Desc:'San Juan', SiteTotal: 71,
		units:[
			{Index:'0', Unit:'Unit 7', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
			{Index:'1', Unit:'Unit 8', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
			{Index:'2', Unit:'Unit 9', MW: 71, MVar:'18', Cost:19.25, ParentId: '14'},
			{Index:'3', Unit:'Unit 10', MW: 0, MVar:'0', Cost:0, ParentId: '14'},
		]
	},
	{Index:'15', Type:'Vapor', Desc:'Palo Seco', SiteTotal: 152,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
			{Index:'1', Unit:'Unit 2', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
			{Index:'2', Unit:'Unit 3', MW: 152, MVar:'84', Cost:16.85, ParentId: '15'},
			{Index:'3', Unit:'Unit 4', MW: 0, MVar:'0', Cost:0, ParentId: '15'},
		]
	},
	{Index:'16', Type:'Vapor', Desc:'Aguirre', SiteTotal: 279,
		units:[
			{Index:'0', Unit:'Unit 1', MW: 0, MVar:'0', Cost:0, ParentId: '16'},
			{Index:'1', Unit:'Unit 2', MW: 279, MVar:'147', Cost:17.40, ParentId: '16'},
		]
	},
	{Index:'17', Type:'Vapor', Desc:'Costa Sur', SiteTotal: 270,
		units:[
			{Index:'0', Unit:'Unit 3', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'1', Unit:'Unit 4', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'2', Unit:'Unit 5', MW: 0, MVar:'0', Cost:0, ParentId: '17'},
			{Index:'3', Unit:'Unit 6', MW: 270, MVar:'6', Cost:11.31, ParentId: '17'},
		]
	},
	{Index:'18', Type:'Renovable', Desc:'Wind', SiteTotal: 2,
		units:[
			{Index:'0', Unit:'Pattern', MW: 2, MVar:'0', Cost:16.29, ParentId: '18'},
		]
	},
	{Index:'19', Type:'Renovable', Desc:'Solar', SiteTotal: 3,
		units:[
			{Index:'0', Unit:'San Fermin', MW: 0, MVar:'0', Cost:18.32, ParentId: '19'},
			{Index:'1', Unit:'Ilumina', MW: 0, MVar:'0', Cost:21.43, ParentId: '19'},
			{Index:'2', Unit:'Horizon', MW: 0, MVar:'7', Cost:19.60, ParentId: '19'},
			{Index:'3', Unit:'Coto Laurel', MW: 0, MVar:'2', Cost:19.10, ParentId: '19'},
			{Index:'4', Unit:'Oriana', MW: 1, MVar:'20', Cost:19.60, ParentId: '19'},
			{Index:'5', Unit:'Fonroche', MW: 1, MVar:'2', Cost:17, ParentId: '19'},
		]
	},
	{Index:'20', Type:'Renovable', Desc:'Landfill', SiteTotal: 1,
		units:[
			{Index:'0', Unit:'Toa Baja', MW: 0, MVar:'0', Cost:10, ParentId: '20'},
			{Index:'1', Unit:'Fajardo', MW: 1, MVar:'0', Cost:10, ParentId: '20'},
		]
	},
	{Index:'21', Type:'Turbina de Gas', Desc:'Palo Seco', SiteTotal: 78,
		units:[
			{Index:'0', Unit:'CT Block 1', MW: 19, MVar:'0', Cost:52, ParentId: '21'},
			{Index:'1', Unit:'CT Block 2', MW: 20, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'2', Unit:'CT Block 3', MW: 0, MVar:'0', Cost:0, ParentId: '21'},
			{Index:'3', Unit:'GT1', MW: 19, MVar:'0', Cost:25.85, ParentId: '21'},
			{Index:'4', Unit:'GT2', MW: 0, MVar:'0', Cost:26.19, ParentId: '21'},
			{Index:'5', Unit:'GT3', MW: 20, MVar:'0', Cost:0, ParentId: '21'},
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