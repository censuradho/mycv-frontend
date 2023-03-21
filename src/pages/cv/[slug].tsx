import { Head } from "@/components/common";
import { CvPerfilLayout } from "@/layout/cv/perfil";
import { CvPerfilProps } from "@/layout/cv/perfil/types";
import { curriculumService } from "@/services/api/curriculum";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<CvPerfilProps> = async (context) => {
  try {
    const { slug } = context?.params || {}

    const { data } = await curriculumService.findBySlug(slug as string)
  
    return {
      props: {
        data
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
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
      <CvPerfilLayout {...props} />
      <h1>{first_name}</h1>
    </>
  )
}



export default CvPerfilPage
