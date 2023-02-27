import { Box, Container, Icon, Typography } from '@/components/common'
import { format } from '@/lib/date-fns'

import * as Styles from './styles'

import { CvPerfilProps } from './types'

export function CvPerfilLayout (props: CvPerfilProps) {
  const { data } = props

  const renderExperiences = () => {
    if (data?.experiences?.length === 0) return null

    const renderItems = data?.experiences?.map((value, index) => {

      const { final_date, initial_date } = value

       
      return (
        <li key={index}>
          <Box flexDirection="column" gap={0.3}>
            <Typography as="strong" color="heading" size="xsm">{`${value.employer} — ${value.title}`}</Typography>
            <Styles.FromTo>{`${format(new Date(initial_date), 'MMM yyyy')} - ${final_date ? format(new Date(final_date), 'MMM yyyy') : 'Atualmente'}`}</Styles.FromTo>
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

      const { final_date, initial_date } = value

       
      return (
        <li key={index}>
          <Box flexDirection="column" gap={0.3}>
            <Typography as="strong" color="heading" size="xsm">{`${value.institution_name} — ${value.title},  ${value.level}`}</Typography>
            <Styles.FromTo>{`${format(new Date(initial_date), 'MMM yyyy')} - ${final_date ? format(new Date(final_date), 'MMM yyyy') : 'Atualmente'}`}</Styles.FromTo>
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

      const { name, link, icon } = value

       
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


  const renderSkills = data?.skills?.map((value, index) => (
    <li key={value.id}>
      {value.name}
    </li>
  ))


  return (
    <Container>
      <Styles.Container>
        <Box flexDirection="column">
          <Box alignItems="flexStart" gap={2}>
            <Box flexDirection="column" gap={0.2} flex={1}>
              <Typography 
                as="h1"
                size="xlg" 
                fontWeight="600" 
                color="heading"
              >{`${data?.first_name} ${data?.last_name}`}</Typography>
              <Typography 
                size="md"
                color="heading"
              >
                {data?.title}
              </Typography>
              <Styles.Presentation dangerouslySetInnerHTML={{ __html: data?.presentation.replace(/<br\>/g, '')}} />
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
          <Box marginTop={2} flexDirection="column" >
            <Styles.SectionTitle>Habilidades</Styles.SectionTitle>
            <Styles.SkillList>{renderSkills}</Styles.SkillList>
          </Box>
        </Box>
      </Styles.Container>
    </Container>
  )
}