import React, { Component } from 'react'
import {
    View
} from 'react-native'
/**
 * 释：
 * Group.js 是把所有的关联后的组件串起来，形成一个完整的界面。
 */
import AddTodo from '../containers/AddTodo'
import Filters from '../components/Filters'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class Group extends Component {
    render() {
        return (
            <View style={{paddingHorizontal: 20, paddingVertical: 44}}>
                <AddTodo/>
                <Filters/>
                <VisibleTodoList/>
            </View>
        );
    }
}