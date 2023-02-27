import { Box, Icon } from '@/components/common'
import { Controller } from 'react-hook-form'
import * as Styles from './styles'
import { ContactPreferenceProps } from './types'

export function ContactPreference (props: ContactPreferenceProps) {
  const  {
    control,
    options,
    name,
    errorMessage,
  } = props

  const renderOptions = options.map((option, index) => (
    <Box gap={1} key={index} alignItems="center">
      <Styles.Item id={option.id} value={option.value}>
        <Icon name={option.icon} />
      </Styles.Item>
      <Styles.Label htmlFor={option.id}>{option.label}</Styles.Label>
    </Box>
  ))

  return (
    <Styles.Container>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Styles.Root value={field.value} onValueChange={value => field.onChange(value)}>
            {renderOptions}
          </Styles.Root>
        )}
      />
      <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
    </Styles.Container>
  )
}