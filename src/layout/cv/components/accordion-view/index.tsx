import { Box, ButtonIcon, Icon, Typography } from '@/components/common'
import { PropsWithChildren } from 'react'

import * as Styles from './styles'
import { AccordionViewProps } from './types'

export function AccordionView (props: PropsWithChildren<AccordionViewProps>) {
  const {
    children,
    title,
    subTitle,
    defaultOpen
  } = props

  return (
    <Styles.Root type="single" collapsible defaultValue={defaultOpen ? 'item' : ''}>
      <Styles.Item value="item">
        <Styles.Header>
          <Styles.Trigger>
            <Box flexDirection="column" gap={0.5}>
              <Typography as="strong" color="heading">
                {title}
              </Typography>
              {subTitle && <Typography size="xsm">{subTitle}</Typography>}
            </Box>
            <Styles.IconView>
              <Icon name="arrowDown" />
            </Styles.IconView>
          </Styles.Trigger>
        </Styles.Header>
        <Styles.Content>
          {children}
        </Styles.Content>
      </Styles.Item>
    </Styles.Root>
  )
}