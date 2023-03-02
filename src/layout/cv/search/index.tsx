import { Box, Container, Input, Typography } from '@/components/common'
import { paths } from '@/constants/routes'
import { Header } from '@/layout/home/components'
import { curriculumService } from '@/services/api/curriculum'
import { GetProfile } from '@/services/api/curriculum/types'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { Profile } from './components'
import * as Styles from './styles'

export function CvSearchLayout () {
  const { query, push } = useRouter()

  const { 
    q
  } = query

  const [results, setResults] = useState<GetProfile[]>([])

  const [search, setSearch] = useState('')

  const handleGetProfiles = async () => {
    const { data } = await curriculumService.getProfiles()
    setResults(data.data)
  }

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()
    push(`${paths?.search}?q=${search}`)
  }

  const renderProfiles = results.map((value, index) => (
    <li key={index}>
      <Profile
        {...value}
      />
    </li>
  ))

  useEffect(() => {
    handleGetProfiles()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Box flexDirection="column" justifyContent="center" alignItems="center" gap={2}>
          {q && (
            <Typography 
              as="h1" 
              textAlign="center" 
              size="md" 
              fontWeight="500"
            >
              Você buscou por {' '}
              <Typography 
                fontWeight="800"
              >{q}</Typography>
            </Typography>
          )}
          <Styles.Form onSubmit={handleSearch}>
            <Input
              value={search}
              onChange={event => setSearch(event.target.value)}
              leftIcon={{ name: 'search', color: 'text' }}
              placeholder="Nome, Cargo, Cidade, Pais"
            />
          </Styles.Form>
        </Box>
      </Container>
      <Styles.Container>
        <Container>
          <Styles.List>
            {renderProfiles}
          </Styles.List>
        </Container>
      </Styles.Container>
    </>
  )
}