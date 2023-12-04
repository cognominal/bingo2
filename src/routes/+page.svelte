<script>
	import { SplitPane } from '@rich_harris/svelte-split-pane';
  

	const dividerColor = 'black';
	const dividerThickness = '20px';
  </script>
  
  <SplitPane
	type="horizontal"
	id="main"
	min="100px"
	max="-100px"
	pos="50%"
	priority="min"
	--color={dividerColor}
	--thickness={dividerThickness}
  >
	<section slot="a">this is on the left</section>
	<section slot="b">this is on the right</section>
  </SplitPane>