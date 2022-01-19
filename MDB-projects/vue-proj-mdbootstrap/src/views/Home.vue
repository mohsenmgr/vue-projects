<template>
    <div id="home">
        <main>
            <Content />
       </main>
    </div>
</template>

<script>
import Content from '@/components/content.vue'

export default {
    name: 'home',
    data() {
        return {};
    }, 
    components: {
        Content
    },
    props: {
        
    }
}
</script>

<style scoped>
    #home {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
       
    }
   
  
</style>






