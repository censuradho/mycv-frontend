import { InputForm } from '@/components/common/hook-form'
import * as Styles from './styles'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography, UnderlineLink } from '@/components/common'
import { paths } from '@/constants/routes'
import { useToast } from '@/context/toast'

import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { authService } from '@/services/api/auth'
import { ResetPasswordFormData } from './types'
import { requestNewPasswordSchemaValidation } from './validations'
import { InputPassword } from '@/components/common/hook-form/input-password'
import { Header } from '../../components'

export function ResetPasswordLayout () {
  const { onNotify  } = useToast()

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(requestNewPasswordSchemaValidation)
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      setIsLoading(true)
      await authService.resetPassword({
        password: data.password,
        token: router.query.token as string
      })

      onNotify({
        title: 'Senha alterada com sucesso'
      })
      router.push(paths.auth.signIn)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <Styles.Main>
        <Styles.Section>
          <Styles.Form onSubmit={handleSubmit(onSubmit)}>
            <Box marginBottom={3} flexDirection="column" gap={0.5}>
              <Typography size="lg" color="heading" fontWeight="600">Alterar senha</Typography>
            </Box>
            <InputPassword
              id="password"
              label="Nova senha"
              register={register('password')}
              placeholder="+8 caracteres"
              errorMessage={errors.password?.message}
            />
            <Box>
              <Typography size="xsm">
                  Já é membro? <UnderlineLink href={paths.auth.signIn}>Login</UnderlineLink>
              </Typography>
            </Box>
            <Box marginTop={2}>
              <Button loading={isLoading} fullWidth>Enviar instruções</Button>
            </Box>
          </Styles.Form>
        </Styles.Section>
      </Styles.Main>
    </>
  )
}