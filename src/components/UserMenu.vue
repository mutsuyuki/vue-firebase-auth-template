<template>

    <transition name="slide-animation">
        <div class="user-menu">
            <router-link :to="{name:'edit_user'}"> ユーザー情報の編集</router-link>
            <router-link :to="{name:'sign_out'}"> サインアウト</router-link>
            <router-link :to="{name:'quit'}"> 退会する</router-link>
        </div>
    </transition>

</template>


<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {}
    })

    export default class UserMenu extends Vue {
    }
</script>

<style lang="scss" scoped>

    .user-menu {
        position: fixed;
        top: 72px;
        right: 0;
        background: #f3f3f3;
        width: 200px;
        height: calc(100vh - 72px);

        a {
            display: flex;
            align-items: center;
            height: 56px;
            padding: 0 24px;

            &:hover {
                background: #555;
                color: white;
            }
        }

    }

    // vue-transitionの設定
    .slide-animation {
        // 開く
        &-enter {
            transform: translateX(200px);
            opacity: 0;

            &-active {
                transition: all .4s ease;
            }

            &-to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        // 閉じる
        &-leave {
            transform: translateX(0);
            opacity: 1;

            &-active {
                transition: all .4s ease;
            }

            &-to {
                transform: translateX(200px);
                opacity: 0;
            }
        }
    }

</style>
