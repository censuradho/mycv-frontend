import { Box, Button, ButtonLink, Typography, UnderlineLink } from '@/components/common'
import { InputForm, InputPassword } from '@/components/common/hook-form'
import { SignUpWithEmailPasswordRequest } from '@/services/api/auth/types'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as Styles from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpWithEmailPasswordValidationSchema } from './validation'
import { useAuth } from '@/context/auth'
import { useRouter } from 'next/router'
import { paths } from '@/constants/routes'
import { authService } from '@/services/api/auth'
import { Header } from '../components'

export function RegisterLayout () {
  const router = useRouter()

  const { 
    onSignInWithEmailPassword,
    isLoading 
  } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpWithEmailPasswordRequest>({
    resolver: yupResolver(signUpWithEmailPasswordValidationSchema)
  })

  const onSubmit = async (data: SignUpWithEmailPasswordRequest) => {
    await onSignInWithEmailPassword(data)
    router.push(paths.cv.me)
  }

  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.FormView>
          <Styles.Form onSubmit={handleSubmit(onSubmit)}>
            <Box fullWidth flexDirection="column" gap={0.5} marginBottom={2.625}>
              <Typography size="lg" color="heading" fontWeight="600">Cadastre-se 🌟</Typography>
              <Typography>Seja Bem-vindo!</Typography>
            </Box>
            <InputForm 
              label="E-mail"
              register={register('email')}
              fullWidth
              type="email"
              inputMode="email"
              errorMessage={errors?.email?.message}
            />
            <InputPassword 
              label="Senha"
              register={register('password')}
              fullWidth
              errorMessage={errors?.password?.message}
            />
            <InputForm 
              label="Nome completo"
              register={register('username')}
              fullWidth
              inputMode="text"
              type="text"
              errorMessage={errors?.username?.message}
            />
            <Box justifyContent="flex-end" fullWidth>
              <Typography size="xsm">Ja é membro? <UnderlineLink href={paths.auth.signIn}>Faça login</UnderlineLink></Typography>
            </Box>
            <Box marginTop={2} fullWidth>
              <Button loading={isLoading} fullWidth>Entrar</Button>
            </Box>
          </Styles.Form>
        </Styles.FormView>
      </Styles.Container>
    </>
  )
}