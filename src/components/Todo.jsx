import React, {Component} from "react";

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [
                {"text":"吃饭","done":false},
                {"text":"学习Uniapp","done":false},
                {"text":"学习微信小程序","done":true},
            ],
            value: ""
        }
    }

    onInputChange(text){
        // 设置到自身state属性中去
        this.setState({
            value: text
        })
       
    }

    onAddClick(){
        if(this.state.value.trim() == '') {
            return;
        }

        // 构建一个任务对象
        var item = {
            text: this.state.value,
            done: false
        }

        this.state.todos.push(item);
        // console.log(this.state.todos)
        // 让页面重新渲染调用setState即可
        this.setState({
            value: ''
        })
    }

    onDelTodo(e,index){
        // 阻止冒泡
        e.stopPropagation();
        console.log('onDelTodo')
        this.state.todos.splice(index,1);
        this.setState({})
    }

    onLiClick(index){
        console.log('onLiClick')
        this.state.todos[index].done = !this.state.todos[index].done;
        this.setState({})
    }

    render() {
        // console.log('render')
        let h1style = {
          color: "#61DAFB",
        };
        return (
          <div>
            <h1 style={h1style}>Todo list</h1>
            <div>
              <input  placeholder="add a new todo" 
              onChange={ (e)=>this.onInputChange(e.target.value) } 
              value={this.state.value} />
              <button className="add" onClick={ ()=>this.onAddClick() }>
                Add
              </button>
            </div>
            <ul>
                {
                    this.state.todos.map((v,index)=>{
                        var liClass ='show ' + ( v.done ? ' done-true':'done-false' );
                        return (
                            <li onClick={ ()=>this.onLiClick(index) } key={index} className={ liClass }>
                                <span className="fl">✔</span>
                                <span className="fl">{v.text}</span>
                                <span className="fr del" onClick={ (e)=>this.onDelTodo(e,index) }>
                                ❌
                                </span>
                            </li>
                        )
                    })
                }
                
                
            </ul>

          </div>
        );
    }
}