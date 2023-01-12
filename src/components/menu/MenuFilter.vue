<template>
	<div class="menu-filter">
		<h1 class="title">Our menu</h1>
		<div class="menu-filter__buttons">
			<button
				v-for="(item, index) in categories"
				:key="index"
				class="menu-filter__button btn"
				:class="{ 'btn--empty': current !== index }"
				@click="handleClick(index)"
			>
				{{ item }}
			</button>
		</div>
	</div>
</template>
<script setup>
	import { ref } from '@vue/reactivity';

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
