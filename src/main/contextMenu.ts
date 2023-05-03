import { BrowserWindow, Menu, MenuItem, MenuItemConstructorOptions, app, ipcMain } from 'electron'

export default () => {
  ipcMain.on('contextMenu', (event) => {
    const template = [
      {
        label: '退出',
        click: () => app.quit()
      }
    ] as Array<MenuItemConstructorOptions | MenuItem>

    const menu = Menu.buildFromTemplate(template)
    menu.popup(BrowserWindow.fromWebContents(event.sender) as any)
  })
}
