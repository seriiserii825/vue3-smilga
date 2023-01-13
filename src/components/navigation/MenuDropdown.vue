<script setup>
	const props = defineProps({
		items: {
			type: Array,
			required: true,
		},
	});
</script>
<template>
	<div class="menu-dropdown">
		<header class="menu-dropdown__header">UI</header>
		<ul class="menu-dropdown__list">
			<li v-for="{ title, url } in items" :key="title">
				<router-link :to="url" class="menu-dropdown__link">{{
					title
				}}</router-link>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
	.menu-dropdown {
	}
</style>
