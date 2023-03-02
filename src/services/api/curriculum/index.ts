import { api } from "..";
import { Pagination, PaginationOptions } from "../types";
import { CreateCurriculum, Curriculum, GetProfile, UpdateCurriculum } from "./types";

function create (payload: CreateCurriculum) {
  return api.post('/curriculum', payload)
}

function me () {
  return api.get<Curriculum>('/curriculum/me')
}

function findAll () {
  return api.get<Array<{ slug: string }>>('/curriculum/all')
  // http://localhost:3000/cv/86363fe2-d2d1-4e20-a071-23d481c21c2c
}

function findBySlug (slug: string) {
  return api.get<Curriculum>(`/curriculum/${slug}`)
}

function uploadAvatar (payload: FormData) {
  return api.post('/curriculum/avatar/upload', payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

function destroyAvatar () {
  return api.delete('/curriculum/avatar')
}

function update (payload: UpdateCurriculum) {
  return api.put('/curriculum', payload)
}

function getProfiles (options?: PaginationOptions) {
  return api.get<Pagination<GetProfile>>('/curriculum/profiles', {
    ...(options && {
      params: {
        ...options
      }
    })
  })
}

export const curriculumService = {
  create,
  me,
  findAll,
  findBySlug,
  update,
  uploadAvatar,
  destroyAvatar,
  getProfiles
}