import { Box, Button, ButtonLink, Typography, UnderlineLink } from '@/components/common'
import { InputForm, InputPassword } from '@/components/common/hook-form'
import { SignInWithEmailPasswordRequest } from '@/services/api/auth/types'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as Styles from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInWithEmailPasswordValidationSchema } from './validation'
import { useAuth } from '@/context/auth'
import { useRouter } from 'next/router'
import { paths } from '@/constants/routes'
import { Header } from '../components'
import { useState } from 'react'

export function LoginLayout () {
  const router = useRouter()

  const { 
    onSignInWithEmailPassword,
  } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInWithEmailPasswordRequest>({
    resolver: yupResolver(signInWithEmailPasswordValidationSchema)
  })

  const [isLoading, setIsLoading] = useState(false)
   
  const onSubmit = async (data: SignInWithEmailPasswordRequest) => {
    try {
      setIsLoading(true)
      await onSignInWithEmailPassword(data)
      router.push(paths.cv.me)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.FormView>
          <Styles.Form onSubmit={handleSubmit(onSubmit)}>
            <Box fullWidth flexDirection="column" gap={0.5} marginBottom={2.625}>
              <Typography size="lg" color="heading" fontWeight="600">Login🌟</Typography>
              <Typography>Comece agora a criar curriculos incríveis</Typography>
            </Box>
            <InputForm 
              label="E-mail"
              register={register('email')}
              fullWidth
              errorMessage={errors?.email?.message}
            />
            <InputPassword 
              label="Senha"
              register={register('password')}
              fullWidth
              errorMessage={errors?.password?.message}
            />
            <Box justifyContent="space-between" fullWidth>
              <Typography size="xsm">Não é membro? <UnderlineLink href={paths.auth.signUp}>Cadastre-se</UnderlineLink></Typography>
              {/* <UnderlineLink href={paths.auth.resetPassword}>Esqueceu sua senha?</UnderlineLink> */}
            </Box>
            <Box marginTop={2} fullWidth>
              <Button loading={isLoading} fullWidth>Entrar</Button>
            </Box>
          </Styles.Form>
        </Styles.FormView>
        <Styles.InfoView>
          <Styles.Figure>
            <Image src="/curriculum-login.png" fill alt="Currículo modelo" />
          </Styles.Figure>
        </Styles.InfoView>
      </Styles.Container>
    </>
  )
}