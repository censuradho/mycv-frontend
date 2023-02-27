import Image from 'next/image'

import * as Styles from './styles'
import { AvatarProps } from './types'

export function Avatar (props: AvatarProps) {
  const {
    alt,
    src,
    size = 40
  } = props

  const renderAlt = () => {
    if (src) return null
    const altFormat = alt.trim()

    const hasMultipleSentence = altFormat.split(' ').length > 1

    const lastPosition = altFormat.lastIndexOf(' ')

    const alternativeText = altFormat.substring(lastPosition + 1, lastPosition + 2)
    const firstChar = altFormat.at(0)

    const result = hasMultipleSentence ? `${firstChar}${alternativeText}` : firstChar

    return (
      <strong style={{ width: size, height: size }}>{result}</strong>
    )
  }

  const renderImage = () => {
    if (!src) return null

    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{
          borderRadius: '50%'
        }}
      />
    )
  }

  return (
    <Styles.Container style={{ width: size, height: size }}>
      {renderAlt()}
      {renderImage()}
    </Styles.Container>
  )
}
