<script setup>
	import SectionHeader from '@/components/globals/SectionHeader.vue';
	import ColorsItem from '@/components/globals/ColorsItem.vue';
</script>

<template>
	<div class="colors">
		<SectionHeader title="Colors" />
		<ul class="colors__list">
			<ColorsItem color="accent" />
			<ColorsItem color="accent-hover" />
			<ColorsItem color="contrast" />
			<ColorsItem color="contrast-hover" />
			<ColorsItem color="dark-bg" />
			<ColorsItem color="dark-bg-darken" />
		</ul>
	</div>
</template>
