<template>
  <div class="login">
    <div class="bg-banner" />
    <div id="login-box">
      <div class="login-banner">
        <img src="../../../assets/logo.png" class="logo" />
        <img src="../../../assets/login-box-bg.svg" class="banner" />
      </div>
      <a-form id="formLogin" class="login-form" @submit="handleSubmit" :model="formRef">
        <div class="title-container">
          <h3 class="title">
            {{ title }}
          </h3>
        </div>
        <a-form-item v-bind="validateInfos.username">
          <a-input size="large" type="text" placeholder="用户名" v-model:value="formRef.username">
            <template #prefix>
              <UserOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input-password size="large" placeholder="密码" v-model:value="formRef.password">
            <template #prefix>
              <LockOutlined :style="{ color: 'rgba(0,0,0,.25)' }" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item v-bind="validateInfos.rememberMe">
          <a-checkbox v-model:checked="formRef.rememberMe" style="float: left">
            自动登录
          </a-checkbox>
        </a-form-item>
        <a-form-item style="margin-top: 24px">
          <a-button
            size="large"
            type="primary"
            htmlType="submit"
            class="login-button"
            :loading="state.loading"
            :disabled="state.loading"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
    <div class="footer">
      <global-footer />
    </div>
  </div>
</template>

<script lang="ts" setup name="Login">
import { reactive } from 'vue'
import { Form, notification } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '@/store/modules/user'
import GlobalFooter from '@/components/GlobalFooter/index.vue'

const userStore = useUserStore()

const useForm = Form.useForm
const router = useRouter()

const state = reactive({
  loading: false
})
const title = import.meta.env.VITE_GLOB_APP_TITLE

// #region 表单相关
const formRef = reactive({
  rememberMe: false,
  username: '',
  password: ''
})

const rulesRef = reactive({
  rememberMe: [{ trigger: 'checked' }],
  username: [
    {
      required: true,
      message: '请输入用户名'
    }
  ],
  password: [{ required: true, message: '请输入密码！' }, {}]
})
const { validate, validateInfos } = useForm(formRef, rulesRef)

const timeFix = () => {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9
    ? '早上好'
    : hour <= 11
      ? '上午好'
      : hour <= 13
        ? '中午好'
        : hour < 20
          ? '下午好'
          : '晚上好'
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  state.loading = true
  const validateFieldsKey = ['username', 'password']
  try {
    await validate(validateFieldsKey)
    await userStore.login({
      loginName: formRef.username,
      password: formRef.password,
      applicationId: parseInt(import.meta.env.VITE_GLOB_APP_ID),
      deviceId: parseInt(import.meta.env.VITE_GLOB_DEVICE_ID)
    })
    router.replace('/')
    // 延迟 1 秒显示欢迎信息
    setTimeout(() => {
      notification.success({
        message: '欢迎',
        description: `${timeFix()}，欢迎回来`
      })
    })
    state.loading = false
  } catch {
    state.loading = false
  }
}
// #endregion
</script>

<style lang="scss" scoped>
@import '@/style/global.scss';

.login {
  .bg-banner {
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, $g-bg, $g-container-bg);
  }

  #login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    background-color: $g-container-bg;
    border-radius: 10px;
    box-shadow:
      0px 12px 32px 4px rgba(0, 0, 0, 0.04),
      0px 8px 20px rgba(0, 0, 0, 0.08);
    transform: translateX(-50%) translateY(-50%);

    .login-banner {
      position: relative;
      width: 450px;
      overflow: hidden;
      // background-color: $g-bg;
      background: linear-gradient(to bottom, #18233b, #012879);

      .banner {
        width: 100%;
        padding: 0 20%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .logo {
        position: absolute;
        top: 20px;
        left: 20px;
        height: 30px;
        border-radius: 4px;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
      }
    }

    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 500px;
      min-height: 700px;
      padding: 50px;
      overflow: hidden;

      .title-container {
        position: relative;

        .title {
          margin: 0 auto 30px;
          font-size: 1.8em;
          font-weight: bold;
        }
      }

      button.login-button {
        padding: 0 15px;
        font-size: 16px;
        height: 40px;
        width: 100%;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px 0;
    margin: 0;
  }
}

html[data-dark='dark'] {
  .login {
    .bg-banner {
      background: radial-gradient(circle at center, $g-bg-dark, $g-container-bg-dark);
    }

    #login-box {
      background-color: $g-container-bg-dark;
    }
  }
}

@media (max-width: 1024px) {
  .login {
    #login-box {
      position: relative;
      top: inherit;
      left: inherit;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      height: 100%;
      border-radius: 0;
      box-shadow: none;
      transform: translateX(0) translateY(0);

      .login-banner {
        width: 100%;
        min-height: 300px;
        padding: 20px 0;

        .banner {
          position: relative;
          top: inherit;
          right: inherit;
          display: inherit;
          width: 100%;
          max-width: 375px;
          padding: 30px 0;
          margin: 0 auto;
          transform: translateY(0);
        }
      }

      .login-form {
        width: 100%;
        min-height: auto;
        padding: 30px;
      }
    }

    .copyright {
      position: relative;
    }
  }
}
</style>
