import { Head } from "@/components/common";
import { CvSearchLayout } from "@/layout/cv/search";

export default function SearchPage () {
  return (
    <>
      <Head 
        title="My CV | Pesquisa de currículos"
        description="Encontre seu currículo ou daquele profissional que você está procurando" 
      />
      <CvSearchLayout />
    </>
  )
}