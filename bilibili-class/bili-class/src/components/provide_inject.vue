<template>
    <div>这里是从父组件通过provide传递过来的数据：{{ message }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup(){
        const message = inject("message");

        return{
            message
        }
    }
}
</script>

<style>

</style>