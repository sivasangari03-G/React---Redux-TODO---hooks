import {
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO,
	TOOGLE_TODO,
} from "./actionType";

const initState = {
	todo: [],
};

export const reducer = (state = initState, { type, payload }) => {
	if (type === ADD_TODO) {
		return {
			...state,
			todo: [...state.todo, payload],
			// count: state.todo.length + 1,
		};
	}
	if (type === DELETE_TODO) {
		return {
			...state,
			todo: state.todo.filter((elem) => {
				return elem.id !== payload;
			}),
			// count: state.todo.length - 1,
		};
	}
	if (type === EDIT_TODO) {
		// console.log("payload", payload); //id and value
		const index = state.todo.findIndex((elem) => elem.id === payload.id);
		state.todo[index].title = payload.editValue;
		return {
			...state,
			// count: state.todo.length,
			todo: [...state.todo],
		};
	}

	if (type === TOOGLE_TODO) {
		// console.log("payloadtoogle", payload);
		const toogle = (!payload.toogle)
		const index = state.todo.findIndex((elem) => elem.id === payload.id);
		state.todo[index].status = toogle;
		// console.log(state.todo);
		return {
			...state,
			todo: [...state.todo],
		};
	}
	return state;
};
