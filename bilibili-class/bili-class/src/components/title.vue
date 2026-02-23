<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    div{
        height: 55px;
        min-width: 350px;
        font-size: 25px;
        font-weight: bold;
        width: 70%;
        background: #9cf1b5;
        color: black;
        margin: 15px 0 20px 0;
        padding-left: 15px;
        transition: .05s;
        border-radius: 10px;
        display: flex;
        align-items: center;
    }
    div:hover{
        cursor: pointer;
        background-color: #77c28e;
        color: white;
    }
</style>