<template>
    <div class="question">
        <div class="q1 question-item">
            <v-card-subtitle class="py-0 color">-現在生命保険に加入されていますか？-</v-card-subtitle>
            <v-radio-group class="ml-2" row @change="q1">

                <v-radio
                    label="はい"
                    value="yes"></v-radio>
                <v-radio
                    label="いいえ"
                    value="no"></v-radio>
            </v-radio-group>
        </div>

        <div class="q2 question-item" v-show="flag1">
            <v-card-subtitle class="py-0 color">-現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-</v-card-subtitle>
            <v-radio-group class="ml-2" row @change="q2">

                <v-radio
                    label="はい"
                    value="yes"></v-radio>
                <v-radio
                    label="いいえ"
                    value="no"></v-radio>
            </v-radio-group>
        </div>
        <div class="q3 question-item" v-show="flag2">
            <v-card-subtitle class="py-0 color">-過去５年以内に病気や怪我で、手術を受けたことまたは継続して、7日以上の入院をしたことがありますか？-</v-card-subtitle>
            <v-radio-group class="ml-2" row @change="q3">

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
export default {
    name: 'SelectQuestion',
    data() {
        return {
          flag1: false,
          flag2: false,
          flag3: false
        }
    },
    methods: {
        q1(val) {
            this.flag1 = true
            this.$emit( 'q1', val )
        },
        q2(val) {
            this.flag2 = true
            this.$emit( 'q2', val )
        },
        q3(val) {
            this.flag3 = true
            this.$emit( 'q3', val )
        },
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