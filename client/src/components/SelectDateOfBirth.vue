<template>
    <div class="birth">
        <v-card-subtitle class="pb-2 color">-生年月日-</v-card-subtitle>
        <v-row align="center">
            <v-col
                class="d-flex ml-2 pb-0"
                cols="11"
            >
                <v-select
                    @change="getYear"
                    label="年"
                    :items="optYear"
                    item-text="label"
                    dense
                    outlined
                    required
                    :value="year"
                >
                </v-select>
                <v-select
                    ref="m"
                    @change="getMonth"
                    label="月"
                    :items="optMonth"
                    dense
                    outlined
                    required
                >
                </v-select>
                <v-select
                    @change="getDay"
                    label="日"
                    :items="optDay"
                    dense
                    outlined
                    required
                >
                </v-select>
            </v-col>
        </v-row>
    </div>
</template>

<!-- optionの内容を作りdataで保持-->
<script>
export default {

    name: 'SelectBirth',
    data() {
        return {
            year: '',
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
        getYear(selectYear) {
            this.$store.dispatch( 'getYear', selectYear )
        },
        getMonth(selectMonth) {
            this.$store.dispatch( 'getMonth', selectMonth )
        },
        getDay(selectDay) {
            this.$store.dispatch( 'getDay', selectDay )
        }
    }
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
