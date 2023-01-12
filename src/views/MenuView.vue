<template>
	<div class="menu-view">
		<div class="container">
			<MenuFilter @filter="handleFilter" :categories="categories" />
			<MenuItems :items="items" />
		</div>
	</div>
</template>
<script setup>
	import menu from '@/data/menu.js';
	import MenuFilter from '@/components/menu/MenuFilter.vue';
	import MenuItems from '@/components/menu/MenuItems.vue';
	import { computed, ref } from '@vue/runtime-core';
	let categories = menu.map((item) => item.category);
	categories = ['all', ...new Set(categories)];

	let items = ref(menu);

	function handleFilter(category) {
		if (category === 'all') {
			items.value = menu;
		} else {
			items.value = menu.filter((item) => {
				return item.category === category;
			});
		}
	}
</script>
