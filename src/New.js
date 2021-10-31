import React, { useState } from 'react';
import './App.css';

const New = () => {
	const [Tod, setTod] = useState('');
	const [Tods, setTods] = useState([]);

	const handleS = (e) => {
		e.preventDefault();

		if (Tod !== '') {
			setTods([{ id: `${Tod}-${Date.now()}`, Tod }, ...Tods]);
			setTod(' ');
			return;
		}
	};

	const handleD = (id) => {
		const dels = Tods.filter((to) => to.id !== id);
		setTods([...dels]);
	};

	const handleE = (id) => {
		const eds = Tods.find((u) => u.id === id);
		setTod(eds.id);
	};

	return (
		<div className="New">
			<h1>TO DO LIST</h1>
			<form className="TO" onSubmit={handleS}>
				<input
					type="text"
					value={Tod}
					onChange={(e) => setTod(e.target.value)}
				/>
				<button className="MainB" type="submit">
					GO
				</button>
			</form>
			<ul className="Allto">
				{Tods.map((t) => (
					<li className="SingleT" key={t.id}>
						<span className="TEXT">{t.Tod}</span>
						<button onClick={() => handleE(t.id)}>EDIT</button>
						<button onClick={() => handleD(t.id)}>DELETE</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default New;
