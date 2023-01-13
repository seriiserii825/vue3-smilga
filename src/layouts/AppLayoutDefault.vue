<template>
	<header class="main-header">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/menu">Menu</RouterLink>
			<RouterLink to="/admin">Admin</RouterLink>
		</nav>
	</header>
	<div class="wrapper">
		<div>AppLayoutDefault</div>
		<slot />
	</div>
</template>
