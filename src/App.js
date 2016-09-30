import React, { Component } from 'react';
import './App.css';
import ReactDOM  from 'react-dom';
const Data = [
     {id:1, text: 'first task', next: 'тест'},
    {id:2, text: 'second task', next: 'текст'},
    {id:3, text: 'third task', next: 'тект'},
];



const TodoList = React.createClass ({

    render: function () {

          const list = Data.map(function (d) {
                return ( <Task task={d} key={d.id}/> )
             } );

        return (
            <div>
            {list}
            </div>
        );
    }


});
const Task = ({ task }) => (
    <div><b>{task.id}</b>: {task.text}</div>
);

const TodoHeader = React.createClass ({
  render: function () {

    return (
        <div className="Todo-class">
          <h1>Я ЗАГОЛОВОК</h1>
        </div>
          );

  }
});
const TodoForm = React.createClass ({
  render: function () {
    return (
    <form>
      <input type='text' value={''}/>
      <input type="submit" value={'ok'}/>
    </form>
    );
  }
});
const Add = React.createClass ({
    componentDidMount: function () {
        ReactDOM.findDOMNode(this.refs.id).focus();
    },
    onBtnClickHandler: function (e) {
        e.preventDefault();
    },
    render: function () {
        return (
            <form >
                <input type="text"
                    defaultValue=''
                    placeholder="ID"
                    ref = 'id'
                />
                <textarea
                defaultValue=''
                placeholder="Задача"
                ref='text'
                >
                </textarea>
                <button
                onClick={this.onBtnClickHandler}
                ref='alertButton'>
                    Отправить
                </button>
            </form>
        );
    }
});

const TestList = React.createClass ({
    getInitialState: function () {
        return {
            visible: false
        }
    },
    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({visible:true});
    },
    render: function () {
        let visible = this.state.visible;
        let template = '';
        if (Data.length > 0) {
             template = this.props.data.map(function (task, id) {
                return (
                    <div key={id}>
                        <p><b className="news__author">{task.id}</b>:{task.text} </p>
                        <a href="#" >Подробнее</a>
                        <p className={'news__big-text ' + (visible ? '': 'none')}>{task.next}</p>
                    </div>
                )

            })


        } else { template = <p>Задач нет</p>}

        return (

            <div>
                <b className={Data.length>0 ? '': 'none'}>Всего задач {Data.length}</b>
                {template}
                </div>
        )

    }
})


class App extends Component {

  render() {
    return (
     <div className="TodoBox">
      <TodoHeader/>
      <TodoForm />
         <div className="test-input">

             </div>
         <TestList data={Data}/>
        <Add/>
     </div>
    );
  }
}

export default App;
