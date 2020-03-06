<template>
    <div class="page">

        <SiteHeader/>

        <div class="container">
            <div class="title">あなたのホーム</div>

            <div class="dummy-contents">
                <div v-for="i in 30">{{i}}</div>
            </div>
        </div>

    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteHeader from '../components/SiteHeader.vue';

    @Component({
        components: {
            SiteHeader,
        }
    })
    export default class Home extends Vue {

    }
</script>

<style lang="scss" scoped>
    .page {
        width: 100%;
    }

    .container {
        margin: 40px auto 0;
        width: 80%;
        .title {
            text-align: center;
        }

    }

    .dummy-contents{
        margin: 40px 0;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 8px;

        div{
            width: 100%;
            height: calc(80vw / 3);
            line-height: calc(80vw / 3);
            text-align: center;
            color: white;
            font-size: 32px;
            background: #f5f5f5;
        }
    }

</style>
