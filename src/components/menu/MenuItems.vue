<template>
	<div class="menu-items">
		<MenuItem v-for="item in items" :key="item.id" :item="item" />
	</div>
</template>
<script setup>
import MenuItem from '@/components/menu/MenuItem.vue';
	const props = defineProps({
		items: Array,
	});
</script>
