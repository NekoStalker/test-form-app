<template>
    <v-dialog v-model="internalDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Детали активности</span>
        </v-card-title>
  
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <strong>Название активности:</strong> {{ activity.type }}
              </v-col>
              <v-col cols="12" v-if="activity.type === 'велосипеды'">
                <strong>Тип велосипеда:</strong> {{ activity.bikeType }}
              </v-col>
              <v-col cols="12">
                <strong>Сколько лет увлекаетесь:</strong> {{ activity.years }}
              </v-col>
              <v-col cols="12">
                <strong>Комментарий:</strong> {{ activity.comment }}
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
  
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">Закрыть</v-btn>
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
      activity: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        internalDialog: this.value,
      };
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
      closeDialog() {
        this.internalDialog = false;
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  