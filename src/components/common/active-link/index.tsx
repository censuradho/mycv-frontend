import Link from 'next/link'
import { useRouter } from 'next/router';
import { ActiveLinkProps } from './types'

export function ActiveLink (props: ActiveLinkProps) {
  const router = useRouter();

  const { exact, ...otherProps } = props

  const hasMatch = exact ? router.pathname === props.href : router.pathname.includes(props.href as string )

  return (
    <Link 
      {...otherProps}
      className={hasMatch ? 'active' : ''}  
    ></Link>
  )
}