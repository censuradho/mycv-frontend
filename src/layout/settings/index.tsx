import { Box, Button, Container, DialogAlert, Typography } from '@/components/common'
import { useToast } from '@/context'
import { useAuth } from '@/context/auth'
import { useBoolean } from '@/hooks'
import { Footer, Header } from '@/layout/home/components'
import { authService } from '@/services/api/auth'
import { useState } from 'react'
import * as Styles from './styles'

export function SettingsLayout () {
  const { onSignOut } = useAuth()

  const { onNotify } = useToast()

  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false)
  const [isLoading, toggleIsLoading] = useBoolean()

  const handleDeleteAccount = async () => {
    try {
      toggleIsLoading()

      await authService.delete()

      onSignOut()
    } finally {
      toggleIsLoading()
    }
  }

  return (
    <>
      <Header />
      <DialogAlert 
        title="Atenção"
        description="Esta ação é irreversível"
        open={isOpenConfirmDialog}
        loading={isLoading}
        onOpenChange={setIsOpenConfirmDialog}
        onCancel={() => setIsOpenConfirmDialog(false)}
        onConfirm={handleDeleteAccount}
      />
      <Container>
        <Styles.Container>
          <Typography size="lg" color="heading" fontWeight="600">Configurações</Typography>
          <hr />
          <Styles.Section>
            <Typography size="md" fontWeight="600">Deletar conta</Typography>
            <Box flexWrap="wrap" gap={1} justifyContent="space-between" alignItems="center">
              <Typography size="sm">Uma vez deletada sua conta, não poderá ser desfeito, é uma ação permanente.</Typography>
              <Button onClick={() => setIsOpenConfirmDialog(true)} variant="danger">Deletar conta</Button>
            </Box>
          </Styles.Section>
        </Styles.Container>
      </Container>
      <Footer />
    </>
  )
}