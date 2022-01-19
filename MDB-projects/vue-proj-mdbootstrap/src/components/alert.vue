<template>
    <div v-show="toggle" @click="toggle = !toggle" class="alert alert-secondary" role="alert">
        {{msg}}
    </div>  
</template>

<script>
export default {
    name: 'Alert',
    data() {
            return {
               toggle: true,
            }
        },
    props: {
        msg: String
    }
}
</script>
<style scoped>
    
</style>