import { Container, Input, Typography } from '@/components/common'
import { paths } from '@/constants/routes'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import * as Styles from './styles'

export function Search () {
  const router = useRouter()

  const [search, setSearch] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    router.push(paths.search)
  }

  return (
    <Container size="md">
      <Styles.Container id="search">
        <Typography as="h3" size="lg" fontWeight="800" color="ancesst8">Encontre um CV</Typography>
        <Styles.Form onSubmit={handleSubmit}>
          <Input
            value={search}
            onChange={event => setSearch(event.target.value)}
            fullWidth
            placeholder="Nome, Cargo, Cidade, Estado..."
            leftIcon={{
              name: 'search',
              color: 'text'
            }}
          />
        </Styles.Form>
      </Styles.Container>
    </Container>
  )
}