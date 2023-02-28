import { paths } from '@/constants/routes'
import { useAuth } from '@/context/auth'
import { resolvePath } from '@/utils/helpers'
import { useRouter } from 'next/router'
import * as Styles from '../../styles'


export function Menu () {
  const { onSignOut, auth } = useAuth()
  const router = useRouter()

  return (
    <Styles.Portal>
      <Styles.Content>
        <Styles.Item>Configurações</Styles.Item>
        {auth?.curriculum?.slug && (
          <Styles.Item 
            onClick={() => router.push(resolvePath(paths.cv.find, { slug: auth?.curriculum?.slug  }))}>
                  Ver meu currículo
          </Styles.Item>
        )}
        <Styles.Item onClick={() => onSignOut()}>Sair</Styles.Item>
      </Styles.Content>
    </Styles.Portal>
  )
}