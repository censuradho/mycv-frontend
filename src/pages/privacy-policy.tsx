import { Head } from "@/components/common";
import { PolicyPrivacyLayout } from "@/layout/policy-privacy";

export default function PrivacyPolicyPage () {
  return (
    <>
      <Head title="My CV | Politicas de privacidade" description="Aqui você encontra tudo sobre nossas politicas de privacidade" />
      <PolicyPrivacyLayout />
    </>
  )
}