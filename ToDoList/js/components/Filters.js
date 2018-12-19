/**
 * 释：
 * 以上四个文件是自定义的四个UI展示组件，这些组件只定义外观并不关心数据来源和如何改变。
 * 传入什么就渲染什么。如果你把代码从 Redux 迁移到别的架构，这些组件可以不做任何改动直接使用。
 * 它们并不依赖于 Redux。
 */
import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import FilterLink from '../containers/FilterLink'
import { visibilityFilters } from '../global'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityFilters;

export default class Filters extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <FilterLink filter={SHOW_ALL} />
                <FilterLink filter={SHOW_COMPLETED} />
                <FilterLink filter={SHOW_ACTIVE} />
            </View>
        )
    }
}