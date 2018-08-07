<template>
	<div id="app">
		<transition name="router-anim" enter-active-class="animated customSpeed fadeInRight">
			<router-view/>
		</transition>
	</div>
</template>

<script>

export default {
	components: {
  	}
}

</script>

<style>
.animated.customSpeed {
  animation-duration: 250ms;
}

</style>