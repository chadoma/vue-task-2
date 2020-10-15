<template>
    <div class="header">
        <v-icon color="white" class="step subtitle-1">STEP{{ stepNumber }}</v-icon>
        <v-card-title class="justify-center pt-0  color py-2">
            <v-icon class="mr-2">{{ icon }}</v-icon>
            {{ title }}
        </v-card-title>
    </div>
</template>
<script>
export default {
    name: 'BaseCardHeader',
    props: {
        title:{
            type: String,
            require: true
        },
        icon: {
            type: String,
            require: true
        },
        stepNumber: {
            type: Number,
            require: true
        }
    },
}
</script>

<style scoped>

.color {
    color: #333e48;
    font-size: 19px;
    font-weight: 600;
}

.step {
    background-color: #0075c9;
    border-radius: 5px;
    padding: 4px;
}

</style>