<script setup lang="ts">
import { useSettingStore } from '@renderer/stores'
import { ref } from 'vue'
import { localStore } from '../enums/localStore'

const enumeratorPromise = await navigator.mediaDevices.enumerateDevices()
const videos = enumeratorPromise.filter((device) => device.kind == 'videoinput')
const localDeviceId = localStorage.getItem(localStore.DEVICE_ID)
const device = ref(
  videos.find((video) => video.deviceId === localDeviceId) ? localDeviceId! : videos[0].deviceId
)
const setting = useSettingStore()
// setting.toggleDevice(device.value.deviceId)
const onSubmit = () => {
  setting.toggleDevice(device.value)
  setting.togglePage()
}
</script>

<template>
  <div class="mt-4 bg-white h-screen">
    <q-form @submit="onSubmit" class="q-gutter-md flex flex-col pt-6 px-4">
      <div class="title text-center text-lg font-bold">参数设置</div>
      <q-select
        class="mt-8"
        color="purple"
        :outlined="true"
        v-model="device"
        clearable
        :options="videos"
        label="请选择摄像头"
        filled
        emit-value
        option-value="deviceId"
        option-disable="label"
        map-options
      />
      <q-btn class="mt-10" type="submit" color="purple" icon="check" label="确认" />
    </q-form>
  </div>
</template>

<style scoped lang="scss"></style>
