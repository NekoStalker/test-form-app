<template>
    <v-app>
        <v-container>
            <v-card>
              <v-card-title>Опишите ваши любимые спортивные увлечения</v-card-title>
              <v-card-text>
                <v-data-table 
                    :headers="headers" 
                    :items="activities" 
                    :hide-default-footer="true"
                    class="elevation-1"
                    >
                  <template v-slot:top>
                    <v-toolbar flat>
                      <v-toolbar-title>Активности</v-toolbar-title>
                      <v-divider class="mx-4" inset vertical></v-divider>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="openDialog">Добавить</v-btn>
                    </v-toolbar>
                  </template>
                  <template v-slot:[`item.index`]="{ index }">
                    {{ index + 1 }}
                  </template>
                  <template v-slot:[`item.actions`]="{ item, index }">
                    <v-btn color="green" @click="viewDetails(item)">Просмотр</v-btn>
                    <v-btn color="red" @click="removeActivity(index)">Удалить</v-btn>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
        </v-container>
        <SportDialog
            v-model="dialog"
            @save="addActivity"
        />
        <ShowActivity 
            v-model="detailsDialog"
            :activity="selectedActivity" 
         />
    </v-app>
</template>
  
<script>
  import SportDialog from '@/components/SportDialog.vue';
  import ShowActivity from '@/components/ShowActivity.vue'
  export default {
    components: {
        SportDialog,
        ShowActivity,
    },
    data() {
      return {
        dialog: false,
        detailsDialog: false,
        headers: [
            { text: 'Номер', value: 'index', sortable: false },
            { text: 'Название активности', value: 'type' },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        activities: [],
        };
    },
    methods: {
      openDialog() {
        this.dialog = true;
      },
      addActivity(activity) {
        this.activities.push(activity);
      },
      viewDetails(activity) {
        this.selectedActivity = activity;
        this.detailsDialog = true;
        },
      removeActivity(index) {
        this.activities.splice(index, 1);
      },
    },
  };
</script>
  
<style scoped>
</style>
  