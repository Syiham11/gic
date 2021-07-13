<template>
  <div class="container py-4">
  <app-header/>
    <router-view></router-view>
  <app-footer/>
  </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
        components: {
            'app-header': Header,

        }
    }
</script>

