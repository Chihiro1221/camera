import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      windowMove(position: Position): void
      contextMenu(): void
    }
  }
}
