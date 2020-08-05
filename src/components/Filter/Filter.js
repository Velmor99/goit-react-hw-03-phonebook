import React from 'react';

export default function Filter({ value, onChangeFilter }) {
	return (
		<label>
			Find contacts by name
			<br />
			<input type="text" value={value} onChange={(e) => onChangeFilter(e.target.value)} />
		</label>
	);
}
