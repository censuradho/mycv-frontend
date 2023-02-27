import { Avatar } from '@/components/common'
import { paths } from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

export function Header () {
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
          <Avatar alt="user" />
        </Styles.Trigger>
        <Styles.Portal>
          <Styles.Content>
            <Styles.Item>Configurações</Styles.Item>
            <Styles.Item>Sair</Styles.Item>
          </Styles.Content>
        </Styles.Portal>
      </Styles.Root>
    </Styles.Container>
  )
}