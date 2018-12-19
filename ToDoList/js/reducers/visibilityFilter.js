/**
 * 释：
 * reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state
 * （上面两个文件可以看着两个reducer）。
 * 
 * 注意：
 * Redux 首次执行时，state 为 undefined，此时需要设置返回应用的初始 state。
 * 每个 reducer 只负责管理全局 state 中它负责的一部分。
 * 每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。
 */

import { SET_VISIBILITY_FILTER } from '../actions/types'
import { visibilityFilters } from '../global'

const { SHOW_ALL } = visibilityFilters;
const visibilityFilter = (state = SHOW_ALL, action) => {
    let {type, filter} = action;
    switch (type) {
        case SET_VISIBILITY_FILTER:
            return filter;
        default:
            return state
    }
};

export default visibilityFilter;