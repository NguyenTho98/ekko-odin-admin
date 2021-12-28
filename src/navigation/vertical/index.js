// ** Navigation sections imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import dashboards from './dashboards'
import dashboardCenter from './dashboardCenter'
import dashboardUsers from './dashboardUsers'
import uiElements from './ui-elements'
import chartsAndMaps from './charts-maps'
import appOdin from './appOdin'

// ** Merge & Export
// export default [...appOdin, ...dashboardCenter, ...dashboardUsers]
export default [...appOdin, ...dashboardCenter,  ...dashboardUsers, ...dashboards, ...apps, ...pages, ...uiElements, ...forms, ...tables, ...chartsAndMaps, ...others]
