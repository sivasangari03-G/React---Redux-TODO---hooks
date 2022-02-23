import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAction, editAction } from "../redux/action";

export const Todo = ({ elem }) => {
	const [isChecked, setIsChecked] = useState(false);
	const [edit, setEdit] = useState(true);
	const [editValue, setEditValue] = useState("");

	
	const dispatch = useDispatch();
	const handleChecked = () => {
		setIsChecked(!isChecked);
	};
	// console.log(isChecked);
	const handleDelete = (e) => {
		let id = e.currentTarget.parentNode.id;
		// let allelem = all.filter((elem) => {
		// 	return elem.id !== id;
		// });
		// console.log(allelem);
		// console.log(all);
		// const payload = {
		// 	todo: [...allelem]
		// };
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
	return (
		<div id={elem.id}>
			{edit ? (
				<>
					<input
						type="checkbox"
						checked={isChecked}
						onChange={handleChecked}
					/>
					<Link to={`/newpage/${elem.title}`}>{elem.title}</Link>
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
		</div>
	);
};
