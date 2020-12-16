import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import TabMenu from 'primevue/tabmenu';
// import DataTable from 'primevue/datatable';
// import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';

export default {
    install(Vue: any) {
        Vue.component('Button', Button);
        Vue.component('Carousel', Carousel);
        Vue.component('TabMenu', TabMenu);
        // Vue.component('DataTable', DataTable);
        // Vue.component('Column', Column);
        // Vue.component('ColumnGroup', ColumnGroup);
    }
}