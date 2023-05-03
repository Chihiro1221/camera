<script setup lang="ts">
import { Setting as SettingIcon } from '@icon-park/vue-next'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { useSettingStore } from './stores'
import useDrag from './composable/useDrag'
import useContextMenu from './composable/useContextMenu'

const { drag } = useDrag()
useContextMenu()
drag.run()
const setting = useSettingStore()
</script>

<template>
  <suspense>
    <template #fallback>
      <q-inner-loading :showing="true">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </template>
    <main class="relative main group z-20">
      <SettingIcon
        class="cursor-pointer absolute left-1/2 -translate-x-1/2 top-2 z-10 hidden group-hover:block setting"
        v-if="setting.page === 'camera'"
        theme="filled"
        size="18"
        fill="#333"
        @click="setting.togglePage"
      />
      <div>
        <Camera v-if="setting.page === 'camera'" />
        <Setting v-else />
      </div>
    </main>
  </suspense>
</template>

<style lang="scss" scoped>
.main {
  &:hover {
    .setting {
      display: block !important;
    }
  }
}
</style>
