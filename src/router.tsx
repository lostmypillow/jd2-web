import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import { Add } from './pages/Add'
import { Collector } from './pages/Collector'
import { Home } from './pages/Home'
import { Packages } from './pages/Packages'
import { Settings } from './pages/Settings'
import { RootLayout } from './RootLayout'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const packagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/packages',
  component: Packages,
})

const collectorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/collector',
  component: Collector,
})

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
})

const demoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/demo',
  component: Home,
})

const addRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/add',
  component: Add,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  packagesRoute,
  collectorRoute,
  settingsRoute,
  demoRoute,
  addRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
