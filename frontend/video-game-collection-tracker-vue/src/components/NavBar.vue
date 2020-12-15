<template>
<TabMenu :model="items" />
</template>
<style></style>

<script lang="ts">
import { defineComponent, ref } from "vue";
    export default defineComponent({
        setup() {
            const items = ref([
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                {label: 'Library', icon: 'pi pi-fw pi-folder', to: '/library'},
                {label: 'Wish List', icon: 'pi pi-fw pi-shopping-cart', to: '/wishlist'},
            ]);

            return { items };
        }
    })
</script>