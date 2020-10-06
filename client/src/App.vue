<template>
    <v-app class="app">
        <div class="nav-container">
            <Navigation/>
        </div>

        <v-main class="main">
                <router-view></router-view>
        </v-main>

        <Footer/>
    </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
    name: "App",
    data() {
        return {}
    },
    components: {
        Footer,
        Navigation
    }
};
</script>

<style>
.nav-container{
    margin-bottom: 5%;
    box-shadow: 0 1px 4px 0 rgba(14, 12, 79, 0.05);
}
</style>