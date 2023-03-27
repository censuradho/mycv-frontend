'use client';

import { Box, ButtonIcon, Container, Head, Icon, Typography } from '@/components/common'
import { format } from '@/lib/date-fns'

import * as Styles from './styles'

import { Footer, Header } from '@/layout/home/components'
import dynamic from 'next/dynamic'

import { CvPerfilProps } from './types'
import { useEffect, useState } from 'react';
import { Curriculum } from '@/services/api/curriculum/types';
import { useRouter } from 'next/router';
import { curriculumService } from '@/services/api/curriculum';

const Share = dynamic(() => import('./components').then(t => t.Share), {
  ssr: false
})

export function CvPerfilLayout () {
  const router = useRouter()
  const { slug } = router.query

  const [data, setData] = useState<Curriculum | null>(null)


  const username = `${data?.first_name} ${data?.last_name}`

  const renderExperiences = () => {
    if (data?.experiences?.length === 0) return null

    const renderItems = data?.experiences?.map((value, index) => {

      const { final_date, initial_date, is_main } = value || {}

      const currentFinal = is_main ? 'Atualmente' : final_date ? format(new Date(final_date), 'MMM yyyy') : ''
       
      return (
        <li key={index}>
          <Box flexDirection="column" gap={0.3}>
            <Typography as="strong" color="heading" size="xsm">{`${value.employer} — ${value.title}`}</Typography>
            <Styles.FromTo>{`${format(new Date(initial_date), 'MMM yyyy')} - ${currentFinal}`}</Styles.FromTo>
          </Box>
          <Styles.JobDescription dangerouslySetInnerHTML={{ __html: value.description }} />
        </li>
      )
    })

    return (
      <Styles.Section>
        <Styles.SectionTitle>Experiência</Styles.SectionTitle>
        {renderItems}
      </Styles.Section>
    )
  }

  const renderEducation = () => {
    if (data?.educations?.length === 0) return null

    const renderItems = data?.educations?.map((value, index) => {

      const { final_date, initial_date, is_main } = value || {}

      const currentFinal = is_main ? 'Atualmente' : final_date ? format(new Date(final_date), 'MMM yyyy') : ''
       
      return (
        <li key={index}>
          <Box flexDirection="column" gap={0.3}>
            <Typography as="strong" color="heading" size="xsm">{`${value.institution_name} — ${value.title},  ${value.level}`}</Typography>
            <Styles.FromTo>{`${format(new Date(initial_date), 'MMM yyyy')} - ${currentFinal}`}</Styles.FromTo>
          </Box>
          {value?.description && <Styles.JobDescription dangerouslySetInnerHTML={{ __html: value?.description }} />}
        </li>
      )
    })

    return (
      <Styles.Section>
        <Styles.SectionTitle>Escolaridade</Styles.SectionTitle>
        {renderItems}
      </Styles.Section>
    )
  }

  const renderPortfolios = () => {
    if (data?.portfolios?.length === 0) return null

    const renderItems = data?.portfolios?.map((value, index) => {

      const { name, link, icon } = value || {}

       
      return (
        <li key={index}>
          <Box  gap={0.3}>
            <Icon name={icon as any} />
            <Styles.Link target="_blank" href={link}>{name}</Styles.Link>
          </Box>
        </li>
      )
    })

    return (
      <Styles.Section>
        <Styles.SectionTitle>Portfolio</Styles.SectionTitle>
        {renderItems}
      </Styles.Section>
    )
  }

  const renderSkills = () => {
    if (!data?.skills || data?.skills?.length === 0) return null

    const renderItems = data?.skills?.map((value, index) => (
      <li key={value.id}>
        {value.name}
      </li>
    ))
    return (
      <Box marginTop={2} flexDirection="column" >
        <Styles.SectionTitle>Habilidades</Styles.SectionTitle>
        <Styles.SkillList>{renderItems}</Styles.SkillList>
      </Box>
    )
  }

  const handleGetCurriculum = async (slug: string) => {

    const { data: curriculum } = await curriculumService.findBySlug(slug as string)

    setData(curriculum)
  }

  useEffect(() => {
    if (!slug) return;

    handleGetCurriculum(slug as string)
  }, [slug])

  return (
    <div>
      <Head 
        title={username}
        description={data?.presentation?.slice(0, 100).replace(/<p>|<\/p>/g, '')}
      />
      <Header />
      <Container size="sm">
        <Styles.Header>
          <Box fullWidth marginTop={3} justifyContent="flex-end">
            <Share>
              <ButtonIcon 
                textHelper="Compartilhar"
                label="Compartilhar"
                icon={{
                  name: 'shareBoxLine',
                }}
              />
            </Share>
          </Box>
        </Styles.Header>
      </Container>
      <Container size="sm">
        <Styles.Container>
          <Box flexDirection="column">
            <Box alignItems="flexStart" gap={2}>
              <Box fullWidth flexDirection="column" gap={0.2} flex={1}>
                <Typography 
                  as="h1"
                  size="xlg" 
                  fontWeight="600" 
                  color="heading"
                >{username}</Typography>
                <Typography 
                  size="md"
                  color="heading"
                >
                  {data?.title}
                </Typography>
                <Styles.Presentation 
                  dangerouslySetInnerHTML={{ 
                    __html: data ? data?.presentation?.replace(/<br\>|<p>| <\/p>/g, '') : ''
                  }} 
                />
              </Box>
            </Box>
            <Styles.List>
              {renderExperiences()}
              {renderEducation()}
              {renderPortfolios()}
            </Styles.List> 
          </Box>
          <Box flexDirection="column" style={{ minWidth: '200px' }}>
            <Typography as="p" size="xsm" color="heading">{`${data?.address?.country} ${data?.address?.city ? ', ' + data?.address?.city : ''}`}</Typography>
            <Typography as="p" size="xsm" color="heading">{data?.phone}</Typography>
            <Typography as="p" size="xsm" color="heading">{data?.public_email}</Typography>
            {renderSkills()}
          </Box>
        </Styles.Container>
      </Container>
      <Footer />
    </div>
  )
}