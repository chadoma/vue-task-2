<template>
    <div>
        <div class="consultation-text-container">
            <v-card-subtitle class="py-0 color">-ご相談内容-</v-card-subtitle>
            <v-layout justify-center>
                <v-col
                    cols="12"
                    md="11"
                >
                    <v-textarea
                        outlined
                        label="内容"
                        rows="8"
                        @input="sendMsg"
                    ></v-textarea>
                </v-col>
            </v-layout>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConsultationText',
    data(){
        return{
            value:''
        }
    },
    methods:{
        sendMsg(val){
            this.$emit('input', val)
            this.value = val
        }
    }
}
</script>
<style scoped>
.color {
    margin: 30px 0 0 30px;
    font-weight: bold;
    color: #333e48;
    font-size: 16px;

}
</style>