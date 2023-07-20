<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />
<div class="dark:text-white dark:bg-gray-950 w-screen h-screen overflow-hidden">
	<slot />
</div>

<style scoped>
	@font-face {
		font-family: 'Comic Neue';
		src: url('/fonts/ComicNeue-Regular.woff2') format('woff2');
		src: url('/fonts/ComicNeue-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Comic Neue';
		src: url('/fonts/ComicNeue-Bold.woff2') format('woff2');
		src: url('/fonts/ComicNeue-Bold.woff') format('woff');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: 'Inter';
		src: url('/fonts/Inter-Regular.woff2') format('woff2');
		src: url('/fonts/Inter-Regular.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Inter';
		src: url('/fonts/Inter-Medium.woff2') format('woff2');
		src: url('/fonts/Inter-Medium.woff') format('woff');
		font-weight: bold;
		font-style: normal;
	}

	* {
		font-family: 'Inter';
		font-weight: 400;
	}
</style>
