import * as Styles from './styles'
import { AutoCompleteProps } from './types'

import RootAutocomplete from 'react-autocomplete'

export function AutoComplete (props: AutoCompleteProps) {
  const { 
    label,
    errorMessage,
    items,
    ...otherProps
  } = props

  return (
    <Styles.Container>
      <Styles.Label>{label}</Styles.Label>
      <RootAutocomplete
        items={items}
        renderItem={(item, isHighlighted) =>
          <Styles.Item active={isHighlighted}>
            {item.label}
          </Styles.Item>
        }
        {...otherProps}
      />
      <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
    </Styles.Container>
  )
}