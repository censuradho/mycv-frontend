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
          alt="logo"
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </Link>
    </Styles.Container>
  )
}