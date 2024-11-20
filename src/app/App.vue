<template>
    <div
        v-if="true"
        key=""
    >
        Hello World
    </div>

    <div>
        {{ foo }}
        <div style="" />
    </div>

    <test />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Test } from '../features/test';

    export default defineComponent({
        name: 'App',

        components: { Test },

        props: {
            greetingText: String
        },

        emits: ['asas'],

        data() {
            return {
                foo: ''
            };
        },

        methods: {
            test() {
                this.$emit('asas');
            }
        }
    });
</script>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
