import { Box, Button, Container, Typography } from '@/components/common'
import Image from 'next/image'
import * as Styles from './styles'

export function EmploymentCta () {
  return (
    <Container size="lg">
      <Styles.Container>
        <Box 
          fullWidth 
          maxWidth={400} 
          flexDirection="column" 
          gap={1}
          alignItems="flexStart"
        >
          <Typography as="h2" size="xlg" color="heading" fontWeight="800">Acesso fácil</Typography>
          <Typography as="P">
            currículo online pode ser facilmente acessado de qualquer lugar do mundo, a qualquer hora,{' '} 
            desde que haja uma conexão com a internet. Isso torna mais fácil para potenciais empregadores{' '} 
            e recrutadores acessarem seu currículo e considerarem sua candidatura, independentemente da sua localização.
          </Typography>
          <Button as="a" href="#search">Pesquisar</Button>
        </Box>
        <Styles.Blocks>
          <Styles.Figure>
            <Image src="/Mask group.jpg" fill alt="" />
          </Styles.Figure>
          <Styles.Block>
            <Styles.BlockTitle>10 min</Styles.BlockTitle>
            <Typography  fontWeight="500" color="heading">para criar seu perfil</Typography>
          </Styles.Block>
          <Styles.Block>
            <Styles.BlockTitle>Online</Styles.BlockTitle>
            <Typography fontWeight="500" color="heading">Compartilhe a url</Typography>
          </Styles.Block>
          <Styles.Figure>
            <Image src="/Mask group (1).jpg" fill alt="" />
          </Styles.Figure>
        </Styles.Blocks>
      </Styles.Container>
    </Container>
  )
}