import { useOutletContext } from 'react-router-dom'

import type { SiteShellOutletContext } from './Layout'

export function useSiteShellContext() {
  return useOutletContext<SiteShellOutletContext>()
}
