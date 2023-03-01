import { Box, Container, Typography, Button } from '@/components/common'
import Image from 'next/image'

import * as Styles from './styles'

export function AboveFold () {
  return (
    <Container size="md">
      <Styles.Container>
        <Styles.Content>
          <Typography as="h2" size="xlg" fontWeight="800" color="heading">Seja descoberto, tenha um CV Online🚀</Typography>
          <Typography as="p">
            Ao contrário de um currículo impresso, que é limitado em termos de espaço e formato, 
            um currículo online permite que você mostre seus talentos, 
            habilidades e experiências de forma mais abrangente.
          </Typography>
          <Box marginTop={1}>
            <Button>Crie seu CV</Button>
          </Box>
          <Styles.BgFigure>
            <Image priority src="/green.png" alt="" fill />
          </Styles.BgFigure>
        </Styles.Content>
        <Styles.FigureView>
          <Styles.Figure>
            <Image 
              src="/samsung-uk-n2FLiPRGaxk-unsplash 1.jpg" 
              priority 
              fill 
              alt="bg"
              sizes='' 
            />
          </Styles.Figure>
        </Styles.FigureView>
      </Styles.Container>
    </Container>
  )
}
