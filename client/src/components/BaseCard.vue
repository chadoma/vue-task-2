<template>

        <v-card
            class="mx-auto my-12 card"
            max-width="700px"
            relative
            outlined
        >
            <slot></slot>
        </v-card>

</template>
<script>
    export default {
        name: 'BaseCard'
    }
</script>