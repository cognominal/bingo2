<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { page } from "$app/stores";

};

</script>

<div class="app">
	<Header />
	{#if page.data.session} {#if $page.data.session.user?.image}
	<span
	  style="background-image: url('{$page.data.session.user.image}')"
	  class="avatar"
	/>
	{:else}
	<span class="notSignedInText"> You are not signed in </span>
	
	<a href="/auth/signin" class="buttonPrimary" data-sveltekit-preload-data="off">
	  Sign in
	</a>
	{/if}
	
	<span>
	  <small>Signed in as</small>
	  <br />
	  <strong>
		{$page.data.session.user?.email ?? $page.data.session.user?.name}
	  </strong>
	</span>
	
	<a href="/auth/signout" class="button" data-sveltekit-preload-data="off">
	  Sign out
	</a>
	{/if} 
	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
