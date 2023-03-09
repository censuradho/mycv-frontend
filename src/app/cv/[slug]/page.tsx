import { curriculumService } from "@/services/api/curriculum";
import { Metadata } from "next";
import { getMetaTag } from "@/config/appSettings";
import { CvPerfilLayout } from "@/layout/cv/perfil";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params

  const { data } = await curriculumService.findBySlug(slug)

  const username = `${data.first_name} ${data.last_name}`

  return getMetaTag({ 
    title: username,
    description: data.presentation.slice(0, 100).replace(/<p>|<\/p>/g, '')
  })
}

export default async function Page({ params }: any) {
  const { data } = await curriculumService.findBySlug(params.slug)

  return (
    <CvPerfilLayout data={data} />
  )
}