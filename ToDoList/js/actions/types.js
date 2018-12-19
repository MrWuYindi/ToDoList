/**
 * 释：
 * action定义
 * 为什么我要把用户的action(行为)定义单独抽出来写一个type.js？
 * - 方便状态管理。
 * - 复用性。
 */

// 添加列表数据
export const ADD_TODO = 'ADD_TODO';
// 筛选
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// 文字添加/取消中划线
export const TOGGLE_TODO = 'TOGGLE_TODO';