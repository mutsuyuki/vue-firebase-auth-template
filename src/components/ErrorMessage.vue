<template>
    <div>
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ErrorMessage extends Vue {
        @Prop() private message!: string;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    p {
        color: tomato;
    }

</style>
