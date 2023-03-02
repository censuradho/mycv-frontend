import { Box, Button, Container, Input, Typography } from '@/components/common'
import { paths } from '@/constants/routes'
import { useBoolean } from '@/hooks'
import { Header } from '@/layout/home/components'
import { curriculumService } from '@/services/api/curriculum'
import { GetProfile } from '@/services/api/curriculum/types'
import { Meta, PaginationOptions } from '@/services/api/types'
import { useRouter } from 'next/router'
import { FormEvent, useCallback, useEffect, useState } from 'react'
import { Profile } from './components'
import * as Styles from './styles'

import qs from 'querystring'

const defaultMeta: Meta = {
  count: 0,
  page: 0,
  take: 10,
  totalPages: 0
}

export function CvSearchLayout () {
  const router = useRouter()
  const { query } = router

  const { 
    q
  } = query

  const [results, setResults] = useState<GetProfile[]>([])
  const [meta, setMeta] = useState(defaultMeta)

  const [isLoading, toggleIsLoading] = useBoolean()

  const [search, setSearch] = useState(q as string)

  const handleGetProfiles = async (options?: PaginationOptions) => {
    try {
      toggleIsLoading()

      const { data } = await curriculumService.getProfiles({
        q: options?.q,
        take: options?.take
      })

      setResults(data.data)
      setMeta(prevState => ({
        ...prevState,
        ...data.meta,
      }))

    } finally {
      toggleIsLoading()
    }
  }

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()

    setMeta(defaultMeta)
    router.push(`${paths?.search}?q=${search}`)
  }

  const renderEmptyMessage = () => {
    if (results.length !== 0) return null

    return (
      <Box flex={1} flexDirection="column" gap={0.5} justifyContent="center" alignItems="center">
        <Typography color="heading" fontWeight="800" size="lg">Ooops 😶</Typography>
        <Typography>Nenhum resultado encontrado</Typography>
      </Box>
    )
  }

  const renderResults = () => {
    if (results.length === 0) return null
    const renderProfiles = results.map((value, index) => (
      <li key={index}>
        <Profile
          {...value}
        />
      </li>
    ))

    return (
      <Box flexDirection="column" gap={3} alignItems="center">
        <Styles.List>
          {renderProfiles}
        </Styles.List>
        <Box>
          <Button 
            onClick={() => handleGetProfiles({
              q: String(q),
              take: meta?.take + 10
            })}
          >Carregar mais</Button>
        </Box>
      </Box>
    )
  }

  useEffect(() => {
    handleGetProfiles({
      q: q as string,
      ...meta
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Styles.Header id="search-header">
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
        </Styles.Header>
        <Styles.Container>
          {renderResults()}
          {renderEmptyMessage()}
        </Styles.Container>
      </Container>
    </>
  )
}