import { accountsApi, accountsGroup } from './accounts'
import { accountsV2Api, accountsV2Group } from './accountsV2'
import { captchaApi, captchaGroup } from './captcha'
import { captchaForwardApi, captchaForwardGroup } from './captchaForward'
import { configApi, configGroup } from './config'
import { contentV2Api, contentV2Group } from './contentV2'
import { deviceApi, deviceGroup } from './device'
import { dialogsApi, dialogsGroup } from './dialogs'
import { downloadControllerApi, downloadControllerGroup } from './downloadController'
import { downloadEventsApi, downloadEventsGroup } from './downloadEvents'
import { downloadsV2Api, downloadsV2Group } from './downloadsV2'
import { eventsApi, eventsGroup } from './events'
import { extensionsApi, extensionsGroup } from './extensions'
import { extractionApi, extractionGroup } from './extraction'
import { flashApi, flashGroup } from './flash'
import { jdApi, jdGroup } from './jd'
// import { linkCollectorApi, linkCollectorGroup } from './linkCollector'
import { linkCrawlerApi, linkCrawlerGroup } from './linkCrawler'
import { linkGrabberApi, linkGrabberGroup } from './linkGrabber'
import { logApi, logGroup } from './log'
import { pluginsApi, pluginsGroup } from './plugins'
import { pollingApi, pollingGroup } from './polling'
import { reconnectApi, reconnectGroup } from './reconnect'
import { rootApi, rootGroup } from './root'
import { sessionApi, sessionGroup } from './session'
import { toolbarApi, toolbarGroup } from './toolbar'
import type { ControllerGroup } from '../types'
import { uiApi, uiGroup } from './ui'
import { updateApi, updateGroup } from './update'

export * from '../types'
export {
  accountsApi,
  accountsGroup,
  accountsV2Api,
  accountsV2Group,
  captchaApi,
  captchaGroup,
  captchaForwardApi,
  captchaForwardGroup,
  configApi,
  configGroup,
  contentV2Api,
  contentV2Group,
  deviceApi,
  deviceGroup,
  dialogsApi,
  dialogsGroup,
  downloadControllerApi,
  downloadControllerGroup,
  downloadEventsApi,
  downloadEventsGroup,
  downloadsV2Api,
  downloadsV2Group,
  eventsApi,
  eventsGroup,
  extensionsApi,
  extensionsGroup,
  extractionApi,
  extractionGroup,
  flashApi,
  flashGroup,
  jdApi,
  jdGroup,
  // linkCollectorApi,
  // linkCollectorGroup,
  linkCrawlerApi,
  linkCrawlerGroup,
  linkGrabberApi,
  linkGrabberGroup,
  logApi,
  logGroup,
  pluginsApi,
  pluginsGroup,
  pollingApi,
  pollingGroup,
  reconnectApi,
  reconnectGroup,
  rootApi,
  rootGroup,
  sessionApi,
  sessionGroup,
  toolbarApi,
  toolbarGroup,
  uiApi,
  uiGroup,
  updateApi,
  updateGroup,
}

export const CONTROLLER_GROUPS: ControllerGroup[] = [
  accountsGroup,
  accountsV2Group,
  captchaGroup,
  captchaForwardGroup,
  configGroup,
  contentV2Group,
  dialogsGroup,
  eventsGroup,
  extensionsGroup,
  extractionGroup,
  flashGroup,
  logGroup,
  pluginsGroup,
  pollingGroup,
  reconnectGroup,
  rootGroup,
  sessionGroup,
  toolbarGroup,
  uiGroup,
]
