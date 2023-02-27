import { Box, ButtonIcon } from '@/components/common'
import { InputForm } from '@/components/common/hook-form'
import { useFieldArray } from 'react-hook-form'
import { AccordionView } from '../accordion-view'
import { Button } from '../button'
import { baseSkill } from '../form'
import * as Styles from './styles'
import { SkillsProps } from './types'

export function Skills (props: SkillsProps) {
  const {
    control,
    register,
    errors,
    data,
    onRemove
  } = props

  const name = 'skills'
  const {
    fields,
    append,
    remove,
    update,
  } = useFieldArray({
    control,
    name,
    keyName: '_id'
  })

  const handleRemove = (index: number, id?: string) => {
    id && onRemove?.(id)
    remove(index)
  }

  const renderFields = fields.map((value, index) => {
    const _value = value as any
    const current = data?.[index]
    
    return (
      <Box key={_value._id} alignItems="flexStart" gap={0.1}>
        <AccordionView
          title={current?.name || '(Não especificado)'}
          defaultOpen={index === 0}
        >
          <Styles.Container>
            <InputForm 
              label="habilidade"
              fullWidth
              id={`${name}.${index}.name`}
              register={register(`${name}.${index}.name`)}
              name={`${name}.${index}.name`}
              errorMessage={errors?.[index]?.name?.message}
            />
          </Styles.Container>
        </AccordionView>
        <ButtonIcon 
          type="button"
          label="delete" 
          icon={{ name: 'delete' }}
          onClick={() => handleRemove(index, _value?.id)}
        />
      </Box>
    )
  })
  
  return (
    <Box flexDirection="column" gap={1}>
      {renderFields}
      <Button onClick={() => append(baseSkill)}>Add habilidade</Button>
    </Box>
  )
}