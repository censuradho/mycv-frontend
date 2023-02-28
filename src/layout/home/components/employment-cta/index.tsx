import { Box, Button, Container, Typography } from '@/components/common'
import Image from 'next/image'
import * as Styles from './styles'

export function EmploymentCta () {
  return (
    <Container size="lg">
      <Styles.Container>
        <Box fullWidth maxWidth={400} flexDirection="column" gap={1}>
          <Typography as="h2" size="xlg" color="heading" fontWeight="800">Quer o profissional ideal?</Typography>
          <Typography as="P" >Faça uma pesquisa de acordo com suas necessidades.</Typography>
          <Button>Pesquisar</Button>
        </Box>
        <Styles.Blocks>
          <Styles.Figure>
            <Image src="/Mask group.jpg" fill alt="" />
          </Styles.Figure>
          <Styles.Block>
            <Styles.BlockTitle>100min</Styles.BlockTitle>
            <Typography color="heading">para criar seu perfil</Typography>
          </Styles.Block>
          <Styles.Block>
            <Styles.BlockTitle>+4k</Styles.BlockTitle>
            <Typography color="heading">de currículos</Typography>
          </Styles.Block>
          <Styles.Figure>
            <Image src="/Mask group (1).jpg" fill alt="" />
          </Styles.Figure>
        </Styles.Blocks>
      </Styles.Container>
    </Container>
  )
}