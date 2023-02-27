import { Head } from "@/components/common";
import { LoginLayout } from "@/layout/login";

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