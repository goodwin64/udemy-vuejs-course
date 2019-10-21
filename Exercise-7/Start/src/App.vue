<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers
                    :selectServer="selectServer"
            ></servers>
            <app-server-details
                    :resetServer="resetServer"
                    :selectedServer="selectedServer"
            ></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/ServersList.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        data() {
            return {
                selectedServer: null,
            }
        },
        methods: {
            selectServer: function (server) {
                this.selectedServer = server;
            },
            resetServer: function () {
                this.selectedServer = null;
            },
        },
    }
</script>

<style>

</style>
