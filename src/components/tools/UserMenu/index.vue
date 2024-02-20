<template>
  <div class="user-wrapper">
    <div class="content-box">
      <a href="https://github.com/bailihuiyue/ant-design-pro-vue3/blob/main/README.md" target="_blank">
        <span class="action">
          <QuestionCircleOutlined />
        </span>
      </a>
      <a-dropdown>
        <span class="action ant-dropdown-link user-dropdown-menu">
          <a-avatar class="avatar" size="small" :src="UserInfo.avatar" />
          <span class="nickname">{{ UserInfo.name }}</span>
        </span>
        <template #overlay>
          <a-menu class="user-dropdown-menu-wrapper">
            <a-menu-item key="1">
              <router-link :to="{ path: '/account/center' }">
                <UserOutlined />
                <span>个人中心</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="2" @click="showSystemSetting">
              <a>
                <SettingOutlined />
                <span>系统设置</span>
              </a>
            </a-menu-item>
            <a-menu-item key="3" @click="onLockScreen">
              <a>
                <LockOutlined />
                <span>锁定屏幕</span>
              </a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="11">
              <a href="javascript:;" @click="handleLogout">
                <LogoutOutlined />
                <span>退出登录</span>
              </a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup name="UserMenu">
import { logout } from '@/views/user/service'
import { USER_INFO } from '@/store/mutation-types'
import { Modal } from 'ant-design-vue'
import { QuestionCircleOutlined, SettingOutlined, LogoutOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { systemConfig } from '@/store/reactiveState'
import ls from '@/utils/Storage'
import { useRouter } from 'vue-router'
import { clearUserInfo } from '@/utils/util'

const router = useRouter()
const UserInfo = ls.get(USER_INFO)
const handleLogout = () => {
  Modal.confirm({
    title: '提示',
    content: '真的要注销登录吗 ?',
    onOk: () => {
      logout().then((res) => {
        clearUserInfo()
        router.push({ path: '/user/login' })
      })
    },
    onCancel() {}
  })
}
const showSystemSetting = () => {
  systemConfig.commit('SET_SETTING_DRAWER', true)
}

const onLockScreen = () => {
  systemConfig.commit('SET_LOCK_SCREEN', true)
}
</script>
<style lang="less">
.user-dropdown-menu-wrapper {
  .ant-dropdown-menu-item {
    width: 100% !important;
  }
}
</style>
