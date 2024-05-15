<template>
  <div class="profile">
    <Card title="个人信息" class="user-info">
      <UserInfo />
    </Card>
    <div class="password">
      <Card title="修改密码">
        <Password />
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Card } from 'ant-design-vue'
import UserInfo from './components/UserInfo.vue'
import Password from './components/Password.vue'
</script>

<style lang="scss" scoped>
.profile {
  padding: 16px;
  display: flex;
  .user-info {
    width: 400px;
  }
  .password {
    margin-left: 16px;
    flex: 1;
    height: auto;
  }
}
</style>
