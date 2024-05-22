<script setup>
    const props = defineProps(['title'])
</script>
<template>
    <el-button class="el-button" type="primary">{{ title }}</el-button>
</template>

<style scoped>
    .el-button{
        background-color: transparent;
        width: 100%;
        height: 56px;
        color: white;
        font-size: 16px;
        border-radius: 8px;
        margin-top: 12px;
    }
</style>