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
          <Typography as="h2" size="xlg" color="heading" fontWeight="800">Padrões que trazem resultado</Typography>
          <Typography as="P">
            Um currículo bem feito pode aumentar suas chances de conseguir uma entrevista e ajudá-lo a conquistar o emprego que deseja.
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