import { Head } from "@/components/common";
import { CvPerfilLayout } from "@/layout/cv/perfil";
import { CvPerfilProps } from "@/layout/cv/perfil/types";
import { curriculumService } from "@/services/api/curriculum";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<CvPerfilProps> = async (context) => {
  try {
    const { slug } = context?.params || {}

    const { data } = await curriculumService.findBySlug(slug as string)
    
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        data
      },
    }
  } catch (err) {
    console.log(err)

    return {
      notFound: true,
    }
  }
}



export default function CvPerfilPage (props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { 
    first_name, 
    last_name,
    title,
    address,
    user
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

