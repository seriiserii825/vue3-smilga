<template>
	<header class="main-header">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/menu">Menu</RouterLink>
      <RouterLink to="/lorem-ipsum">Lorem ipsum</RouterLink>
      <RouterLink to="/color-generator">Color generator</RouterLink>
      <RouterLink to="/grocery-bud">Grocery Bud</RouterLink>
			<RouterLink to="/admin">Admin</RouterLink>
		</nav>
	</header>
	<div class="wrapper">
		<slot />
	</div>
</template>
