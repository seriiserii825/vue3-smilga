<script setup>
	const props = defineProps({
		items: {
			type: Array,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
	});
</script>
<template>
	<div class="menu-dropdown">
		<header class="menu-dropdown__header">
			<span class="menu-dropdown__icon"><font-awesome-icon :icon="`fa-solid ${icon}`" /></span>
			<span>UI</span>
		</header>
		<ul class="menu-dropdown__list">
			<li v-for="{ title, url } in items" :key="title">
				<router-link :to="url" class="menu-dropdown__link">
					<span>{{ title }}</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" scoped>
	.menu-dropdown {
	}
</style>
