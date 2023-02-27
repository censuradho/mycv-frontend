import { styled } from 'stitches.config'

export const Container = styled('div', {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: '2rem',

  '@table-min': {
    flexDirection: 'row',

  }
})

export const List = styled('ul', {
  listStyleType: 'none'
})

export const Section = styled('section', {
  margin: '2rem 0'
})

export const SectionTitle = styled('h2', {
  fontSize: '$xsm',
  color: '$primary',
  fontWeight: 600,
  paddingBottom: '1.2rem'
})

export const FromTo = styled('span', {
  fontSize: '.75rem',
  color: '$text'
})

export const Presentation = styled('p', {
  fontSize: '$xsm',
  paddingTop: '0.5rem'
})

export const JobDescription = styled('div', {
  paddingLeft: '2rem',
  marginTop: '0.5rem',

  P: {
    fontSize: '.875rem',
    fontWeight: 400
  }
})

export const SkillList = styled('ul', {
  listStyleType: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  
  li: {
    color: '$heading',
    fontSize: '12px',
    fontWeight: 600
  }
})


export const Link = styled('a', {
  fontWeight: 400,
  textDecoration: 'underline',
  fontSize: '14px'
})