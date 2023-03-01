import { Head } from "@/components/common";
import { RegisterLayout } from "@/layout/auth";

export default function LoginPage () {
  return (
    <>
      <Head 
        title="MyCV | Cadastro"
        description="Nova conta"
      />
      <RegisterLayout />
    </>
  )
}