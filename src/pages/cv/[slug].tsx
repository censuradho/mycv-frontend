import { Head } from "@/components/common";
import { appSettings } from "@/config/appSettings";
import { CvPerfilLayout } from "@/layout/cv/perfil";
import { CvPerfilProps } from "@/layout/cv/perfil/types";
import { curriculumService } from "@/services/api/curriculum";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<CvPerfilProps> = async (context) => {
  const { slug } = context?.params || {}

  const response = await fetch(`${appSettings.backend_url}/curriculum/${slug}`)
  const data = await response.json()

  return {
    props: {
      data
    },
    revalidate: 10
  }
}

function CvPerfilPage (props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { 
    first_name, 
    last_name,
  } = props?.data

  const fullName = `${first_name} ${last_name}`

  return (
    <>
      <Head 
        title={fullName}
        description={props?.data?.presentation.slice(0, 100).replace(/<p>|<\/p>/g, '')}
      />
      <CvPerfilLayout {...props} />
    </>
  )
}



export default CvPerfilPage
