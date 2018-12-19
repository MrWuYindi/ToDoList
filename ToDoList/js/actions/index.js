/**
 * 释：
 * Action 创建函数
 * Action 创建函数 就是生成 action 的方法。“action” 和 “action 创建函数” 
 * 这两个概念很容易混在一起，使用时最好注意区分。
 * 在 Redux 中的 action 创建函数只是简单的返回一个 action:
 */

import {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
} from './types'
let nextTodoId = 0;

// 添加列表数据
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId ++,
    text
});

// 筛选
export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

// 文字添加/取消中划线
export const toggleToDo = id => ({
    type: TOGGLE_TODO,
    id
});
