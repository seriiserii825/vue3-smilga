<script setup>
	const props = defineProps({
		label: {
			type: String,
			default: 'Button',
		},
		outline: {
			type: Boolean,
			default: false,
		},
	});
</script>
<template>
	<button :class="['btn', { 'btn--outline': outline }]">{{ label }}</button>
</template>
<style lang="scss" scoped>
	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 2rem;
		font-size: 2rem;
		font-weight: bold;
		color: white;
		background: var(--accent);
    border: 1px solid var(--accent);
		transition: all 0.4s;
		&:hover {
			background: var(--accent-hover);
		}
		&.btn--outline {
			background: transparent;
			color: black;
			border: 1px solid black;
			&:hover {
				color: white;
				background: var(--accent);
				border-color: var(--accent);
			}
		}
	}
</style>
