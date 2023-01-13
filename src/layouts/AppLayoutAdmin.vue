<script setup>
	import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger';
	useLifecycleLogger({ name: 'AppLayoutDefault' });
	import MenuDropdown from '@/components/MenuDropdown.vue';
</script>

<template>
	<main class="app-layout-default-main p-2 bg-amber-50">
		<div class="admin">
			<div class="admin__sidebar">
				<h2 class="admin__title">Admin lte</h2>
				<MenuDropdown></MenuDropdown>
			</div>
			<div class="admin__main">
				<slot />
			</div>
		</div>
	</main>
</template>
