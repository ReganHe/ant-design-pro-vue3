<template>
  <div class="logo">
    <router-link :to="{ name: 'profile' }">
      <svg-icon name="logo" />
      <h1 v-if="props.showTitle">{{ props.title }}</h1>
    </router-link>
  </div>
</template>

<script lang="ts" setup name="Logo">
import SvgIcon from '@/components/SvgIcon/index.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Castor Admin',
    required: false
  },
  showTitle: {
    type: Boolean,
    default: true,
    required: false
  }
})
</script>
