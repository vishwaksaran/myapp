
import React, { useState } from 'react';
import './App.css'


const New = () => {

    const [Tod, setTod] = useState("");
    const [Tods, setTods] = useState([]);
    const [isEdit, setIsEdit] = useState(0)

    const handleS = (e) => {
        e.preventDefault();

		if(isEdit){
			const hi = Tods.find((i)=>i.id === isEdit)
			const update = Tods.map((e)=> e.id === isEdit ? ({id:e.id,Tod}) :({id:e.id, Tod:e.Tod}));
			setTods([...update])
			setIsEdit(0);
			setTod("")
			return;
		}
        if (Tod !== '') {
            setTods([{ id: `${Tod}-${Date.now()}`, Tod }, ...Tods]);
            setTod(" ");
           return;
        }
        // if (Tod !== ""){
        //     setTods([{ id: `${Tod}-${Date.now()}`, Tod }, ...Tods]);
        //     setTod(" ");
        //     return;
        // }
        
    };

    const handleD = (id) => {
        const dels = Tods.filter((to) => to.id !== id);
        setTods([...dels]);
    };


    const handleE = (id) => {
        const eds = Tods.find((u) => u.id === id);
        //setIsEdit(true)
        // setTods([{ id: `${Tod}-${Date.now()}`, Tod }, ...Tods]);
        setTod(eds.Tod)
		setIsEdit(eds.id)
        // setIsEdit(false)
        return;
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
					{isEdit?"EDIT":"GO"}
				</button>
			</form>
			<ul className="Allto">
				{Tods.map((t) => (
					<li className="SingleT" >
						<span className="TEXT" key={t.id}>{t.Tod}</span>
						<button onClick={() => handleE(t.id)}>EDIT</button>
						<button onClick={() => handleD(t.id)}>DELETE</button>
						<button></button>
					</li>
				))}
			</ul>
		</div>
	);
};

{/* <div className="New">
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
}; */}


export default New;
