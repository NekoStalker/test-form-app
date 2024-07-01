<template>
    <v-dialog v-model="internalDialog" max-width="500px">
        <v-card>
        <v-card-title>
            <span class="headline">Добавить активность</span>
        </v-card-title>

        <v-card-text>
            <v-container>
            <v-row>
                <v-col cols="12">
                <v-select
                    v-model="activity.type"
                    :items="activityTypes"
                    label="Выберите активность"
                    :rules="[v => !!v || 'Требуется выбрать активность']"
                ></v-select>
                </v-col>
                <v-col cols="12" v-if="activity.type === 'велосипеды'">
                <v-select
                    v-model="activity.bikeType"
                    :items="bikeTypes"
                    label="Тип велосипеда"
                    :rules="[v => !!v || 'Требуется выбрать тип велосипеда']"
                ></v-select>
                </v-col>
                <v-col cols="12">
                <v-text-field
                    v-model="activity.years"
                    label="Сколько лет увлекаетесь"
                    type="number"
                    :rules="[v => v >= 0 || 'Значение не должно быть меньше 0']"
                ></v-text-field>
                </v-col>
                <v-col cols="12">
                <v-textarea
                    v-model="activity.comment"
                    label="Комментарий"
                ></v-textarea>
                </v-col>
            </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">Отменить</v-btn>
            <v-btn color="blue darken-1" text :disabled="!isFormValid" @click="saveActivity">Добавить</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        value: {
        type: Boolean,
        default: false,
        },
    },
    data() {
        return {
        internalDialog: this.value,
        activity: {
            type: '',
            bikeType: '',
            years: '',
            comment: '',
        },
        activityTypes: [
            'горные лыжи',
            'виндсерфинг',
            'кайтсерфинг',
            'сноуборды',
            'плавание',
            'яхтинг',
            'боулинг',
            'велосипеды',
        ],
        bikeTypes: ['шоссейные', 'горные', 'bmx'],
        };
    },
    computed: {
        isFormValid() {
        return this.activity.type && this.activity.years > 0 && 
            (this.activity.type !== 'велосипеды' || this.activity.bikeType);
        },
    },
    watch: {
        value(val) {
        this.internalDialog = val;
        },
        internalDialog(val) {
        this.$emit('input', val);
        },
    },
    methods: {
            saveActivity() {
            this.$emit('save', { ...this.activity });
            this.resetActivity();
            this.closeDialog();
        },
        closeDialog() {
            this.internalDialog = false;
        },
        resetActivity() {
            this.activity = {
                type: '',
                bikeType: '',
                years: '',
                comment: '',
            };
        },
    },
};
</script>

<style>

</style>
