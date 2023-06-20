<template>
    <header-layout></header-layout>
    <main>
        <slot></slot>
    </main>

    <footer-layout></footer-layout>
</template>

<script>
import HeaderLayout from '~/components/layouts/header/HeaderLayout.vue';
import FooterLayout from '../components/layouts/FooterLayout.vue';
export default {
    components : {
        HeaderLayout,
        FooterLayout
    }
}
</script>