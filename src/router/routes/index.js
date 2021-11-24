// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import DashboardCenterRoutes from './DashboardCenter'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import DashboardUsers from './DashboardUsers'

// ** Document title
const TemplateTitle = '%s - Odin React Admin Template'

// ** Default Route
const DefaultRoute = '/center'

// ** Merge Routes
const Routes = [
  ...DashboardCenterRoutes,
  ...DashboardRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes,
  ...DashboardUsers,
]

export { DefaultRoute, TemplateTitle, Routes }
