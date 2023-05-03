import { localStore } from '@renderer/enums/localStore'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => {
    return { page: 'setting', loading: false, deviceId: '' }
  },
  actions: {
    togglePage() {
      this.page = this.page === 'setting' ? 'camera' : 'setting'
    },
    toggleLoading() {
      this.loading = !this.loading
    },
    toggleDevice(id: string) {
      localStorage.setItem(localStore.DEVICE_ID, id)
      this.deviceId = id
    }
  }
})
