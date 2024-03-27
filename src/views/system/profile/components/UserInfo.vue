<template>
  <div class="component-user-info">
    <div class="user-avatar-info">
      <img v-if="user.avatar" :src="user.avatar" :style="{ height: '100px', width: '100px' }" />
      <div class="user-name text-center">{{ user.userName }}</div>
      <div class="user-role text-center text-muted">{{ (user.roles || []).join(',') }}</div>
    </div>
    <div class="user-bio">
      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <solution-outlined />
          <span>详情</span>
        </div>
        <div class="user-bio-section-body">
          <div class="user-info">
            <div class="item">
              <div class="label">用户账号 :</div>
              <div class="value">{{ user.loginName }}</div>
            </div>
            <div class="item">
              <div class="label">用户名称 :</div>
              <div class="value">{{ user.userName }}</div>
            </div>
            <div class="item" v-if="user.orgName">
              <div class="label">所属机构 :</div>
              <div class="value">{{ user.orgName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { SolutionOutlined } from '@ant-design/icons-vue';

import { useUserStore } from '@/store/modules/user';
import headerImg from '@/assets/header.jpg';

const userStore = useUserStore();
const user = reactive({
  avatar: userStore.info?.avatar || headerImg,
  userName: userStore.info?.userName,
  loginName: userStore.info?.loginName,
  roles: userStore.roles.map((r) => r.name),
  orgName: userStore.info?.orgName
});
</script>

<style lang="scss" scoped>
.component-user-info {
  .user-avatar-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .user-name {
      margin-top: 10px;
      font-weight: bold;
    }

    .user-role {
      margin-top: 10px;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .user-bio {
    margin-top: 20px;
    color: #606266;

    span {
      padding-left: 4px;
    }

    .user-bio-section {
      font-size: 14px;
      padding: 15px 0;

      .user-bio-section-header {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;

        .skill-icon {
          width: 20px !important;
          height: 20px !important;
        }
      }

      .user-bio-section-body {
        .user-info {
          .item {
            overflow: hidden;
            margin-top: 16px;
            font-size: 14px;

            .label {
              float: left;
              width: 80px;
              font-weight: bold;
              text-align: right;
            }

            .value {
              float: left;
              margin-left: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
