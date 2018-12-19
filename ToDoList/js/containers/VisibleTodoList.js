/**
 * 释：
 * 以上三个是容器组件，作用是把展示组件连接到 Redux。
 * 总之：只要记住一句话就可以了：UI展示组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { visibilityFilters } from '../global'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityFilters;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case SHOW_ALL:
            return todos;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)