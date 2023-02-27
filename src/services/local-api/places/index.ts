import {  localApi } from "@/services/local-api";
import { GetCityResponse, GetCountryResponse } from "@/services/ninja/places/types";

export function findByCityName (name: string) {
  return localApi.get<GetCityResponse[]>(`/places/city/${name}`)
}

export function findByCountryName (name: string) {
  return localApi.get<GetCountryResponse[]>(`/places/country/${name}`)
}

export const placeServices = {
  findByCityName,
  findByCountryName
}