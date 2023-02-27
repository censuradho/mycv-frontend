import { Box, ButtonIcon } from "@/components/common";
import { DatePickerForm, EditorForm, InputForm } from "@/components/common/hook-form";
import { useFieldArray } from "react-hook-form";

import { AccordionView } from "../accordion-view";
import { Button } from "../button";
import { EmploymentHistoryProps } from "./types";

import { SwitchForm } from "@/components/common/hook-form/switch";
import { format } from "@/lib/date-fns";
import { baseEmployment } from "../form";
import * as Styles from './styles';

export function EmploymentHistory (props: EmploymentHistoryProps) {
  const {
    control,
    register,
    errors,
    onRemove,
    experiences
  } = props

  const name = 'experiences'

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
    const experience = experiences?.[index]

    const { initial_date, final_date } = experience || {}

    const title = `${experience?.title}  ${experience?.employer && '- ' + experience?.employer}`
    const fromTo = `${initial_date && format(new Date(initial_date), 'MMM yyyy')} ${final_date && '- ' + format(new Date(final_date), 'MMM yyyy')}`

    return (
      <Box key={_value._id} alignItems="flexStart" gap={0.1}>
        <AccordionView 
          title={title.trim() || '(Não especificado)'}
          subTitle={fromTo.trim()}
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
                label="Cargo"
                fullWidth
                id={`${name}.${index}.title`}
                register={register(`${name}.${index}.title`)}
                name={`${name}.${index}.title`}
                errorMessage={errors?.[index]?.title?.message}
              />
              <InputForm 
                label="Nome da empresa"
                fullWidth
                register={register(`${name}.${index}.employer`)}
                name={`${name}.${index}.employer`}
                id={`${name}.${index}.employer`}
                errorMessage={errors?.[index]?.employer?.message}
              />
            </Box>
            <SwitchForm
              name={`${name}.${index}.is_main`}
              control={control} 
              label="Atual"
              id={`${name}.${index}.is_main`}
              errorMessage={errors?.[index]?.is_main?.message}
            />
            <Box gap={1}>
              <DatePickerForm
                id={`${name}.${index}.initial_date`}
                name={`${name}.${index}.initial_date`}
                control={control}
                label="Início"
                fullWidth
                showMonthYearPicker
                dateFormat="MMM, yyyy"
                errorMessage={errors?.[index]?.initial_date?.message}
              />
              <DatePickerForm
                id={`${name}.${index}.final_date`}
                name={`${name}.${index}.final_date`}
                label="Fim"
                fullWidth
                disabled={experience?.is_main}
                control={control}
                showMonthYearPicker
                dateFormat="MMM, yyyy"
                errorMessage={errors?.[index]?.final_date?.message}
              />
            </Box>
            <EditorForm
              id={`${name}.${index}.description`}
              label="Descrição"
              name={`${name}.${index}.description`}
              control={control}
              errorMessage={errors?.[index]?.description?.message}
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
    <>
      {renderFields}
      <Box marginTop={2}>
        <Button onClick={() => append(baseEmployment)}>Add experiência</Button>
      </Box>
    </>
  )
}