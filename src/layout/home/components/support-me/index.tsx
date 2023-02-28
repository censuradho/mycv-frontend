import { Box, ButtonIcon, Container, Typography } from '@/components/common'
import { useToast } from '@/context'
import Image from 'next/image'
import * as Styles from './styles'

export function SupportMe () {
  const { onNotify } = useToast()

  return (
    <Container>
      <Styles.Container>
        <Box flexDirection="column" gap={1} maxWidth={500}>
          <Typography as="h3" size="md" textAlign="center" fontWeight="800">Considere apoiar este serviço</Typography>
          <Typography as="p" textAlign="center">
              Este é um serviço livre e gratuito criado com um pouco de trabalho duro.
              Se tem sido útil aos seus propósitos, considere fazer uma doação em apoio.
          </Typography>
        </Box>
        <Box flexWrap="wrap" gap={3} fullWidth justifyContent="center">
          <a href="https://www.paypal.com/donate/?hosted_button_id=EN7C44TYHL3XG" target="_blank" rel="noreferrer">
            <Image 
              src="paypal.svg" 
              alt="paypal logo" 
              width={150} 
              height={33} 
              style={{
                objectFit: 'contain'
              }}
            />
          </a>
          <Styles.Root>
            <Styles.Trigger>
              <Image 
                src="pix.svg" 
                alt="pix logo" 
                width={150} 
                height={33} 
                style={{
                  objectFit: 'contain'
                }}
              />
            </Styles.Trigger>
            <Styles.Portal>
              <Styles.Overlay />
              <Styles.Content>
                <Box justifyContent="flex-end">
                  <Styles.Close asChild>
                    <ButtonIcon 
                      label="Fechar"
                      icon={{ name: 'close' }}
                    />
                  </Styles.Close>
                </Box>

                <Box style={{ height: 300 }} flex={1} flexDirection="column" gap={0.5} alignItems="center" justifyContent="center">
                  <Typography textAlign="center">
                      Aqui está a chave PIX,
                      Obrigado por sua doação!
                  </Typography>
                  <Box alignItems="center" gap={0.5}>
                    <Typography textAlign="center" as="strong" fontWeight="800">develo.front@gmail.com</Typography>
                    <Styles.Close asChild>
                      <ButtonIcon
                        onClick={() => {
                          navigator.clipboard.writeText('develo.front@gmail.com')
                          onNotify({
                            title: '',
                            description: 'Copiado! Obrigado pelo apoio 😍'
                          })
                        }}
                        label="copiar"
                        icon={{ name: 'copy', color: 'text' }}
                      />
                    </Styles.Close>
                  </Box>
                </Box>
              </Styles.Content>
            </Styles.Portal>
          </Styles.Root>
        </Box>
      </Styles.Container>
    </Container>
  )
}