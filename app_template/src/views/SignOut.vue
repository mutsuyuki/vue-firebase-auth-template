<template>
    <div class="page">
        <SiteHeader/>

        <ErrorMessage :message="errorMessage"/>
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
    export default class SignOut extends Vue {

        private errorMessage: string = "";

        created() {
            this.signOut();
        }

        private async signOut() {
            const result = await UserStore.signOut();

            if (result.isError) {
                this.errorMessage = result.errorMessage;
                setTimeout(() => this.$router.replace({name: "home"}), 3000);
            } else {
                this.$router.replace({name: "front"});
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>
