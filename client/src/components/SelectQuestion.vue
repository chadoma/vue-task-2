<template>
    <div class="question">
        <div class="question-item">
            <v-card-subtitle class="py-0 color">-現在生命保険に加入されていますか？-</v-card-subtitle>
            <v-radio-group class="ml-2 question1" row @change="selectAns1" ref="ore">
                <v-radio
                    label="はい"
                    value="yes"></v-radio>
                <v-radio
                    label="いいえ"
                    value="no"></v-radio>
            </v-radio-group>
        </div>

        <div class="question-item" v-show="$store.state.step2[0].question1 !== ''">
            <v-card-subtitle class="py-0 color">-現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-</v-card-subtitle>
            <v-radio-group class="ml-2 curNum2" row @change="selectAns2" >

                <v-radio
                    label="はい"
                    value="yes"></v-radio>
                <v-radio
                    label="いいえ"
                    value="no"></v-radio>
            </v-radio-group>
        </div>
        <div class="question-item" v-show="$store.state.step2[0].question2 !== ''">
            <v-card-subtitle class="py-0 color">-過去５年以内に病気や怪我で、手術を受けたことまたは継続して、7日以上の入院をしたことがありますか？-</v-card-subtitle>
            <v-radio-group class="ml-2 curNum3" row @change="selectAns3">
                <v-radio
                    label="はい"
                    value="yes"></v-radio>
                <v-radio
                    label="いいえ"
                    value="no"></v-radio>
            </v-radio-group>
        </div>

    </div>
</template>


<script>
import {mapActions} from 'vuex'
export default {
    name: 'SelectQuestion',
    methods: {
        year(event){
            console.log(event)
        },
        ...mapActions(['selectAns1', 'selectAns2', 'selectAns3'])
    },
}
</script>
<style scoped>
.question-item{
    margin-bottom: 30px;
}

.question-item:last-child{
    margin-bottom: 15px;
}
.question {
    margin: 30px 0 0 30px;
}

.color {
    font-weight: bold;
    color: #333e48;
    font-size: 16px;
}
</style>
