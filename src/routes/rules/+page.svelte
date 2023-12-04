<script>
    import { onMount } from 'svelte';
    // import marked from 'marked';
  let marked

    let markdownContent = '';
    let htmlContent = '';
  
    onMount(async () => {
        marked = (await import('marked')).default;

        const response = await fetch('/doc/bingo.md');
      markdownContent = await response.text();
     htmlContent = await marked.parse(markdownContent);
    console.log('hello');
    });
  </script>
  
<div>hello</div>
  <div>{@html htmlContent}content</div>
