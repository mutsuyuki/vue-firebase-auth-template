<template>
    <div class="page">
        <SiteHeader/>

        <form v-if="!isSubmitted">
            <div class="title">
                パスワードリセット
            </div>

            <div class="inputs">
                <input type="email" placeholder="email" v-model="email">
            </div>

            <div class="buttons">
                <button class="button" @click.prevent="onClickSubmit">リセットする</button>
            </div>

            <div class="message" v-show="errorMessage">
                <ErrorMessage :message="errorMessage"/>
            </div>
        </form>

        <div v-if="isSubmitted" class="confirm-message">
            リセット用のメールを送信しました。<br/>
            ご確認ください。
        </div>

    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import UserStore from "../../../UserStore/UserStore";
    import ErrorMessage from "@/components/ErrorMessage.vue";
    import SiteHeader from "@/components/SiteHeader.vue";

    @Component({
        components: {
            SiteHeader,
            ErrorMessage,
        }
    })
    export default class ResetPassword extends Vue {

        private email: string = "";
        private errorMessage: string = "";

        private isSubmitted: boolean = false;

        private async onClickSubmit() {
            this.isSubmitted = false;
            this.errorMessage = "";

            const result = await UserStore.sendPasswordReset({
                email: this.email,
            });

            if (result.isError) {
                this.errorMessage = result.errorMessage;
                return;
            }

            this.isSubmitted = true;
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

        .inputs {
            margin-top: 32px;

            * {
                margin-top: 8px;
            }
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
