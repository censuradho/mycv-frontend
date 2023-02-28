import dynamic from 'next/dynamic'
import { AboveFold, Header } from './components'
import * as Styles from './styles'

const EmploymentCta = dynamic(() => import('./components').then(t => t.EmploymentCta), {
  ssr: false
})

const Search = dynamic(() => import('./components').then(t => t.Search), {
  ssr: false
})

const SupportMe = dynamic(() => import('./components').then(t => t.SupportMe), {
  ssr: false
})

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <AboveFold />
      <EmploymentCta />
      <Search />
      <SupportMe />
    </Styles.Container>
  )
}