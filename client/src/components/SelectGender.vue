<template>
    <div class="gender">
        <v-card-subtitle class="py-0 color">-性別-</v-card-subtitle>
        <v-radio-group class="ml-2" row @change="gender">
            <v-radio
                label="男"
                value="man"></v-radio>
            <v-radio
                label="女"
                value="woman"></v-radio>
        </v-radio-group>
    </div>
</template>

<script>
export default {
    name: 'SelectGender',
    methods:{
        gender(val){
           this.$emit('gender', val)
        }
    }
}
</script>

<style scoped>
.gender {
    margin: 30px 0 0 30px;
}
.color {
    font-weight: bold;
    color: #333e48;
    font-size: 16px;
}
</style>