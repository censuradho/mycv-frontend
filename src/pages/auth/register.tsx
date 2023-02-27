import { Head } from "@/components/common";
import { RegisterLayout } from "@/layout/register";

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