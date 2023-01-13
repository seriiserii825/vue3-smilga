<template>
	<div class="menu-filter">
		<h1 class="title">Our menu</h1>
		<div class="menu-filter__buttons">
			<Button
				v-for="(category, index) in categories"
				:key="index"
				class="menu-filter__button"
				@click="handleClick(index)"
				:label="category"
				:outline="current !== index"
			>
				{{ category }}
			</Button>
		</div>
	</div>
</template>
<script setup>
	import { ref } from '@vue/reactivity';
	import Button from '@/components/ui/Button.vue';

	const props = defineProps({
		categories: Array,
	});
	const emits = defineEmits(['filter']);

	const current = ref(0);

	function handleClick(index) {
		current.value = index;
		emits('filter', props.categories[index]);
	}
</script>
