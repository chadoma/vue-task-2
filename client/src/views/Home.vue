<template>
    <div class="home">


        <!--step1-->
        <keep-alive>
            <BaseCard class="form1" v-if="stepNumber === 1">
                <BaseCardHeader title="お客様情報を入力してください" :stepNumber="stepNumber" icon="mdi-card-account-details" />
                <v-divider></v-divider>
                <SelectGender />
                <DateBirth />
            </BaseCard>
        </keep-alive>
        <!--step2-->
        <keep-alive>
            <BaseCard class="form2" v-if="stepNumber === 2">
                <BaseCardHeader title="以下にお答えください" :stepNumber="stepNumber" icon="mdi-inbox-arrow-down-outline" />
                <v-divider></v-divider>
                <SelectQuestion />
            </BaseCard>
        </keep-alive>
        <!--step3-->
        <keep-alive>
            <BaseCard class="form3" v-if="stepNumber === 3">
                <BaseCardHeader title="ご相談内容をご記入ください" :stepNumber="stepNumber" icon="mdi-form-select" />
                <v-divider></v-divider>
                <ConsultationText />
            </BaseCard>
        </keep-alive>
        <!--step4-->
        <BaseCard class="form4 mt-0" v-if="stepNumber === 4">
            <BaseCardHeader title="以下の内容をご確認ください" :stepNumber="stepNumber" class="margin" icon="mdi-account-arrow-right" />
            <v-divider></v-divider>
            <ul class="confirm">
                <li class="confirm-item">
                    -性別-
                    <span class="confirm-answer">{{ $store.state.step1[0].gender }}</span>
                </li>
                <li class="confirm-item">
                    -生年月日-
                    <span class="confirm-answer">{{ $store.state.step1[0].year }}年{{ $store.state.step1[0].month }}月{{ $store.state.step1[0].day }}日</span>
                </li>
                <li class="confirm-item">
                    -現在、生命保険に加入されていますか？-
                    <span class="confirm-answer">{{ $store.state.step2[0].question1 }}</span>
                </li>
                <li class="confirm-item">
                    -現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院・手術を勧められたことはありますか？-
                    <span class="confirm-answer">{{ $store.state.step2[0].question2 }}</span>
                </li>
                <li class="confirm-item">
                    -過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？-
                    <span class="confirm-answer">{{ $store.state.step2[0].question3 }}</span>
                </li>
                <li class="confirm-item">
                    -ご相談内容-
                    <span class="confirm-answer">{{ $store.state.step3[0].message }}</span>
                </li>
            </ul>
        </BaseCard>


        <!--Step1 Button-->
        <v-layout class="justify-center button-container" v-if="stepNumber === 1">
            <BaseCardButton class="button" @click="checkEmpty('step1')">
                次へ
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>

        </v-layout>
        <!--Step2 Button-->
        <v-layout class="justify-center button-container" v-if="stepNumber === 2">
            <BaseCardButton class="button btn2 mr-8" @click="stepDecrement">
                <v-icon class="mr-4">
                    mdi-arrow-left-bold
                </v-icon>
                前へ
            </BaseCardButton>
            <BaseCardButton class="button btn2" @click="checkEmpty('step2')">
                次へ
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>
        </v-layout>
        <!--Step3 Button-->
        <v-layout class="justify-center button-container" v-if="stepNumber === 3">
            <BaseCardButton class="button btn2 mr-8" @click="stepDecrement">
                <v-icon class="mr-4">
                    mdi-arrow-left-bold
                </v-icon>
                前へ
            </BaseCardButton>
            <BaseCardButton class="button btn2" @click="checkEmpty('step3')">
                次へ
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>
        </v-layout>
        <!--Step4 Button-->
        <v-layout class="justify-center button-container" v-if="stepNumber === 4">
            <BaseCardButton class="button btn2 mr-8" @click="stepDecrement">
                <v-icon class="mr-4">
                    mdi-arrow-left-bold
                </v-icon>
                前へ
            </BaseCardButton>
            <BaseCardButton class="button btn2" @click="checkEmpty('step4')">
                送信
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>
        </v-layout>
    </div>
</template>

<script>
import DateBirth from "@/components/SelectDateOfBirth";
import SelectGender from "@/components/SelectGender";
import SelectQuestion from "@/components/SelectQuestion";
import ConsultationText from "@/components/ConsultationText";
import BaseCard from "@/components/BaseCard";
import BaseCardButton from "@/components/BaseCardButton";

export default {
    name: "Home",
    data() {
        return {
            stepNumber: 1,
        }
    },
    components: {
        BaseCardButton,
        BaseCard,
        DateBirth,
        SelectGender,
        SelectQuestion,
        ConsultationText
    },
    methods: {
        checkEmpty(stepNumber) {
            const isEmpty = Object.values( this.$store.state[ stepNumber ][ 0 ] ).some( cur => {
                return cur === '' || cur === null || cur === undefined
            } )
            if (isEmpty) {
                alert( '選択されていない項目か、入力されていない項目があります' )
            } else {
                this.stepIncrement()
            }
        },
        stepIncrement() {
            this.stepNumber++
        },
        stepDecrement() {
            this.stepNumber--
        }
    },
};
</script>

<style scoped>
.btn2 {
    width: 200px;
}
.confirm {
    margin: 0 0 20px 28px;
}

.confirm-item {
    list-style: none;
    margin: 28px 0 0 32px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    font-size: 14px;
}
.confirm-answer{
    display: block;
    font-weight: 500;
    margin: 8px;
}
</style>
