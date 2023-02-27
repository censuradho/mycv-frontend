import { Box, ButtonIcon, Icon } from '@/components/common'
import { useEffect, useRef } from 'react'
import * as Styles from './styles'
import { PreviewProps } from './types'

export function Preview (props: PreviewProps) {
  const canvas = useRef<HTMLCanvasElement  | null>(null)
  const context = canvas?.current?.getContext('2d')


  const renderTitle = () => {
    context?.font && (context.font = '3rem sans-serif')
    context?.fillText?.('Software developer', 10, 50)
    context?.textBaseline && (context.textBaseline = 'hanging')
  }

  useEffect(() => {
    renderTitle()
  }, [])

  if (canvas?.current && !canvas.current?.getContext) return null

  return (
    <Styles.Root>
      <Styles.Trigger>
        <Icon name="paperLine" color="ancesst8" />
      </Styles.Trigger>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Styles.Header>
            <Box flex={1} justifyContent="flex-end">
              <Styles.Close asChild>
                <ButtonIcon label="close" icon={{ name: 'close' }} />
              </Styles.Close>
            </Box>
          </Styles.Header>
          <Styles.CanvasView>
            <Styles.Canvas 
              width="839"
              height="1186" 
              ref={canvas}
            ></Styles.Canvas>
          </Styles.CanvasView>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}