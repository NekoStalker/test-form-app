import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ru from 'vuetify/lib/locale/ru';

Vue.use(VueI18n);

const messages = {
  ru: {
    $vuetify: ru,
    dataTable: {
      itemsPerPageText: 'Элементов на странице:',
      pageText: '{0}-{1} из {2}',
      noDataText: 'Нет данных для отображения',
      ariaLabel: {
        sortDescending: 'Отсортировано по убыванию.',
        sortAscending: 'Отсортировано по возрастанию.',
        sortNone: 'Не отсортировано.',
        activateNone: 'Активируйте, чтобы убрать сортировку.',
        activateDescending: 'Активируйте для сортировки по убыванию.',
        activateAscending: 'Активируйте для сортировки по возрастанию.'
      }
    }
  }
};

const i18n = new VueI18n({
  locale: 'ru',
  messages,
});

export default i18n;
