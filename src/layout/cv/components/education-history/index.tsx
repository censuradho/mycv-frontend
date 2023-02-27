import * as Styles from './styles'
import { EducationHistoryProps } from './types'
import { useFieldArray } from "react-hook-form";
import { Box, ButtonIcon, Select } from '@/components/common';
import { AccordionView } from '../accordion-view';
import { DatePickerForm, InputForm, SelectForm } from '@/components/common/hook-form';
import { Button } from '../button';
import { baseEducation } from '../form';
import { SwitchForm } from '@/components/common/hook-form/switch';
import { EnumEducationLevel, EnumEducationSituation } from '@/services/api/curriculum/types';
import { format } from '@/lib/date-fns';

export function EducationHistory (props: EducationHistoryProps) {
  const {
    control,
    register,
    errors,
    data,
    onRemove
  } = props


  const {
    fields,
    append,
    remove,
    update,
  } = useFieldArray({
    control,
    name: 'educations',
    keyName: '_id'
  })

  const handleRemove = (index: number, id?: string) => {
    id && onRemove?.(id)
    remove(index)
  }

  const renderFields = fields.map((value, index) => {
    const _value = value as any
    const current = data?.[index]

    const {  final_date, initial_date, institution_name } = current || {}

    const title = `${current?.title} ${institution_name && '- ' + institution_name}`.trim()
    const fromTo = `${initial_date && format(new Date(initial_date), 'MMM yyyy')} ${final_date && '- ' + format(new Date(final_date), 'MMM yyyy')}`.trim()

    return (
      <Box key={_value._id} alignItems="flexStart" gap={0.1}>
        <AccordionView 
          title={title || '(Não especificado)'}
          subTitle={fromTo}
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
                label="Nome do curso"
                fullWidth
                id={`educations.${index}.title`}
                register={register(`educations.${index}.title`)}
                name={`educations.${index}.title`}
                errorMessage={errors?.[index]?.title?.message}
              />
              <SelectForm
                label="Grau"
                control={control}
                name={`educations.${index}.level`}
                fullWidth
                options={[
                  {
                    label: 'Ensino médio',
                    value: EnumEducationLevel.highSchool
                  },
                  {
                    label: 'Ensino superior',
                    value: EnumEducationLevel.universityEducation
                  },
                  {
                    label: 'Curso online',
                    value: EnumEducationLevel.onlineCourse
                  },
                  {
                    label: 'Curso presencial',
                    value: EnumEducationLevel.classroomCourse
                  },
                  {
                    label: 'Certificação',
                    value: EnumEducationLevel.certification
                  },
                  {
                    label: 'Evento de formação',
                    value: EnumEducationLevel.trainingEvent
                  },
                  {
                    label: 'Técnico',
                    value: EnumEducationLevel.technician
                  },
                  {
                    label: 'Tecnólogo',
                    value: EnumEducationLevel.technologist
                  },
                  {
                    label: 'Doutorado',
                    value: EnumEducationLevel.doctorateDegree
                  },
                  {
                    label: 'Mestrado',
                    value: EnumEducationLevel.master
                  },
                  {
                    label: 'PhD',
                    value: EnumEducationLevel.phD
                  },
                  {
                    label: 'Especialização',
                    value: EnumEducationLevel.specialization
                  },
                  {
                    label: 'Intercâmbio',
                    value: EnumEducationLevel.exchange
                  },
                  {
                    label: 'Capacitação',
                    value: EnumEducationLevel.training
                  },
                  {
                    label: 'Reciclagem',
                    value: EnumEducationLevel.recycling
                  },
                ]}
              />
            </Box>
            <Box
              gap={1}
              flexDirection={{
                '@initial': 'column',
                '@table-min': 'row'
              }}
            >
              <InputForm 
                label="Nome da instituição"
                fullWidth
                id={`educations.${index}.institution_name`}
                register={register(`educations.${index}.institution_name`)}
                name={`educations.${index}.institution_name`}
                errorMessage={errors?.[index]?.institution_name?.message}
              />
              <SelectForm
                label="Situação"
                control={control}
                name={`educations.${index}.situation`}
                fullWidth
                options={[
                  {
                    label: 'Não informado',
                    value: EnumEducationSituation.notInform
                  },
                  {
                    label: 'Cursando',
                    value: EnumEducationSituation.coursing
                  },
                  {
                    label: 'Completo',
                    value: EnumEducationSituation.complete
                  },
                  {
                    label: 'Incompleto',
                    value: EnumEducationSituation.incomplete
                  },
                  {
                    label: 'Trancado',
                    value: EnumEducationSituation.paused
                  },
                ]}
              />
            </Box>
            <SwitchForm
              id={`educations.${index}.is_main`}
              name={`educations.${index}.is_main`}
              control={control} 
              label="Atual"
              errorMessage={errors?.[index]?.is_main?.message}
            />
            <Box
              gap={1}
              flexDirection={{
                '@initial': 'column',
                '@table-min': 'row'
              }}
            >
              <DatePickerForm 
                name={`educations.${index}.initial_date`}
                label="Início"
                fullWidth
                control={control}
                showMonthYearPicker
                dateFormat="MMM, yyyy"
                errorMessage={errors?.[index]?.final_date?.message}
              />
              <DatePickerForm 
                name={`educations.${index}.final_date`}
                label="Fim"
                fullWidth
                disabled={current?.is_main}
                control={control}
                showMonthYearPicker
                dateFormat="MMM, yyyy"
                errorMessage={errors?.[index]?.final_date?.message}
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
      <Box marginTop={1.5} fullWidth>
        <Button onClick={() => append(baseEducation)}>Add educação</Button>
      </Box>
    </Box>
  )
}