<script setup>
	import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger';
	useLifecycleLogger({ name: 'AppLayoutDefault' });
</script>

<template>
	<main class="app-layout-default-main p-2 bg-amber-50">
		<div>AppLayoutDefault</div>
		<slot />
	</main>
</template>