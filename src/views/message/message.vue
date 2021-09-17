<template>
<div class="message_box">
    <div class="message_container"></div>
    <nav-bar />
    <container />
</div>
</template>

<script>
import Container from '../../components/container/container.vue'
import navBar from '../../components/navBar/navBar.vue'
export default {
  components: { navBar, Container },

}
</script>

<style>

</style>