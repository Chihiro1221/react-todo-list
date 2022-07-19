import { message } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/tailwindcss.scss'

message.config({
  maxCount: 2,
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
