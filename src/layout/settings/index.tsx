import * as Styles from './styles'
import { Footer, Header } from '@/layout/home/components'
import { Box, Button, Container, Typography } from '@/components/common'

export function SettingsLayout () {
  return (
    <>
      <Header />
      <Container>
        <Styles.Container>
          <Typography size="lg" color="heading" fontWeight="600">Configurações</Typography>
          <hr />
          <Styles.Section>
            <Typography size="md" fontWeight="600">Deletar conta</Typography>
            <Box flexWrap="wrap" gap={1} justifyContent="space-between" alignItems="center">
              <Typography size="sm">Uma vez deletada sua conta, não poderá ser desfeito, é uma ação permanente.</Typography>
              <Button variant="danger">Deletar conta</Button>
            </Box>
          </Styles.Section>
        </Styles.Container>
      </Container>
      <Footer />
    </>
  )
}