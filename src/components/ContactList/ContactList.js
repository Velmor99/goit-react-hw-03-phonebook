import React from 'react';

export default function ContactList({ filteredArr, click }) {
	return (
		<ul>
			{filteredArr.map((item) => {
				return (
					<li key={item.id}>
						{item.name}: {item.number}
						<button onClick={() => click(item.id)}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
}
