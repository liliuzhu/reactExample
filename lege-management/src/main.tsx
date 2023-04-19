import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"
import App from './App'
// import Router from './router/index-element'
import { BrowserRouter } from 'react-router-dom'
import '@/assets/style/global.scss'
import 'antd/dist/antd.css'

// 状态管理
import { Provider } from "react-redux"
import store from "@/store";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   {/*<Router />*/}
  //    <BrowserRouter>
  //       <App/>
  //    </BrowserRouter>
  // </React.StrictMode>,
  <Provider store={store}>
     <BrowserRouter>
        <App/>
     </BrowserRouter>
  </Provider>
)
