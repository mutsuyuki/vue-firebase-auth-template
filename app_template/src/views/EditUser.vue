<template>
    <div class="page">

        <SiteHeader/>

        <form>
            <div class="title">
                ユーザー情報の修正
            </div>

            <div class="inputs">
                <input type="text" placeholder="new name" v-model="userName">
            </div>

            <div class="buttons">
                <button class="button" @click.prevent="onSubmit">更新</button>
            </div>

            <div class="message" v-show="errorMessage">
                <ErrorMessage :message="errorMessage"/>
            </div>
        </form>

    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import UserStore from "../../../UserStore/UserStore";
    import {EditUserParam, User} from "../../../UserStore/UserStoreInterfaces";
    import ErrorMessage from "@/components/ErrorMessage.vue";
    import SiteHeader from "@/components/SiteHeader.vue";

    @Component({
        components: {
            ErrorMessage,
            SiteHeader
        }
    })
    export default class EditUser extends Vue {
        private userName: string = "";

        private errorMessage: string = "";

        created(): void {
            this.userName = UserStore.user.name;
        }

        private async onSubmit() {
            const editedUser: EditUserParam = UserStore.user;
            editedUser.name = this.userName;
            const result = await UserStore.editUser(editedUser);
            if (result.isError) {
                this.errorMessage = result.errorMessage;
                return;
            }

            alert("更新しました")
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
