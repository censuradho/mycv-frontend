import { Box, Container, Typography } from '@/components/common'
import { paths } from '@/constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import * as Styles from './styles'

export function Footer () {
  return (
    <Styles.Container>
      <Container size="lg">
        <Box
          gap={2}
          justifyContent="space-between"
          flexDirection={{
            '@initial': 'column',
            '@table-min': 'row'
          }}
        >
          <Box>
            <Image src="/logo.svg" alt="logo" width={60} height={60} style={{ objectFit: 'contain' }} />
          </Box>
          <Box gap={2} justifyContent="space-between">
            <Box flexDirection="column" gap={1}>
              <Typography as="strong" color="ancesst8">Links rápidos</Typography>
              <Styles.List>
                <li>
                  <Link href={paths.auth.signIn}>
                Login
                  </Link>
                </li>
                <li>
                  <Link href={paths.auth.signIn}>
                Cadastro
                  </Link>
                </li>
                <li>
                  <Link href={`${paths.home}#search`}>
                Pesquisar
                  </Link>
                </li>
                <li>
                  <Link href={paths.auth.signIn}>
                Denunciar CV
                  </Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography as="strong" color="ancesst8">Links rápidos</Typography>
              <Styles.List>
                <li>  
                  <Link href="contato">
                Contato
                  </Link>
                </li>
                <li>
                  <Link href={`${paths.home}#support-me`}>
                Apoie esse serviço
                  </Link>
                </li>
                <li>
                  <Link href={`${paths.home}#support-me`}>
                Termos e condições
                  </Link>
                </li>
              </Styles.List>
            </Box>
          </Box>
        </Box>
        <Box justifyContent="center" marginTop={5}>
          <Typography fontWeight="400" size="xsm" color="background" as="span">My CV © All Rights Reserved</Typography>
        </Box>
      </Container>
    </Styles.Container>
  )
}