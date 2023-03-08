import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Box, Button, Container, Input, Typography } from '@/components/common'
import { Header } from '@/layout/home/components'
import { curriculumService } from '@/services/api/curriculum'
import { GetProfile } from '@/services/api/curriculum/types'
import { Meta, PaginationOptions } from '@/services/api/types'
import { FormEvent, useEffect, useState } from 'react'

import * as Styles from './styles'

const Profile = dynamic(() => import('./components').then(t => t.Profile), {
  ssr: false
})
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

  const [isLoading, setIsLoading] = useState(true)

  const [search, setSearch] = useState(q as string)

  const handleGetProfiles = async (options?: PaginationOptions) => {
    try {
      setIsLoading(true)

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
      setIsLoading(false)
    }
  }

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault()
  
    router.push(`${router.pathname}?q=${search}`)
    handleGetProfiles({
      q: search,
      take: meta.take
    })

    setMeta(defaultMeta)
  }

  const renderEmptyMessage = () => {
    if (results.length !== 0 || isLoading) return null

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
        <Box justifyContent="flex-start" fullWidth>
          <Typography as='strong' color="primary">{meta?.count} resultados<Typography fontWeight="500" color="text">  encontrados</Typography></Typography>
        </Box>
        <Styles.List>
          {renderProfiles}
        </Styles.List>
        {meta?.take <= meta?.count && (
          <Box>
            <Button 
              onClick={() => handleGetProfiles({
                q: String(q),
                take: meta?.take + 10
              })}
            >Carregar mais</Button>
          </Box>
        )}
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