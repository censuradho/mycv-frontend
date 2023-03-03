/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from '@/components/common'
import { isBrowser } from '@/utils/helpers'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Header } from '../home/components'
import * as Styles from './styles'

const Footer = dynamic(() => import('../home/components').then(t => t.Footer), {
  ssr: false
})

export function PolicyPrivacyLayout () {
  const router = useRouter()

  const fullUrl = () => {
    if (!isBrowser) return ''

    return `${window.location.origin}/settings`
  }
  
  return (
    <>
      <Header />
      <Styles.Container>
        <Styles.Header>
          <Container>
            <Box 
              flexDirection="column" 
              gap={0.8}
            >
              <Typography fontWeight="800" as="h1" color="primary">Politicas de privacidade</Typography>
              <Typography >última atualização no dia <Typography as="strong">03 de Maio, 2023</Typography></Typography>
            </Box>
          </Container>
        </Styles.Header>
        <Container>
          <Styles.ContentView>
            <Typography as="h2">Termos e Condições</Typography>
            <Typography as="p">
          Os seguintes termos e condições descritos nesta página servem como o acordo legal entre o cliente {' '}
          (doravante denominado "Você" ou "Usuário") e www.mycv-online.vercel.app (doravante denominado "Site", "Serviço", "Nós", "Nosso"{' '} 
          ou semelhante). O site www.mycv-online.vercel.app é um software como serviço que oferece uma ampla gama de materiais e serviços que visa ajudar{' '} 
          as pessoas a construir e manter um perfil profissional online de qualidade e confiável.
            </Typography>
            <Typography as="p">
            É altamente recomendável por www.mycv-online.vercel.app que você leia este contrato completamente antes de continuar a usar o site, bem como estar{' '} 
            ciente de que você concorda com as disposições estabelecidas neste contrato ao utilizar este site. Se, no entanto, você não concorda com alguma{' '} 
            ou todas as partes deste documento, interrompa o uso do site imediatamente.
            </Typography>
            <Typography as="p">
            Este acordo, conhecido daqui em diante como Termos e Condições, é legalmente vinculativo e executável. Os usuários já{' '} 
            foram aconselhados a ler o conteúdo do acordo antes de prosseguir com o uso do serviço. Como usuário, o uso contínuo de www.cvkeep.com{' '} 
            os serviços devem indicar imediatamente que você leu os termos e condições e, portanto, concordou com as disposições{' '} 
            aqui estabelecidas. Isso afirma que você deve aceitar qualquer responsabilidade ou obrigação decorrente do uso continuado{' '} 
            do site. Quaisquer violações das disposições estabelecidas no acordo podem acarretar em sua responsabilização.
            </Typography>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Uso autorizado deste site</Typography>
            <Typography as="p">
            O usuário está autorizado a usar os serviços do www.cvkeep.com apenas de acordo com os Termos{' '} 
            e Condições, seguindo o preceito da boa fé.
            </Typography>
            <br />
            <Typography as="p">
            O Usuário concorda que os serviços prestados pelo site não devem ser utilizados de forma negligente,{' '} 
            para fins fraudulentos ou ilícitos. Da mesma forma, o usuário deve concordar em não se envolver{' '} 
            em qualquer conduta ou ação que possa prejudicar os interesses ou direitos do{' '} 
            www.cvkeep.com ou outros membros deste serviço.
            </Typography>
            <br />
            <Typography as="p">
            O Usuário concorda que os serviços prestados pelo site não devem ser utilizados de forma negligente,{' '} 
            para fins fraudulentos ou ilícitos. Da mesma forma, o usuário deve concordar em não se envolver{' '} 
            em qualquer conduta ou ação que possa prejudicar os interesses ou direitos{' '} 
            do www.cvkeep.com ou outros membros deste serviço.
            </Typography>
            <br />
            <Typography as="p">
            Os direitos concedidos ao usuário sob os Termos e Condições são pessoais e não devem ser{' '} 
            cedidos a terceiros, incluindo afiliadas ou entidades que façam parte dos mesmos{' '} 
            grupos de empresas, total ou parcialmente, por qualquer meio, sem prévio e expresso consentimento{' '} 
            por escrito do www.cvkeep.com. Após a prestação dos serviços, o site pode publicar publicidade aos{' '} 
            serviços prestados, seja relacionado ou não ao conteúdo pesquisado, o que é{' '} 
            expressamente aceito pelo usuário.
            </Typography>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Notificações e emails</Typography>
            <Typography as="p">
            Fornecer ao www.cvkeep.com seu endereço de e-mail autoriza o uso do site para{' '} 
            enviar avisos relacionados ao serviço, como os exigidos por lei, em lugar da comunicação{' '} 
            por correio. Seu endereço de e-mail também pode ser usado para enviar outras mensagens, como{' '} 
            alterações aos Recursos do site, atividades da sua conta e/ou ofertas especiais por meio da{' '} 
            nossa Newsletter. O www.cvkeep.com pode fornecer outras notificações por e-mail, avisos, notificações{' '} 
            móveis via “push” ou por meio da publicação de informações no site www.cvkeep.com, conforme for necessário.{' '} 
            O www.cvkeep.com se reserva ao direito de determinar a forma e os meios de fornecer notificações aos usuários{' '} 
            registrados. O site não é responsável, no entanto, por qualquer filtragem automática que você ou seu provedor de{' '} 
            rede podem aplicar a notificações enviadas para o endereço de e-mail fornecido para www.cvkeep.com.
            </Typography>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Erros, correções e mudanças</Typography>
            <Typography as="p">
          O www.cvkeep.com não pode garantir que o Site esteja livre de erros ou de outros componentes prejudiciais, {' '} 
          nem que todos os defeitos serão corrigidos. Podemos fazer alterações nos recursos, funcionalidade ou conteúdo{' '} 
          do www.cvkeep.com a qualquer momento. Também nos reservamos o direito, a nosso critério exclusivo, de editar ou{' '} 
          excluir informações públicas que não se enquadrem em nossos Termos e Condições.
            </Typography>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Copyright, Trademark, e Propriedade intelectual</Typography>
            <Typography as="p">
            O site respeita os direitos de propriedade intelectual de terceiros. Se você acredita que{' '} 
            um item ou qualquer conteúdo do site www.cvkeep.com viole qualquer direito de propriedade{' '} 
            intelectual, incluindo direitos autorais, envie-nos um E-Mail imediatamente.
            </Typography>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Atividades ilegais</Typography>
            <Typography as="p">
              O site www.cvkeep.com reserva-se o direito de investigar reclamações ou denúncias de violações deste Acordo. {' '}
              Também assumimos a responsabilidade de tomar as medidas que considerarmos apropriadas, incluindo, mas não se limitando {' '}
              ao seguinte: relatar qualquer atividade suspeita ilegal à lei, oficiais de aplicação da lei, reguladores ou outros terceiros{' '}
              ; divulgar qualquer informação necessária ou apropriada para tais pessoas ou entidades. Estas informações podem incluir {' '}
              detalhes relacionados ao seu perfil, endereços de e-mail, histórico de uso, materiais postados, endereços IP e tráfego{' '}
              informações conforme necessário. Por favor, não hesite em nos contatar em caso de suspeita de atividades ilegais.{' '}
            </Typography>
          </Styles.ContentView>

          <Styles.ContentView>
            <Typography as="h2">Link para páginas de terceiros</Typography>
            <Typography as="p">
            Links do www.cvkeep.com: O site www.cvkeep.com e os currículos do usuário podem conter links para outros sites.{' '} 
            Não temos nenhum controle ou responsabilidade sobre qualquer coisa postada em sites de terceiros, nem endossamos.{' '}
             ou patrocinamos esses sites, mesmo aqueles afiliados a nós.
            </Typography>
            <Typography as="p">
            Problemas com download, páginas quebradas, erros de conta, etc, devem ser encaminhados para a Equipe de Suporte Técnico.
            </Typography>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Isenção de responsabilidade</Typography>
            <Typography as="p">
            O usuário é o único responsável por suas próprias contas, senhas e acesso relacionado. Todas as atividades {' '} 
            que ocorrem sob sua conta estão sob responsabilidade exclusiva do titular da conta e{' '} 
            o www.cvkeep.com não será responsabilizado por seu uso indevido ou não autorizado.
            </Typography>
            <Typography as="p">
            Links conteúdos em perfis de usuários no www.cvkeep.com que levam para outros sites estão além do controle deste serviço.
            </Typography>
            <Typography as="p">
            As partes envolvidas neste acordo devem concordar e preferir que todos os outros acordos subsequentes{' '} 
            sejam escritos e comunicados em Inglês ou Português.
            </Typography>
            <Typography as="p">
            Os termos e condições declarados nas disposições deste acordo serão considerados exequíveis, com efeito imediato.
            </Typography>
            <Typography as="p">
              O www.cvkeep.com não será responsável por perda, lesão, reclamação, responsabilidade ou dano de qualquer{' '} 
              tipo resultante de qualquer forma devido as seguintes circunstâncias:
            </Typography>
            <ul>
              <li>quaisquer erros ou omissões do site, bem como quaisquer serviços ou produtos obtidos a partir dele,</li>
              <li>a indisponibilidade ou interrupção do site ou de quaisquer recursos dele,</li>
              <li>seu uso do site,</li>
              <li>o conteúdo encontrado no www.cvkeep.com, ou</li>
              <li>quaisquer atrasos ou falhas no desempenho além do controle do site.</li>
            </ul>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Regras de uso</Typography>
            <Typography as="p">
            Como usuário, você concorda em não se envolver em nenhuma das seguintes atividades proibidas.
            </Typography>
            <ul>
              <li>
              Copiar, distribuir ou divulgar qualquer parte do www.cvkeep.com em qualquer outro meio que inclua "coleta" automática ou não automática.
              </li>
              <li>
              Esses sistemas automatizados incluem, mas não estão limitados a “robôs”, “spiders” e{' '} 
              “leitores offline”, entre outros, para acessar www.cvkeep.com ou controlar os serviços deste site
              </li>
              <li>
                Transmitir spam, correntes e outros materiais promocionais não solicitados por e-mail.
              </li>
              <li>
                Tentar interferir ou comprometer a integridade ou segurança do sistema, bem como decifrar quaisquer{' '} 
                transmissões de ou para os servidores em execução www.cvkeep.com
              </li>
              <li>
                Tomar medidas que possam impor, conforme determinado por www.cvkeep.com a nosso exclusivo critério,{' '} 
                uma carga irracional ou desproporcionalmente grande em nosso site.
              </li>
              <li>
                Envio de dados inválidos e ilegais, vírus, worms ou outros agentes de software por meio do www.cvkeep.com.
              </li>
              <li>
              Coletar ou colher quaisquer informações pessoais, como nomes de contas e e-mails de www.cvkeep.com.
              </li>
              <li>
              Uso do site para solicitações comerciais.
              </li>
              <li>
              Fazer-se passar por outra pessoa ou falsificar afiliações com outras pessoas ou entidades, envolver-se em fraude, ocultar ou tentar ocultar a sua identidade.
              </li>
              <li>
              Interferir no funcionamento adequado do www.cvkeep.com
              </li>
              <li>
              Acessando o conteúdo do site por meios não convencionais, exceto aqueles fornecidos ou autorizados por www.cvkeep.com
              </li>
              <li>
              Ignorar as medidas usadas para prevenir ou restringir o acesso ao site, incluindo, mas não se limitando a recursos que impedem ou restringem o uso, cópia de qualquer conteúdo ou imposição de limitações no uso do site.
              </li>
            </ul>
          </Styles.ContentView>
          <Styles.ContentView>
            <Typography as="h2">Exclusão de dados</Typography>
            <Typography as="p">
              A qualquer momento você pode remover seus dados do CV Keep. Depois de solicitar a exclusão da sua conta, removeremos automaticamente seus dados. Para encerrar sua conta CV Keep, você deve seguir estas etapas:
            </Typography>
            <ol>
              <li>Navegue até <a href={fullUrl()} target="_blank" rel="noreferrer">{fullUrl()}</a></li>
              <li>Clique no botão Desativar minha conta</li>
              <li>Se você não tiver uma senha de conta, precisará criá-la</li>
              <li>Confirme a solicitação de desativação no modal</li>
              <li>Você receberá um e-mail de confirmação com um Link para realizar a exclusão da conta e dos dados</li>
              <li>Vá para sua caixa de entrada e clique no link de confirmação</li>
            </ol>
            <Typography as="strong">
            Este processo é irreversível.
            </Typography>
          </Styles.ContentView>
        </Container>
      </Styles.Container>
      <Footer />
    </>

  )
}