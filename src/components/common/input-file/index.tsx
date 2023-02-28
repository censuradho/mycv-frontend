import * as Styles from './styles'
import { InputFileProps } from './types'

import { Box, ButtonIcon, Icon } from '@/components/common'
import { ChangeEvent, forwardRef, useRef, useState } from 'react'
import Image from 'next/image'

export const InputFile = forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
  const { 
    accept = ["image/x-png", "image/gif", "image/jpeg", ".jpg", ".jpeg", ".gif", ".png", ".tiff"],
    loading,
    onChange,
    defaultImage,
    ...otherProps
  } = props

  const inputRef = useRef<HTMLInputElement | null>(null)

  const [file, setFile] = useState<File | null>(null)

  const preview = file ? URL.createObjectURL(file) : (defaultImage || '')

  const handleUploadAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget

    const file = files?.[0] || null

    onChange?.(file)
    setFile(file)
  }

  const handleRemove = () => {
    setFile(null)
  }
  
  const renderPreview = () => {
    if (!file) return null

    return (
      <Box gap={1} alignItems="flexStart">
        <Styles.ImageView loading={loading}>
          <Image 
            src={preview} 
            alt="avatar"
            width={60}
            height={60}
          />
        </Styles.ImageView>
        <Box flexDirection="column">
          <ButtonIcon
            type="button"
            onClick={() => inputRef?.current?.click?.()}
            label="editar"
            icon={{ name: 'edit', size: 15 }}
          />
          <ButtonIcon
            onClick={handleRemove}
            type="button"
            label="remover"
            icon={{ name: 'delete', size: 15 }}
          />
        </Box>
      </Box>
    )
  }

  const renderTrigger = () => {
    if (file) return null

    return (
      <Box gap={1} alignItems="center">
        <Styles.Button
          type="button"
          onClick={() => inputRef?.current?.click()}
        >
          <Icon 
            name="userCircle" 
            size={30} 
            color="text" 
          />
        </Styles.Button>
        <Styles.Label htmlFor={props?.id}>Upload</Styles.Label>
      </Box>
    )
  }

  return (
    <Styles.Container >
      <Styles.Input
        accept={accept.join()}
        type="file" 
        onChange={handleUploadAvatar}
        ref={inputRef}
        {...otherProps}
      />
      {renderTrigger()}
      {renderPreview()}
    </Styles.Container>
  )
}) 