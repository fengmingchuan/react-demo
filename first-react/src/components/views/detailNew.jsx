import React, { Component } from 'react'
export default class detail  extends Component {
    constructor(props) {
        super(props)
        this.data = props.location.state.data; //获取父组件传递过来的数据
    }
    render() {
        return (
            <div>
              <h2>    {this.data.title}</h2>    

            </div>

        )
    }
}