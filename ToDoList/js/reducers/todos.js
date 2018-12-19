import {
    ADD_TODO,
    TOGGLE_TODO,
} from '../actions/types'

const todos = (state = [], action) => {
    let {id, text, type} = action;
    switch (type) {
        case ADD_TODO: // 添加列表数据
            return [
                ...state,
                {
                    id: id,
                    text:text,
                    completed: false
                }
            ];
        case TOGGLE_TODO: // 文字添加/取消中划线
            return state.map(todo => (todo.id === id) ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
};

export default todos;