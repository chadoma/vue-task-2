<template>
    <div class="home">


        <keep-alive>
            <!--step1-->
            <BaseCard class="form1" v-if="stepNumber === 1">
                <BaseCardHeader title="お客様情報を入力してください" :stepNumber="stepNumber" icon="mdi-card-account-details"/>
                <v-divider></v-divider>

                <SelectGender @gender="selectGender"/>
                <DateBirth @selectYear="selectYear" @selectMonth="selectMonth" @selectDay="selectDay"/>
            </BaseCard>
            <!--step2-->
            <BaseCard class="form2" v-if="stepNumber === 2">
                <BaseCardHeader title="以下にお答えください" :stepNumber="stepNumber" icon="mdi-form-select"/>
                <v-divider></v-divider>
                <SelectQuestion @q1="form.ans1=$event" @q2="form.ans2=$event" @q3="form.ans3=$event"/>
            </BaseCard>
            <!--step3-->
            <BaseCard class="form3" v-if="stepNumber === 3">
                <BaseCardHeader title="ご相談内容をご記入ください" :stepNumber="stepNumber" icon="mdi-form-select"/>
                <v-divider></v-divider>
                <ConsultationText @input =" form.consulText = $event "/>
            </BaseCard>
        </keep-alive>

        <!--各ページのbutton-->
        <v-layout class="justify-center button-container" v-if="stepNumber === 1">
            <BaseCardButton  class="button" @click="saveData(form.year, form.month, form.day, form.gender)">
                次へ
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>
        </v-layout>

        <v-layout class="justify-center button-container" v-if="stepNumber === 2">

            <BaseCardButton class="button btn2 mr-8" @click="stepDecrement">
                <v-icon class="mr-4">
                    mdi-arrow-left-bold
                </v-icon>
                前へ
            </BaseCardButton>
            <BaseCardButton class="button btn2" @click="saveData(form.ans1, form.ans2, form.ans3)">
                次へ
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>
        </v-layout>

        <v-layout class="justify-center button-container" v-if="stepNumber === 3">
            <BaseCardButton class="button btn2 mr-8" @click="stepDecrement">
                <v-icon class="mr-4">
                    mdi-arrow-left-bold
                </v-icon>
                前へ
            </BaseCardButton>
            <BaseCardButton class="button btn2" @click="saveData(form.consulText)">
                次へ
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>
        </v-layout>

        <pre>{{ $data }}</pre>
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
            form: {
                gender: '',
                year: '',
                month: null,
                day: null,
                ans1: '',
                ans2: '',
                ans3: '',
                consulText: ''
            }
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
        selectYear(val) {
            this.form.year = val
        },
        selectMonth(val) {
            this.form.month = val
        },
        selectDay(val) {
            this.form.day = val
        },
        selectGender(val) {
            this.form.gender = val
        },

        saveData(...args) {
            const checkEmpty = args.some( cur => cur === '' || cur === undefined || cur === null )
            if (checkEmpty) {
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
</style>