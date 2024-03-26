<template>
  <div class="main">
    <a-form id="formLogin" class="user-layout-login" @submit="handleSubmit" :model="formRef">
      <a-form-item v-bind="validateInfos.username">
        <a-input size="large" type="text" placeholder="账户: admin or ant.design" v-model:value="formRef.username">
          <template #prefix>
            <UserOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item v-bind="validateInfos.password">
        <a-input-password size="large" placeholder="密码: 随意" v-model:value="formRef.password">
          <template #prefix>
            <LockOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item v-bind="validateInfos.rememberMe">
        <a-checkbox v-model:checked="formRef.rememberMe" style="float: left"> 自动登录 </a-checkbox>
      </a-form-item>

      <a-form-item style="margin-top: 24px">
        <a-button size="large" type="primary" htmlType="submit" class="login-button" :loading="state.loading"
          :disabled="state.loading">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup name="Login">
import { reactive } from 'vue'
import { Form, notification } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/store/modules/user'
import { timeFix } from '@/utils/util'
import { getAppEnvConfig } from '@/utils/env'

const userStore = useUserStore();

const useForm = Form.useForm
const router = useRouter()

const state = reactive({
  loading: false,
})

// #region 表单相关
const formRef = reactive({
  rememberMe: false,
  username: '',
  password: '',
})

const rulesRef = reactive({
  rememberMe: [{ trigger: 'checked' }],
  username: [
    {
      required: true,
      message: '请输入用户名'
    }
  ],
  password: [{ required: true, message: '请输入密码！' }, {}],
})
const { validate, validateInfos } = useForm(formRef, rulesRef)

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  state.loading = true
  const validateFieldsKey = ['username', 'password']
  try {
    await validate(validateFieldsKey)
    const { VITE_GLOB_APP_ID, VITE_GLOB_DEVICE_ID } = getAppEnvConfig();
    await userStore.login({
      loginName: formRef.username,
      password: formRef.password,
      applicationId: parseInt(VITE_GLOB_APP_ID),
      deviceId: parseInt(VITE_GLOB_DEVICE_ID),
    })
    router.replace('/profile/center')
    // 延迟 1 秒显示欢迎信息
    setTimeout(() => {
      notification.success({
        message: '欢迎',
        description: `${timeFix()}，欢迎回来`,
      })
    })
    state.loading = false
  } catch {
    state.loading = false
  }
}
// #endregion

</script>

<style lang="less" scoped>
@import '@/style/index.less';

.user-layout-login {
  label {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .anticon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: @primary-color;
      }
    }
  }
}
</style>
