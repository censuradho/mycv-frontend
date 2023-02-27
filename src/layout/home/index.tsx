import { AboveFold, Header } from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <AboveFold />
    </Styles.Container>
  )
}