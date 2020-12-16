import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import TabMenu from 'primevue/tabmenu';
import AddGameForm from '../src/components/AddGameForm.vue'


// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';

export default {
    install(Vue: any) {
        Vue.component('Button', Button);
        Vue.component('Carousel', Carousel);
        Vue.component('TabMenu', TabMenu);
        Vue.component('Dialog', Dialog);
        Vue.component('InputText', InputText);
        Vue.component('Dropdown', Dropdown);
        Vue.component('AddGameForm', AddGameForm);
        // Vue.component('DataTable', DataTable);
        // Vue.component('Column', Column);
        // Vue.component('ColumnGroup', ColumnGroup);
    }
}