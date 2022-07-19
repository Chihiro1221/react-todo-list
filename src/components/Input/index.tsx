import React, { FormEventHandler } from 'react'
import './index.scss'

interface IProps {
  content: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
}
export const Input: React.FC<IProps> = props => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        placeholder="请输入任务"
        className="py-2 w-full border-b-transparnt duration-300 border-b-2 outline-none focus:border-violet-500 focus:border-b-2"
        value={props.content}
        onInput={e => props.onChange((e.target as HTMLInputElement).value)}
      />
      <button className="submit-btn" type="submit" onClick={() => props.onSubmit(props.content.trim())}>
        提交
      </button>
    </form>
  )
}
