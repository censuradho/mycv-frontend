import { appSettings } from "@/config/appSettings";
import { ninjaApi } from "@/services/ninja";
import { GetCityResponse, GetCountryResponse } from "./types";

export function findCityByName (name: string) {
  return ninjaApi.get<GetCityResponse[]>('/city', {
    params: {
      name,
      currency: 'BRL'
    },
  })
}

export function findCountryByName (name: string) {
  return ninjaApi.get<GetCountryResponse[]>('/country', {
    params: {
      name,
      currency: 'BRL'
    },
  })
}

export const placeServices = {
  findCityByName,
  findCountryByName
}