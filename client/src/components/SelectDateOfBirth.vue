<template>
    <div class="birth">
        <v-card-subtitle class="pb-2 color">-生年月日-</v-card-subtitle>
        <v-row align="center">
            <v-col
                class="d-flex ml-2 pb-0"
                cols="11"
            >
                <v-select
                    @change="year"
                    label="年"
                    :items="optYear"
                    item-text="label"
                    dense
                    outlined
                >
                </v-select>
                <v-select
                    @change="month"
                    label="月"
                    :items="optMonth"
                    dense
                    outlined
                >
                </v-select>
                <v-select
                    @change="day"
                    label="日"
                    :items="optDay"
                    dense
                    outlined
                >
                </v-select>
            </v-col>
        </v-row>
    </div>
</template>

<!-- optionの内容を作りdataで保持-->
<script>
export default {

    name: 'SelectDateOfBirth',
    data() {
        return {
            nowYear: '',
            optYear: [],
            optMonth: null,
            optDay: null,
        }
    },
    mounted() {
        this.nowYear = new Date().getFullYear()
        this.optYear = this.generateYear()
        this.optMonth = this.generateMonth()
        this.optDay = this.generateDays()
    },
    methods: {
        generateYear() {
            const optYear = []
            for (let i = this.nowYear; i > 1911; i--) {
                if (i > 2018) {
                    optYear.push( { "year": i, "label": `${ i } (令和${ i - 2018 }年)` } )
                } else if (i > 1988) {
                    optYear.push( { "year": i, "label": `${ i } (平成${ i - 1988 }年)` } )
                } else if (i > 1925) {
                    optYear.push( { "year": i, "label": `${ i } (昭和${ i - 1925 }年)` } )
                } else if (i > 1911) {
                    optYear.push( { "year": i, "label": `${ i } (大正${ i - 1911 }年)` } )
                }
            }
            return optYear
        },
        generateMonth() {
            return [...Array( 12 ).keys()].map( i => ++i )
        },
        generateDays() {
            return [...Array( 31 ).keys()].map( i => ++i )
        },
        //各値を親コンポーネントに送る
        year(value) {
            console.log( value )
            this.$emit( 'selectYear', value )
        },
        month(value) {
            console.log( value )
            this.$emit( 'selectMonth', value )
        },
        day(value) {
            console.log( value )
            this.$emit( 'selectDay', value )
        }
    },

}
</script>
<style scoped>
.color {
    color: #333e48;
    font-size: 16px;
    font-weight: bold;
}

.birth {
    margin: 0 0 10px 30px;
}
</style>