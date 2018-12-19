/**
 * 释：
 * combineReducers()所做的只是生成一个函数，这个函数来调用你的一系列 reducer，
 * 每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
 * 表面上看上去combineReducers()的作用就是把多个reducer合成一个的reducer。
 */
 import { combineReducers } from 'redux'
 import todos from './todos'
 import visibilityFilter from './visibilityFilter'

 export default combineReducers({
     todos,
     visibilityFilter
 })