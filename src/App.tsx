import { Todo } from '#/todo'
import { message } from 'antd'
import { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.scss'
import { Input } from './components/Input'
import { TodoItem } from './components/TodoItem'

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(JSON.parse(localStorage.getItem('heart-todo-list') || '[]'))
  const [content, setContent] = useState('')
  // 过渡的持续时间
  const duration = {
    appear: 100,
    enter: 500,
    exit: 500,
  }

  // 删除任务
  const removeTodo = (item: Todo) => {
    setTodoList(() => {
      const filterTodos = todoList.filter(todo => todo.content !== item.content)
      localStorage.setItem('heart-todo-list', JSON.stringify(filterTodos))
      return filterTodos
    })
  }

  // 创建任务
  const handleSubmit = (value: string) => {
    if (!value) {
      return message.warning('请输入内容！')
    }
    if (todoList.some(todo => todo.content === value)) {
      return message.warning('任务已存在！')
    }
    setTodoList(() => {
      const newValue = todoList.slice(0)
      newValue.unshift({ content: value, done: false })
      localStorage.setItem('heart-todo-list', JSON.stringify(newValue))
      return newValue
    })
    setContent('')
  }

  return (
    <div className="App">
      <div className="todo-list-container">
        <Input content={content} onChange={setContent} onSubmit={handleSubmit} />
        <TransitionGroup className="todo-list">
          {todoList.map((item, index) => (
            <CSSTransition appear classNames="fade-in" timeout={duration} key={item.content}>
              {state => <TodoItem style={{ transition: `all ${index / 2}s` }} item={item} onRemove={removeTodo} />}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default App
