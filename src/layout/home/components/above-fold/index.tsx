import { Box, Container, Typography, Button } from '@/components/common'
import Image from 'next/image'

import * as Styles from './styles'

export function AboveFold () {
  return (
    <Container size="md">
      <Styles.Container>
        <Styles.Content>
          <Typography as="h2" size="xlg">Faça seu currículo ir ao próximo nível</Typography>
          <Typography as="p">ter um currículo online se tornou uma estratégia essencial para quem busca uma nova oportunidade profissional</Typography>
          <Box marginTop={1}>
            <Button>Crie seu CV</Button>
          </Box>
          <Styles.BgFigure>
            <Image priority src="/green.png" alt="" fill/>
          </Styles.BgFigure>
        </Styles.Content>
        <Styles.FigureView>
          <Styles.Figure>
            <Image priority src="/samsung-uk-n2FLiPRGaxk-unsplash 1.jpg" fill alt="bg" />
          </Styles.Figure>
        </Styles.FigureView>
      </Styles.Container>
    </Container>
  )
}
