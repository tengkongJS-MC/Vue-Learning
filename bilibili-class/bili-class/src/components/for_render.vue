<template>
    <table>
        <tr id = "title">
            <td>序号</td>
            <td>姓名</td>
            <td>电话号码</td>
        </tr>
        <tr v-for="i in peopleList" :key = "i.id">
            <td>{{ i.id }}</td>
            <td>{{ i.name }}</td>
            <td>{{ i.tel }}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        data(){
            return{
                peopleList: [
                    { id: 1, name: '张明', tel: '13912340001' },
                    { id: 2, name: '李芳', tel: '13912340002' },
                    { id: 3, name: '王磊', tel: '13912340003' },
                    { id: 4, name: '赵静', tel: '13912340004' },
                    { id: 5, name: '刘洋', tel: '13912340005' }
                ]
            }
        }
    }
</script>

<style scoped>
    table{
        width: 240px;
        height: 200px;
        border-collapse: collapse;
        border: 2px solid rgb(200, 200, 200);
        letter-spacing: 1px;
        font-size: 0.8rem;
    }
    table,td{
        border: 1px black solid;
        text-align: center;
    }
    #title {
        background: #f2f2f2;
    }
    tr:hover{
        cursor: pointer;
        background-color: #f4f4f4;
    }
</style>