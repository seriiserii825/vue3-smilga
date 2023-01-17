<template>
	<div class="menu-items__order">
		<h3 class="menu-items__order-title">Order</h3>
		<span class="menu-items__order-desc"
			>Choose your favorite dish and send us your order</span
		>
		<select v-model="orderBy" class="menu-items__select">
			<option value="all">All</option>
			<option value="title">Title</option>
			<option value="price_asc">Price asc</option>
			<option value="price_desc">Price desc</option>
			<option value="category">Category</option>
		</select>
	</div>
	<div class="menu-items">
		<MenuItem v-for="item in filtered" :key="item.id" :item="item" />
	</div>
</template>
<script setup>
	import MenuItem from '@/components/menu/MenuItem.vue';
	import { ref } from '@vue/reactivity';
	import { computed, watch } from '@vue/runtime-core';
	const props = defineProps({
		items: Array,
	});

	const orderBy = ref('all');

	const filtered = computed(() => {
		if (orderBy.value === 'all') {
			return props.items;
		}
		return props.items.sort((a, b) => {
			if (orderBy.value === 'category') {
				return a.category.localeCompare(b.category);
			}
			if (orderBy.value === 'price_asc') {
				return a.price - b.price;
			}
			if (orderBy.value === 'price_desc') {
				return b.price - a.price;
			}
			if (orderBy.value === 'title') {
				return a.title.localeCompare(b.title);
			}
		});
	});
</script>
