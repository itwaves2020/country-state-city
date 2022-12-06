// import cityList from './assets/city.json';
import { compare } from './utils';
import { ICity } from './interface';
import { AxiosInstance } from './http';
let cityList: any[] = [];

/**
 * Load countries
 * @returns 
 */
 function loadCountries() {
	return AxiosInstance()
		.get('/country.json')
		.then(result => {
			console.log("resultresultresult: ",result)
			cityList = result.data;
		})
		.catch(error => {
			console.log("Error: ", error)
		})
}
loadCountries();

// Get a list of all cities.
function getAllCities() {
	return cityList;
}

// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode: string, stateCode: string): ICity[] {
	if (!stateCode) return [];
	if (!countryCode) return [];

	const cities = cityList.filter((value: { countryCode: string; stateCode: string }) => {
		return value.countryCode === countryCode && value.stateCode === stateCode;
	});

	return cities.sort(compare);
}

// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode: string): ICity[] | undefined {
	if (!countryCode) return [];

	const cities = cityList.filter((value: { countryCode: string }) => {
		return value.countryCode === countryCode;
	});
	return cities.sort(compare);
}

export default {
	getAllCities,
	getCitiesOfState,
	getCitiesOfCountry,
};
