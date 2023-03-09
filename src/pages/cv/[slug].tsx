import { Head } from "@/components/common";
import { appSettings } from "@/config/appSettings";
import { CvPerfilLayout } from "@/layout/cv/perfil";
import { CvPerfilProps } from "@/layout/cv/perfil/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<CvPerfilProps> = async (context) => {
  const { slug } = context?.params || {}

  const response = await fetch(`${appSettings.backend_url}/curriculum/${slug}`)
  const data = await response.json()

  return {
    props: {
      data
    },
  }
}

function CvPerfilPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
      {/* <CvPerfilLayout {...props} /> */}
      <h1>{first_name}</h1>
    </>
  )
}



export default CvPerfilPage
