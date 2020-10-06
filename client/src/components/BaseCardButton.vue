<template>
        <v-btn
            v-on="$listeners"
            v-bind="$attrs"
            class="button subtitle-1 font-weight-bold"
            color="#0075c9"
            dark
            >
            <slot></slot>
        </v-btn>
</template>

<script>
export default {
    name: 'BaseCardButton'
}
</script>

<style scoped>
.button{
    width: 250px;
    height: 45px;

}
</style>