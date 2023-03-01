import { Head } from "@/components/common";
import { LoginLayout } from "@/layout/auth";

export default function LoginPage () {
  return (
    <>
      <Head 
        title="MyCV | Login"
        description="Entrar"
      />
      <LoginLayout />
    </>
  )
}