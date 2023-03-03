import { Box, ButtonIcon, Icon, Typography } from '@/components/common'
import { isBrowser } from '@/utils/helpers'
import * as Styles from './styles'
import { ShareProps } from './types'

export function Share (props: ShareProps) {
  const {
    children
  } = props

  const currentUrl = isBrowser()  ? document.URL : ''

  return (
    <Styles.Root >
      <Styles.Trigger asChild>{children}</Styles.Trigger>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Box fullWidth justifyContent="flex-end"> 
            <Styles.Cancel asChild>
              <ButtonIcon label="close" icon={{ name: 'outlineClose' }} />
            </Styles.Cancel>
          </Box>
          <Styles.List>
            <Styles.Item>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank" rel="noreferrer">
                <Box gap={1} alignItems="center">
                  <Icon name="facebook" />
                  <Typography fontWeight="400" color="heading">Share on Facebook</Typography>
                </Box>
              </a>
            </Styles.Item>
            <Styles.Item>
              <a href={`https://twitter.com/intent/tweet?text=${currentUrl}`} target="_blank" rel="noreferrer">
                <Box gap={1} alignItems="center">
                  <Icon name="twitter" />
                  <Typography fontWeight="400" color="heading">Share on Twitter</Typography>
                </Box>
              </a>
            </Styles.Item>
            <Styles.Item>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`} target="_blank" rel="noreferrer">
                <Box gap={1} alignItems="center">
                  <Icon name="linkedin" />
                  <Typography fontWeight="400" color="heading">Share on Linkedin</Typography>
                </Box>
              </a>
            </Styles.Item>
            <Styles.Item>
              <a href={`https://wa.me/?text=take a look at this amazing page - ${currentUrl}`} target="_blank" rel="noreferrer">
                <Box gap={1} alignItems="center">
                  <Icon name="whatsapp" />
                  <Typography fontWeight="400" color="heading">Share on Whatsapp</Typography>
                </Box>
              </a>
            </Styles.Item>
            <Styles.Item>
              <a href={`mailto:?subject= take a look at this amazing page - ${currentUrl}`} target="_blank" rel="noreferrer">
                <Box gap={1} alignItems="center">
                  <Icon name="mail" />
                  <Typography fontWeight="400" color="heading">Share via E-mail</Typography>
                </Box>
              </a>
            </Styles.Item>
          </Styles.List>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}