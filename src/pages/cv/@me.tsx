import { Head } from "@/components/common";
import { withAuthorization } from "@/hoc";
import { CvLayout } from "@/layout/cv";
import { MainLayout } from "@/layout/main-layout";

function CVPage () {
  return (
    <MainLayout>
      <Head 
        title="MyCV | Meu perfil"
        description="Edite e revise as informações do seu cv"
      />
      <CvLayout />
    </MainLayout>
  )
}

export default withAuthorization(CVPage)