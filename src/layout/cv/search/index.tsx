import { Box, Container, Input, Typography } from '@/components/common'
import { paths } from '@/constants/routes'
import { useBoolean } from '@/hooks'
import { Header } from '@/layout/home/components'
import { curriculumService } from '@/services/api/curriculum'
import { GetProfile } from '@/services/api/curriculum/types'
import { PaginationOptions } from '@/services/api/types'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { Profile } from './components'
import * as Styles from './styles'

export function CvSearchLayout () {
  const { query, push } = useRouter()

  const { 
    q,
    page = 1
  } = query

  const [results, setResults] = useState<GetProfile[]>([])
  const [isLoading, toggleIsLoading] = useBoolean()

  const [search, setSearch] = useState('')

  const handleGetProfiles = async (options?: PaginationOptions) => {
    try {
      toggleIsLoading()

      const { data } = await curriculumService.getProfiles(options)
      setResults(data.data)
    } finally {
      toggleIsLoading()
    }
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

  const renderEmptyMessage = () => {
    if (results.length !== 0) return null

    return (
      <Box flex={1} flexDirection="column" gap={0.5} justifyContent="center" alignItems="center">
        <Typography color="heading" fontWeight="800" size="lg">Ooops 😶</Typography>
        <Typography>Nenhum resultado encontrado</Typography>
      </Box>
    )
  }

  useEffect(() => {
    handleGetProfiles({
      page: Number(page),
      q: q as string
    })
  }, [page, q])

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
              loading={isLoading}
              value={search}
              onChange={event => setSearch(event.target.value)}
              leftIcon={{ name: 'search', color: 'text' }}
              placeholder="Nome, Cargo, Cidade, Pais"
              required
            />
          </Styles.Form>
        </Box>
      </Container>
      <Styles.Container>
        <Container>
          {renderEmptyMessage()}
          <Styles.List>
            {renderProfiles}
          </Styles.List>
        </Container>
      </Styles.Container>
    </>
  )
}