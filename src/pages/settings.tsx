import { withAuthorization } from "@/hoc"
import { SettingsLayout } from "@/layout/settings"

function SettingsPage () {
  return (
    <SettingsLayout />
  )
}

export default withAuthorization(SettingsPage)