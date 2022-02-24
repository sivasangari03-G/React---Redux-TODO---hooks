import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../redux/action";
import { v4 as uuid } from "uuid";
import { TodoList } from "./TodoList";
import { Total } from "./Total";

export const Home = () => {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();
	const handleAdd = () => {
		const payload = {
			title: value,
			status: false,
			id: uuid(),
		};
		const action = todoAction(payload);
        dispatch(action);
        setValue('')
	};
	return (
		<>
			<div>
				<Total />
				<input
					type="text"
					placeholder="enter value"
					value={value}
					onChange={(e) => setValue(e.currentTarget.value)}
				/>
				<button onClick={handleAdd}>ADD</button>
			</div>

            <TodoList />
        </>
	);
};
