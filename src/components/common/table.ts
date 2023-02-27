import { styled } from "stitches.config";

const Table = styled('table', {
  position: 'relative',
  borderCollapse: 'collapse',
  width: '100%',
})

const THead = styled('thead', {
  tr: {
    position: 'sticky',
    background: '$background',
    top: 0,
    zIndex: 3
  }
})

const TBody = styled('tbody', {
  'tr:nth-child(odd) td': {
    background: '$foreground'
  },
})

const Td = styled('td', {
  borderBottom: '1px solid $border',
  padding: '1.3rem 1rem',
  whiteSpace: 'nowrap',
  fontSize: '$xsm',
  background: '$background',
})

const Th = styled('th', {
  fontWeight: 400,
  textTransform: 'uppercase',
  fontSize: '.75rem',
  padding: '1.3rem 1rem',
  textAlign: 'left',
  background: '$background'
})

const Tr = styled('tr', {

  'td:nth-child(1), th:nth-child(1)': {
    position: 'sticky',
    left: 0,
    maxWidth: '16.5rem',
    background: `linear-gradient(90deg,$background 90%,hsla(0,0%,100%,0))`
  }
})

export const TableComponent = {
  TBody,
  THead,
  Table,
  Td,
  Th,
  Tr
}