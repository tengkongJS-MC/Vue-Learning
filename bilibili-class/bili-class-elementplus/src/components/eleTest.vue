<template>
    <div class="button-row">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <el-switch v-model="value1" />
    <el-switch v-model="value2" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
    <el-icon><WarningFilled /></el-icon>
</template>

<script>

import {ref,reactive} from "vue";

export default {
    setup(){
        let value1 = ref(true);
        let value2 = ref(true);
        return {
            value1,value2
        }
    }
}
</script>

<style >

</style>