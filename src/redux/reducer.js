import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionType";

const initState = {
	todo: [],
	count: 0,
};

export const reducer = (state = initState, { type, payload }) => {
	if (type === ADD_TODO) {
		return {
			...state,
			todo: [...state.todo, payload],
			count: state.todo.length + 1,
		};
	}
	if (type === DELETE_TODO) {
		return {
			...state,
			todo: state.todo.filter((elem) => {
				return elem.id !== payload;
			}),
			count: state.todo.length - 1,
		};
	}
	if (type === EDIT_TODO) {
		console.log("payload", payload); //id and value
		const index = state.todo.findIndex((elem) => elem.id === payload.id);
		state.todo[index].title = payload.editValue;
        return {
            ...state,
			count: state.todo.length,
			todo: [...state.todo],
		};
	}

	return state;
};
