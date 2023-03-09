import { Head } from "@/components/common";
import { CvPerfilProps } from "@/layout/cv/perfil/types";
import { curriculumService } from "@/services/api/curriculum";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context?.params || {}

  // const [response] = await Promise.all([
  //   curriculumService.findBySlug(slug as string)
  // ])

  // const { data } = response

  return {
    props: {
      slug
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
      {/* <Head 
        title={fullName}
        description={props?.data?.presentation.slice(0, 100).replace(/<p>|<\/p>/g, '')}
      /> */}
      {/* <CvPerfilLayout {...props} /> */}
      <h1>{first_name}</h1>
    </>
  )
}



export default CvPerfilPage
