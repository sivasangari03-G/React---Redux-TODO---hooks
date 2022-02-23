import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionType";

export const todoAction = (payload) => {
	return {
		type: ADD_TODO,
		payload,
	};
};


export const deleteAction = (payload) => {
	return {
		type: DELETE_TODO,
		payload,
	};
};

export const editAction = (payload) => {
	return {
		type: EDIT_TODO,
		payload,
	};
};

