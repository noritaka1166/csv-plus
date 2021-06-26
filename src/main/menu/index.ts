import Electron, { app, Menu } from 'electron'
// import { i18next } from '@/plugins/i18n'
import macTemplate from './templates/mac-template'
import otherTemplate from './templates/other-template'

const isMac = process.platform === 'darwin'
const template: (Electron.MenuItemConstructorOptions|Electron.MenuItem)[] = isMac ? macTemplate : otherTemplate
const index = Menu.buildFromTemplate(template)

app.whenReady().then(() => Menu.setApplicationMenu(index))
