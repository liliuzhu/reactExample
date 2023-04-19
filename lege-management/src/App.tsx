// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Button, Space } from 'antd';
// import { StepBackwardOutlined } from '@ant-design/icons'

// import { Outlet, NavLink, Link } from 'react-router-dom' // element 用法
import {NavLink, Link, Navigate, useRoutes, useLocation, useNavigate} from 'react-router-dom' // 配置路由用法
import  routes from './router'
import {message} from "antd";
import {useEffect} from "react";

function ToLogin () {
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo('/login');
    message.warning('您还没有登录，请登录后再访问！')
  }, [])
  return <></>
}

function ToPage1 () {
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo('/page1');
    message.warning('您已登录过')
  }, [])
  return <></>
}

function BeforeRouterEnter(){
  const Outlet = useRoutes(routes);
  const location = useLocation()
  // 如果访问的是登录页，并且有token，跳转到首页
  const token = localStorage.getItem('token')
  if(location.pathname === '/login' && token) {
    // return <ToPage1/>
    setTimeout(()=>{
      message.warning('您已登录过')
    })
    return <Navigate to='/page1'/>
  }
  // 如果访问的不是登录页，并且美有token，跳转到登录页
  if(location.pathname !== '/login' && !token) {
    setTimeout(()=>{
      message.warning('您还没有登录，请登录后再访问！')
    })
    return <Navigate to='/login'/>
  }

  return Outlet
}

function App() {
  // const Outlet = useRoutes(routes);

  return (
    <div className="App">
      {/*顶级组件*/}
      {/* <StepBackwardOutlined />*/}
      {/* <Space wrap>*/}
      {/*    <Button type="primary">Primary Button</Button>*/}
      {/*    <Button>Default Button</Button>*/}
      {/*    <Button type="dashed">Dashed Button</Button>*/}
      {/*    <Button type="text">Text Button</Button>*/}
      {/*    <Button type="link">Link Button</Button>*/}
      {/* </Space>*/}
      {/* Outlet 占位符组件，类似与 router-view*/}
      {/* <NavLink to='/home'>home</NavLink>*/}
      {/* &emsp;*/}
      {/* <NavLink to='/about'>about</NavLink>*/}
      {/* <br/>*/}

      {/* <Link to='/home'>home</Link>*/}
      {/* &emsp;*/}
      {/* <Link to='/about'>about</Link>*/}

      {/* <br/>*/}
      {/* <br/>*/}
      {/* <br/>*/}
       {/*元素路由*/}
       {/*<Outlet></Outlet>*/}
       {/*配置路由*/}
       <BeforeRouterEnter/>
      {/*{Outlet}*/}
      {/*<div>122</div>*/}
    </div>
  )
}

export default App
