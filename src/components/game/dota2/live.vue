<template>
    <section>123</section>
</template>
<script>
export default {
    data(){
        return{}
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            this.axios("https://api.opendota.com/api/live").then(res=>{
                console.log(res);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
section{
    color: red;
}
</style>