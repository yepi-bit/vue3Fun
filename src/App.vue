<template>
	<div>
		<router-link to="/">
			<el-button type="danger" ghost>listLength</el-button>
		</router-link>
	</div>
	<div>
		<router-view />
	</div>
</template>
<script setup>

</script>
<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
