import {createStore} from 'redux';

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'RND':
			return state + action.value;
		case 'DEC':
			return state - 1;
		default:
			return state;
	}
}

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', value});

const store = createStore(reducer);

document.getElementById("inc").addEventListener("click", () => {
	store.dispatch(inc());
});
document.getElementById("dec").addEventListener("click", () => {
	store.dispatch(dec());
});
document.getElementById("rnd").addEventListener("click", () => {
	const value = Math.floor(Math.random() * 10);
	store.dispatch(rnd(value));
});

const update = () => {
	document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

// let state = reducer(undefined, {})

// console.log(state);
// state = reducer(state, {type: 'INC'})
// console.log(state);
