<template>
    <div class="page">
        <SiteHeader/>

        <form v-if="!isSubmitted">
            <div class="title">
                退会処理
            </div>

            <p class="explain">
                全ての登録情報を削除します。
            </p>

            <div class="buttons">
                <button class="button" @click.prevent="onClickQuit">退会</button>
            </div>

            <div class="message" v-show="errorMessage">
                <ErrorMessage :message="errorMessage"/>
            </div>
        </form>

        <div v-if="isSubmitted" class="confirm-message">
            ご利用ありがとうございました。
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import UserStore from "@/store/modules/UserStore";
    import ErrorMessage from "@/components/ErrorMessage.vue";
    import SiteHeader from "@/components/SiteHeader.vue";

    @Component({
        components: {
            SiteHeader,
            ErrorMessage,
        }
    })
    export default class Quit extends Vue {

        private errorMessage: string = "";
        private isSubmitted: boolean = false;

        private async onClickQuit() {
            this.isSubmitted = false;

            if (!confirm("この操作は取り消せません、よろしいですか？"))
                return;

            const result = await UserStore.deleteUser();
            if (result.isError) {
                this.errorMessage = result.errorMessage;
                return;
            }

            this.isSubmitted = true;
            setTimeout(() => this.$router.replace({name: "front"}), 3000);
        }

    }
</script>

<style lang="scss" scoped>
    .page {
        width: 100%;
        height: 100vh;
    }

    form {
        margin: 120px auto 0;
        width: 80%;
        max-width: 300px;

        .title {
            text-align: center;
        }

        .explain {
            margin-top: 32px;
            text-align: center;
        }

        .buttons {
            margin-top: 32px;

            * {
                margin-top: 8px;
            }
        }

        .message {
            margin-top: 32px;

        }
    }

    .confirm-message {
        margin: 200px auto 0;
        width: 80%;
        text-align: center;
    }
</style>
