<template>
	<div class="menu-item">
		<div class="menu-item__img">
			<span class="menu-item__category">{{ item.category }}</span>
			<img :src="`/images/menu/${item.img}`" alt="" />
		</div>
		<div class="menu-item__content">
			<h3 class="menu-item__title">{{ item.title }}</h3>
			<div class="menu-item__text" v-html="item.desc"></div>
      <hr>
			<div class="menu-item__price">Price: <strong>{{ item.price }}$</strong></div>
		</div>
	</div>
</template>
<script setup>
	const props = defineProps({
		item: Object,
	});
</script>
