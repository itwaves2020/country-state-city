import { AxiosInstance } from './http';
import { findEntryByCode } from './utils';
import { ICountry } from './interface';

let countryList: any[] = [];


/**
 * Load countries
 * @returns 
 */
function loadCountries() {
	return AxiosInstance()
		.get('/country.json')
		.then(result => {
			console.log("resultresultresult: ",result)
			countryList = result.data;
		})
		.catch(error => {
			console.log("Error: ", error)
		})
}
loadCountries();

// Get a country by isoCode.
function getCountryByCode(isoCode: string): ICountry | undefined {
	if (!isoCode) return undefined;

	return findEntryByCode(countryList, isoCode);
}

// Get a list of all countries.
function getAllCountries(): ICountry[] {
	return countryList;
}

export default {
	getCountryByCode,
	getAllCountries,
};
