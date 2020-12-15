import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import TabMenu from 'primevue/tabmenu';

export default {
    install(Vue: any) {
        Vue.component('Button', Button);
        Vue.component('Carousel', Carousel);
        Vue.component('TabMenu', TabMenu);
    }
}