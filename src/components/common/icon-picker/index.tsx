import * as Styles from './styles'
import { IconPickerProps } from './types'

import { icons } from '@/components/common/icon/icons'
import { Icon } from '@/components/common/'
import { useState } from 'react'

export function IconPicker (props: IconPickerProps) {
  const {
    label,
    value,
    errorMessage,
    onChange,
    onBlur,
    onFocus
  } = props

  const [selectedIcon, setSelectedIcon] = useState(value)

  const handleChange = (value: string) => {
    onChange?.(value)
    setSelectedIcon(value)
  }

  const renderIcons = Object
    .entries(icons)
    .map(([key]) => {
      const isActive = key === selectedIcon

      return (
        <li key={key}>
          <Styles.Button 
            type="button"
            onClick={() => handleChange(key)}
            active={isActive}
            onFocus={onFocus}
            onBlur={onBlur}
          >
            <Icon name={key as any} color={isActive ? 'primary' : 'heading'} />
          </Styles.Button>
        </li>
      )
    })

  return (
    <Styles.Container>
      <Styles.Label>{label}</Styles.Label>
      <Styles.List>
        {renderIcons}
      </Styles.List>
      <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
    </Styles.Container>
  )
}