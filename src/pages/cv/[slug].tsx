import { Head } from "@/components/common";
import { CvPerfilLayout } from "@/layout/cv/perfil";
import { CvPerfilProps } from "@/layout/cv/perfil/types";
import { curriculumService } from "@/services/api/curriculum";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const isServerReq = (req: any) => !req.url.startsWith('/_next');

export const getServerSideProps: GetServerSideProps<CvPerfilProps | { data: null }> = async (context) => {
  const { slug } = context?.params || {}

  const { data } = await curriculumService.findBySlug(slug as string)
  
  return {
    props: {
      data: isServerReq(context) ? data : null
    },
  }
}

function CvPerfilPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!props?.data) return null
  
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
