<template>
    <div class="site-header">
        <router-link :to="{name:'home'}">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#555" d="M0 0v24h24v-24h-24zm18 18h-12v-12h12v12z"/>
                </svg>
                <span class="title"> MY SERVICE </span>
            </div>
        </router-link>

        <div class="user-info"
             v-if="isSignedIn"
             @click.stop="onClickUser"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#888"
                      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
            </svg>
            <span class="name"> {{userName}} </span>

            <UserMenu v-show="isOpenMenu"/>
        </div>
    </div>
</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import UserStore from "@/store/modules/UserStore";
    import UserMenu from "@/components/UserMenu.vue";

    @Component({
        components: {UserMenu}
    })

    export default class SiteHeader extends Vue {

        private isOpenMenu: boolean = false;

        get isSignedIn(): boolean {
            return UserStore.isSignedIn;
        }

        get userName(): string {
            return UserStore.user.name;
        }

        private onClickUser() {
            if (!this.isOpenMenu) {
                this.openMenu();
            } else {
                this.closeMenu();
            }
        }

        private openMenu() {
            this.isOpenMenu = true;
            document.addEventListener("click", this.closeMenuForListen);  //画面のどこ触っても閉じられるように
        }

        private closeMenuForListen = () => this.closeMenu();  // イベント取り外し用

        private closeMenu() {
            this.isOpenMenu = false;
            document.removeEventListener("click", this.closeMenuForListen);
        };
    }
</script>

<style lang="scss" scoped>

    .site-header {
        width: 100%;
        height: 72px;
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #f3f3f3;
    }

    .logo {
        display: flex;

        .title {
            margin-left: 8px;
            margin-top: 2px;
        }
    }

    .user-info {
        position: relative;
        display: flex;
        cursor: pointer;

        .name {
            margin-left: 8px;
            margin-top: 2px;
        }
    }

</style>
