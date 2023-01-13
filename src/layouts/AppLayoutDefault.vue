<script setup>
	import { useLifecycleLogger } from '@/common/hooks/lifecycleLogger';
	useLifecycleLogger({ name: 'AppLayoutDefault' });
</script>

<template>
	<header class="main-header">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/menu">Menu</RouterLink>
			<RouterLink to="/ui">UI</RouterLink>
		</nav>
	</header>
	<div class="wrapper">
		<div>AppLayoutDefault</div>
		<slot />
	</div>
</template>
