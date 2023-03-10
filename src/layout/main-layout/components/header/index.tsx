import { Avatar } from '@/components/common'
import { paths } from '@/constants/routes'
import { useAuth } from '@/context/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Menu } from './components'
import * as Styles from './styles'

export function Header () {
  const { auth, onAuth } = useAuth()

  useEffect(() => {
    onAuth()
  }, [])
  
  return (
    <Styles.Container>
      <Link href={paths.home}>
        <Image src="/logo.svg" alt="" height={40} width={40} style={{ objectFit: 'contain' }} />
      </Link>
      <Styles.Root modal={false}>
        <Styles.Trigger>
          <Avatar alt={auth?.username} src={auth?.avatar?.url}/>
        </Styles.Trigger>
        <Menu />
      </Styles.Root>
    </Styles.Container>
  )
}