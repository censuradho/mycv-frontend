import { Avatar } from '@/components/common'
import { paths } from '@/constants/routes'
import { useAuth } from '@/context/auth'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

export function Header () {
  const { onSignOut, auth } = useAuth()

  return (
    <Styles.Container>
      <Link href={paths.home}>
        <Image 
          src="/logo.svg" 
          height={45} 
          width={45} 
          style={{ objectFit: 'contain' }} 
          alt="logo" 
        />
      </Link>
      <Styles.Root modal={false}>
        <Styles.Trigger>
          <Avatar alt="user"  src={auth?.avatar?.url}/>
        </Styles.Trigger>
        <Styles.Portal>
          <Styles.Content>
            <Styles.Item>Configurações</Styles.Item>
            <Styles.Item onClick={() => onSignOut()}>Sair</Styles.Item>
          </Styles.Content>
        </Styles.Portal>
      </Styles.Root>
    </Styles.Container>
  )
}