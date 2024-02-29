<template>
  <div class="main">
    <a-form id="formLogin" class="user-layout-login" @submit="handleSubmit" :model="formRef">
      <a-alert v-if="isLoginError" type="error" showIcon style="margin-bottom: 24px"
        message="账户或密码错误（admin / ant.design）" />
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
        <a-button size="large" type="primary" htmlType="submit" class="login-button" :loading="state.loginBtn"
          :disabled="state.loginBtn">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup name="Login">
import { encryptByMd5 } from '@/utils/encrypt'
import { ref, reactive, UnwrapRef } from 'vue'
import { Form } from 'ant-design-vue'
import { loginSuccess, requestFailed } from './helper'
import { useRouter } from 'vue-router'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import * as api from './service'
import { FormState } from './types'
import config from '@/config/defaultSettings'
import generateAsyncRoutes from '@/router/generateAsyncRoutes'

const useForm = Form.useForm
const router = useRouter()

const state = reactive({
  time: 60,
  loginBtn: false,
  // login type: 0 email, 1 username, 2 telephone
  loginType: 0,
})

// #region 表单相关
const formRef: UnwrapRef<FormState> = reactive({
  rememberMe: false,
  username: '',
  password: '',
})

const handleUsernameOrEmail = (rule, value: string) => {
  const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
  if (regex.test(value)) {
    state.loginType = 0
  } else {
    state.loginType = 1
  }
  return Promise.resolve()
}
const rulesRef = reactive({
  rememberMe: [{ trigger: 'checked' }],
  username: [
    {
      required: true,
      message: '请输入帐户名或邮箱地址'
    },
    {
      validator: handleUsernameOrEmail,
      trigger: 'change'
    }
  ],
  password: [{ required: true, message: '请输入密码！' }, {}],
})
const { validate, validateInfos } = useForm(formRef, rulesRef)
const isLoginError = ref(false)
const handleSubmit = (e: Event) => {
  e.preventDefault()
  state.loginBtn = true
  const validateFieldsKey = ['username', 'password']

  validate(validateFieldsKey)
    .then(async () => {
      formRef.password = encryptByMd5(formRef.password)
      const res = await api.userLogin(formRef)
      if (res) {
        // mock用,可删
        if (res.code === 403) {
          isLoginError.value = true
          formRef.password = ''
          state.loginBtn = false
          return
        }
        if (config.useAsyncRouter) {
          generateAsyncRoutes(router, res.menu)
        }
        loginSuccess(res, router)
        isLoginError.value = false
      } else {
        requestFailed(res)
        isLoginError.value = true
        formRef.password = ''
      }
      state.loginBtn = false
    })
    .catch(() => {
      state.loginBtn = false
    })
}
// #endregion

</script>

<style lang="less" scoped>
@import '../../style/index.less';

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
