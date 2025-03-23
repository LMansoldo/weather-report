import { CITIES, COUNTRIES, REGIONS } from "@models/enums/weather.enum";
import { ICity } from "@models/interfaces/weather-dashboard";

export const Cities: ICity[] = [
	{
		name: CITIES.JOINVILLE,
		region: REGIONS.SC,
		country: COUNTRIES.BRAZIL,
		lat: -26.3045,
		lon: -48.8487
	},
	{
		name: CITIES.SAN_FRANCISCO,
		region: REGIONS.CA,
		country: COUNTRIES.USA,
		lat: 37.7749,
		lon: -122.4194
	},
	{
		name: CITIES.URUBICI,
		region: REGIONS.SC,
		country: COUNTRIES.BRAZIL,
		lat: -28.0153,
		lon: -49.5925
	}
];