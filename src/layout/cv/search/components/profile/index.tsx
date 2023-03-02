import { Avatar, Box, Typography } from '@/components/common'
import { paths } from '@/constants/routes'
import { resolvePath } from '@/utils/helpers'
import Link from 'next/link'
import * as Styles from './styles'
import { ProfileProps } from './types'

export function Profile (props: ProfileProps) {
  const {
    first_name,
    last_name,
    address,
    user,
    slug
  } = props

  const fullName = `${first_name} ${last_name}`

  const renderAddress = () => {
    if (!address) return null

    return (
      <Box  gap={0.5} marginTop={2} fullWidth justifyContent="space-between" flexWrap="wrap">
        <Typography size="xsm">{address?.city}</Typography>
        <Typography size="xsm">{address?.country}</Typography>
      </Box>
    )
  }

  return (
    <Link href={resolvePath(paths.cv.find, { slug })}>
      <Styles.Container>
        <Box gap={1} alignItems="center">
          <Avatar 
            alt={fullName}
            size={60}
            src={user?.avatar?.url}
          />
          <Box flexDirection="column" gap={0.5}>
            <Typography size="md" fontWeight="600">{fullName}</Typography>
            <Typography fontWeight="500">{props.title}</Typography>
          </Box>
        </Box>
        {renderAddress()}
      </Styles.Container>
    </Link>
  )
}