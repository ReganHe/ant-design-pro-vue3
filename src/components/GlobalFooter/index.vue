<template>
  <div class="footer">

    <div class="copyright">
      Copyright
      <CopyrightOutlined />&nbsp;2024
      <span>New Era</span>
    </div>
  </div>
</template>

<script lang="ts" setup name="GlobalFooter">
import { CopyrightOutlined } from '@ant-design/icons-vue'
</script>

<style lang="scss" scoped>
.footer {
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }

  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
