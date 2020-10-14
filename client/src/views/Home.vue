<template>
    <div class="home">


        <!--step1-->
        <BaseCard class="form1" v-if="stepNumber === 1">
            <BaseCardHeader title="お客様情報を入力してください" :stepNumber="stepNumber" icon="mdi-card-account-details" />
            <v-divider></v-divider>
            <SelectGender />
            <DateBirth />
        </BaseCard>
        <!--step2-->
        <BaseCard class="form2" v-if="stepNumber === 2">
            <BaseCardHeader title="以下にお答えください" :stepNumber="stepNumber" icon="mdi-form-select" />
            <v-divider></v-divider>
            <SelectQuestion />
        </BaseCard>
        <!--step3-->
        <BaseCard class="form3" v-if="stepNumber === 3">
            <BaseCardHeader title="ご相談内容をご記入ください" :stepNumber="stepNumber" icon="mdi-form-select" />
            <v-divider></v-divider>
            <ConsultationText />
        </BaseCard>

        <!--Step Button-->
        <v-layout class="justify-center button-container" v-if="stepNumber === 1">
            <BaseCardButton class="button" @click="checkEmpty('step1')">
                次へ
                <v-icon class="ml-4">
                    mdi-arrow-right-bold
                </v-icon>
            </BaseCardButton>

        </v-layout>
        <!--Step Button-->
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
        <!--Step Button-->
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
</style>
