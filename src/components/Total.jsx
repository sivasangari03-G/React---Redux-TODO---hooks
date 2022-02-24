import React from "react";
import { useSelector } from "react-redux";

export const Total = () => {
	const todo = useSelector((state) => state.todo);
	let counting = 0;
	todo.forEach((elem) => {
		if (elem.status === false) {
			counting = counting + 1;
		}
	});
	return (
		<div>
			<h1>Pending Task: {counting}</h1>
		</div>
	);
};
