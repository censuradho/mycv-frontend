import { curriculumService } from '@/services/api/curriculum'
import { Curriculum } from '@/services/api/curriculum/types'
import { useEffect, useState } from 'react'
import { Form, Preview } from './components'
import * as Styles from './styles'
import { CvPageProps } from './types'

export function CvLayout (props: CvPageProps) {
  const [curriculum, setCurriculum] = useState<Curriculum | null>(null)

  const handleGetCurriculum = async () => {
    const { data } = await curriculumService.me()
    setCurriculum(data)
  }

  useEffect(() => {
    handleGetCurriculum()
  }, [])

  return (
    <Styles.Container>
      <Form defaultValue={curriculum} />
    </Styles.Container>
  )
}