import { CvPerfilLayout } from "@/layout/cv/perfil";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id
    }
  }
}

export default function CvPerfilPage (props: any) {

  console.log(props?.id)

  return (
    <>
      <CvPerfilLayout />
    </>
  )
}

