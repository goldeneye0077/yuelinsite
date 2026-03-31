import { useOutletContext } from 'react-router-dom'

import type { SiteShellOutletContext } from './SiteShell'

export function useSiteShellContext() {
  return useOutletContext<SiteShellOutletContext>()
}
