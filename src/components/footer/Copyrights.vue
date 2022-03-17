<template>
    <a :style="{color: color, 'font-size': size + 'em'}" href="#" target="_blank">
        ©2020 - 2022 VsKendo
    </a>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        props: {
            color: String,
            size: Number,
        },
    })
    export default class Copyrights extends Vue {
    }
</script>
