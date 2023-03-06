import NextHead from 'next/head'

import { Head } from "@/components/common";
import { HomeLayout } from "@/layout/home";

export default function HomePage () {
  return (
    <>
      <Head 
        title="MYCV | Seja encontrado, tenha um currículo online"
        description="Encontre seu currículo ou daquele profissional que você está procurando" 
      />
      <HomeLayout />
    </>
  )
}