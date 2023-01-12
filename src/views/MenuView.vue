<template>
	<div class="menu-view">
		<div class="container">
			<MenuFilter :categories="categories" />
			<MenuItems :items="menu" />
		</div>
	</div>
</template>
<script setup>
	import menu from '@/data/menu.js';
	import MenuFilter from '@/components/menu/MenuFilter.vue';
	import MenuItems from '@/components/menu/MenuItems.vue';
	let categories = menu.map((item) => item.category);
	categories = ['all', ...new Set(categories)];
</script>
