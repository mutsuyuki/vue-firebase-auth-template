// 最初のページ

<template>
    <div class="page">

        <SiteHeader/>

        <form>
            <div class="title">
                サインイン
            </div>

            <div class="inputs">
                <input type="email" placeholder="email" v-model="email">
                <input type="password" placeholder="password" v-model="password">
            </div>

            <div class="buttons">
                <button class="button" @click.prevent="onClickSignIn">サインイン</button>

                <router-link class="button" :to="{name:'sign_up'}">
                    新しく登録
                </router-link>

                <router-link class="button" :to="{name:'reset_password'}">
                    パスワードを忘れた
                </router-link>
            </div>

            <div class="message" v-show="errorMessage">
                <ErrorMessage :message="errorMessage"/>
            </div>
        </form>

    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import SiteHeader from "@/components/SiteHeader.vue";
    import ErrorMessage from "@/components/ErrorMessage.vue";
    import UserStore from "@/store/modules/UserStore/UserStore";

    @Component({
        components: {
            SiteHeader,
            ErrorMessage,
        }
    })
    export default class Front extends Vue {

        private email: string = "";
        private password: string = "";
        private errorMessage: string = "";

        get isError() {
            return this.errorMessage != "";
        }

        private async onClickSignIn() {
            this.errorMessage = "";

            const result = await UserStore.signInByPassword({
                email: this.email,
                password: this.password
            });

            if (result.isError) {
                this.errorMessage = result.errorMessage;
                console.log(result.errorCode)
                return;
            }

            this.$router.push({name: "home"});
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
</style>
