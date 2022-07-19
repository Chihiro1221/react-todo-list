import React from 'react'
import { Todo } from 'types/todo'
import './index.scss'

interface IProps {
  item: Todo
  onRemove: (todo: Todo) => void
  style: React.CSSProperties
}
export const TodoItem: React.FC<IProps> = props => {
  return (
    <div className="todo-item" style={{ ...props.style }}>
      <span>{props.item.content}</span>
      <span className="close" onClick={() => props.onRemove(props.item)}>
        ×
      </span>
    </div>
  )
}
