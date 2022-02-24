import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAction, editAction, toogleAction } from "../redux/action";

export const Todo = ({ elem }) => {
	// console.log('elem',elem);
	// const [isChecked, setIsChecked] = useState(false);
	const [edit, setEdit] = useState(true);
	const [editValue, setEditValue] = useState("");
	const [toogle,setToogle] = useState(false);
	
	const dispatch = useDispatch();
	// const handleChecked = () => {
	// 	setIsChecked(!isChecked);
	// };
	const handleDelete = (e) => {
		let id = e.currentTarget.parentNode.id;
		const action = deleteAction(id);
		dispatch(action);
	};
	const handleEdit = () => {
		setEdit(!edit);
	};
	const handleChangeEdit = (e) => {
		let id = e.currentTarget.parentNode.id;
		setEdit(!edit);
		const action = editAction({ id, editValue });
		dispatch(action);
	};
	const handleToogle = (e) => {
		let id = e.currentTarget.parentNode.id;
		setToogle(!toogle);

		const action = toogleAction({toogle,id})
		dispatch(action)
		// console.log(!toogle);
	}
	return (
		<div id={elem.id} className="alignment">
			{edit ? (
				<>
					{/* <input
						type="checkbox"
						checked={isChecked}
						onChange={handleChecked}
					/> */}
					<Link to={`/newpage/${elem.title}`}>{elem.title}</Link>
					<span>{toogle.toString()}</span>
				</>
			) : (
				<>
					<input
						type="text"
						value={editValue}
						onChange={(e) => setEditValue(e.currentTarget.value)}
					/>
					<button onClick={handleChangeEdit}>EDIT BUTTION</button>
				</>
			)}
			<button onClick={handleEdit}>edit</button>
			<button onClick={handleDelete}>delete</button>
			<button onClick={handleToogle}>TOOGLE STATUS</button>
		</div>
	);
};
