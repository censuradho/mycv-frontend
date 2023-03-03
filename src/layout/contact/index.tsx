import { Box, Typography, Container, Button } from '@/components/common'
import { EditorForm, InputForm } from '@/components/common/hook-form'
import { useToast } from '@/context'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Footer, Header } from '../home/components'
import * as Styles from './styles'
import { ContactFormData } from './types'
import { contactValidationSchema } from './validations'

export function ContactLayout () {
  const { onNotify } = useToast()

  const { 
    register,
    control,
    formState: { errors },
    handleSubmit
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactValidationSchema)
  })

  const onSubmit = () => {
    onNotify({
      title: 'E-mail enviado ✅',
      description: 'Vamos te retornar o mais rápido possível'
    })
  }

  return (
    <>
      <Header />
      <Styles.Container>
        <Container>
          <Box>
            <Typography size="xlg" fontWeight="800" color="heading" as="h1">Vamos adorar te ouvir,<br /> entre em contato 👋</Typography>
          </Box>
          <Styles.Form onSubmit={handleSubmit(onSubmit)}>
            <Box
              gap={1}
              fullWidth
              flexDirection={{
                '@initial': 'column',
                "@table-min": 'row'
              }}
            >
              <InputForm 
                id="name"
                label="Nome completo"
                register={register('name')}
                fullWidth
                errorMessage={errors?.name?.message}
              />
              <InputForm 
                id="email"
                label="E-mail"
                fullWidth
                errorMessage={errors?.email?.message}
                register={register('email')}
              />
            </Box>
            <InputForm 
              id="subject"
              label="Assunto"
              register={register('subject')}
              errorMessage={errors?.subject?.message}
            />
            <EditorForm 
              control={control}
              name="message"
              errorMessage={errors?.message?.message}
              label="Mensagem"
              id="message"
            />
            <Box marginTop={2}>
              <Button>Enviar</Button>
            </Box>
          </Styles.Form>
        </Container>
      </Styles.Container>
      <Footer />
    </>
  )
}