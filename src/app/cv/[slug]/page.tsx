import { curriculumService } from "@/services/api/curriculum";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params

  const { data } = await curriculumService.findBySlug(slug)

  const username = `${data.first_name} ${data.last_name}`

  return { 
    title: username,
    description: data.presentation.slice(0, 100).replace(/<p>|<\/p>/g, '')
  }
}

export default async function Page() {
 
  return (
    <h1>asdasd</h1>
  )
}