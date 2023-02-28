import dynamic from 'next/dynamic'
import { AboveFold, Header } from './components'
import * as Styles from './styles'

const EmploymentCta = dynamic(() => import('./components').then(t => t.EmploymentCta), {
  ssr: false
})

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <AboveFold />
      <EmploymentCta />
    </Styles.Container>
  )
}