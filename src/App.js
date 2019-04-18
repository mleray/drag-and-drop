import React from 'react';
import dnd from './helpers/dragAndDrop';

const App = () => (
	<div>
		<p id="draggable-p" onDragStart={event => dnd.drag(event)} draggable="true">
			Drag me
		</p>
		<div
			style={{ width: 100, height: 100, border: 'thin solid black' }}
			onDrop={event => dnd.drop(event)}
			onDragOver={event => dnd.allowDrop(event)}
		/>
	</div>
);

export default App;
