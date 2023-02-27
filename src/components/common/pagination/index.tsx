import { useState } from 'react';
import { Box } from '../box'
import { Icon } from '../icon';
import { Typography } from '../typography';
import * as Styles from './styles'
import { PaginationProps } from './types'

export function Pagination (props: PaginationProps) {
  const {
    currentPage,
    totalPages,
    onPageChange
  } = props
  const forward2x = ">>"
  const forward = ">"
  const backward2x = "<<"
  const backward = "<"

  const isBiggerThanMin = currentPage > 1
  const isLessThanMax = currentPage < totalPages


  const handlePageChange = (value: number) => {
    onPageChange(value + Number(currentPage))
  }

  return (
    <Styles.Container>
      <Typography size="xsm">{`${currentPage} de ${totalPages}`}</Typography>
      <Box gap={0.3}>
        <Styles.Bullet disabled={!isBiggerThanMin} active onClick={() => handlePageChange(-2)}>
          {backward2x}
        </Styles.Bullet>
        <Styles.Bullet disabled={!isBiggerThanMin} onClick={() => handlePageChange(-1)}>
          {backward}
        </Styles.Bullet>
        <Styles.CurrentPageInput
          type="number"
          min={1}
          value={currentPage}
          defaultValue={currentPage}
          onChange={(event) => onPageChange(Number(event.target.value))}
        />
        <Styles.Bullet disabled={!isLessThanMax} onClick={() => handlePageChange(1)}>
          {forward}
        </Styles.Bullet>
        <Styles.Bullet disabled={!isLessThanMax} active onClick={() => handlePageChange(2)}>
          {forward2x}
        </Styles.Bullet>
      </Box>
    </Styles.Container>
  )
}