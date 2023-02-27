export interface GetCityResponse {
  name: string,
  latitude: number,
  longitude: number,
  country: string,
  population: number,
  is_capital: boolean
}

export interface GetCountryResponse {
  iso2: string
  region: string
  name: string
}