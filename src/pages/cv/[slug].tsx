import { Head } from "@/components/common";
import { CvPerfilLayout } from "@/layout/cv/perfil";
import { CvPerfilProps } from "@/layout/cv/perfil/types";
import { MainLayout } from "@/layout/main-layout";
import { curriculumService } from "@/services/api/curriculum";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await curriculumService.findAll()

  const paths = data.map((value) => ({
    params: {
      slug: value.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<CvPerfilProps> = async (context) => {
  try {
    const { slug } = context?.params || {}

    const { data } = await curriculumService.findBySlug(slug as string)
  
    if (!data) return {
      notFound: true,
      revalidate: 10
    }
    
    return {
      props: {
        data
      },
      revalidate: 10
    }
  } catch (err) {
    return {
      notFound: true,
      revalidate: 10
    }
  }
}



export default function CvPerfilPage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <Head 
        title={`${props.data?.first_name} ${props?.data?.last_name}`}
        description={props?.data?.presentation.slice(0, 100)}
      />
      <CvPerfilLayout {...props} />
    </MainLayout>
  )
}

