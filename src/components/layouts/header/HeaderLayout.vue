<template>
    <top-bar></top-bar>
    <navbar></navbar>
    <menu></menu>
</template>
<script>
import TopBar from './__component/TopBar.vue';
import Navbar from './__component/Navbar.vue';
import Menu from './__component/Menu.vue';

export default {
    name: "HeaderLayout",
    components: {
        TopBar,
        Navbar,
        Menu,
    }
}
</script>