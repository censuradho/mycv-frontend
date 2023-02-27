import { Box, ButtonIcon } from '@/components/common'
import { InputForm, SelectForm } from '@/components/common/hook-form'
import { EnumLanguageLevel } from '@/services/api/curriculum/types'
import { useFieldArray } from 'react-hook-form'
import { AccordionView } from '../accordion-view'
import { Button } from '../button'
import { baseLanguages } from '../form'
import * as Styles from './styles'
import { SkillsProps } from './types'

const options = [
  {
    label: 'Básico',
    value: EnumLanguageLevel.basic,
  },
  {
    label: 'Intermediário',
    value: EnumLanguageLevel.intermediate,
  },
  {
    label: 'Técnico',
    value: EnumLanguageLevel.proficient,
  },
  {
    label: 'Avançado',
    value: EnumLanguageLevel.advanced,
  },
  {
    label: 'Fluente',
    value: EnumLanguageLevel.fluent,
  }
]

export function Languages (props: SkillsProps) {
  const {
    control,
    register,
    errors,
    data,
    onRemove
  } = props

  const name = 'languages'
  const {
    fields,
    append,
    remove,
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
            <Box
              gap={1}
              flexDirection={{
                '@initial': 'column',
                '@table-min': 'row'
              }}
            >
              <InputForm 
                label="Nome"
                fullWidth
                id={`${name}.${index}.name`}
                register={register(`${name}.${index}.name`)}
                name={`${name}.${index}.name`}
                errorMessage={errors?.[index]?.name?.message}
              />
              <SelectForm
                label="Escrita nível"
                control={control}
                name={`${name}.${index}.writing`}
                fullWidth 
                options={options}
                errorMessage={errors?.[index]?.writing?.message}
              />
            </Box>
            <Box
              gap={1}
              flexDirection={{
                '@initial': 'column',
                '@table-min': 'row'
              }}
            >
              <SelectForm
                label="Conversação nível"
                control={control}
                name={`${name}.${index}.conversation`}
                fullWidth 
                options={options}
                errorMessage={errors?.[index]?.conversation?.message}
              />
              <SelectForm
                label="Leitura nível"
                control={control}
                name={`${name}.${index}.reading`}
                fullWidth 
                options={options}
                errorMessage={errors?.[index]?.reading?.message}
              />
            </Box>
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
      <Button onClick={() => append(baseLanguages)}>Add idioma</Button>
    </Box>
  )
}