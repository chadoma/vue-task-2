<template>
    <v-container class="navigation">
        <v-app-bar
            color="white"
            width="99%"
            flat
            dense
            outlined
        >
            <v-toolbar-title @click="navigateTo({name: 'Home'})" class="text-h4 title">title</v-toolbar-title>
            <v-spacer/>

            <v-btn depressed class="mr-5 link" outlined :to="{ name: 'Login'}" rounded-xl color="#333e48">
               Log in
            </v-btn>
            <v-btn  depressed dark :to="{ name: 'Signup'}" rounded-xl color="#ffc20e">
                Sign up
            </v-btn>

        </v-app-bar>

    </v-container>

</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {

        }
    },
    methods: {
        navigateTo(route) {
           this.$router.push(route)
        }
    },
}
</script>

<style scoped>
.title:hover{
    cursor: pointer;
    opacity: .7;
}
.link{
    border: 1px solid #EEE;
}
.navigation {
    width: 100%;
}


</style>