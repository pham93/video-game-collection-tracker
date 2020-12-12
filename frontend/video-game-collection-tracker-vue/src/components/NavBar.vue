<template>
<TabMenu :model="items" />
</template>
<style></style>

<script lang="ts">
import { defineComponent, ref } from "vue";
    export default defineComponent({
        setup() {
            const items = ref([
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/library'},
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/wishlist'},
            ]);

            return { items };
        }
    })
</script>