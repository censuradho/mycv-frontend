import { Box, Button } from '@/components/common'
import { paths } from '@/constants/routes'
import { useAuth } from '@/context/auth'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

export function Header () {
  const { isSigned } = useAuth()

  const renderButtons = () => {
    if (isSigned) return <Button as="a" href={paths.cv.me}>Meu perfil</Button>

    return (
      <>
        <Button as="a" href={paths.auth.signIn}  variant="letter">Login</Button>
        <Button as="a" href={paths.auth.signUp} >Cadastre-se</Button>
      </>
    )
  }

  return (
    <Styles.Container>
      <Link href={paths.home}>
        <Image src="/logo.svg" alt="" height={40} width={40} style={{ objectFit: 'contain' }} />
      </Link>
      <Box flex={1} justifyContent="flex-end" gap={1} alignItems="center">
        {renderButtons()}
      </Box>
    </Styles.Container>
  )
}