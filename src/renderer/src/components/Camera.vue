<script setup lang="ts">
import { useSettingStore } from '@renderer/stores'
import { onMounted } from 'vue'
const setting = useSettingStore()
setting.toggleLoading()

onMounted(() => {
  const video = document.querySelector('video')!
  const constraints = {
    audio: false,
    video: {
      deviceId: setting.deviceId,
      width: 1920,
      height: 1080
    }
  } as MediaStreamConstraints
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video?.play()
    setting.toggleLoading()
  })
})
</script>

<template>
  <main class="camera w-screen h-screen flex overflow-hidden rounded-full">
    <q-inner-loading :showing="setting.loading">
      <q-spinner color="primary" size="3em" />
    </q-inner-loading>
    <video class="object-cover rounded-full"></video>
  </main>
</template>

<style scoped lang="scss"></style>
