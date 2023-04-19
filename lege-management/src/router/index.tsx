import React, { lazy, Suspense } from 'react'
// import Home from '../views/Home'
// import About from '../views/About'
const Home = lazy(()=>import('../views/Home'))
const About = lazy(()=>import('../views/About'))
const Page1 = lazy(()=>import('../views/Page1'))
const Page2 = lazy(()=>import('../views/Page2'))
import { Navigate } from 'react-router-dom'
import Page501 from "@/views/Page501";
import Login from "@/views/Login";
const Page301 = lazy(()=> import("@/views/Page301")) ;
// 懒加载模式的组件的写法，外面需要套一层loading的提示加载组件

const withLoadingComponent  = (comp:JSX.Element) =>(
  <Suspense>
     { comp }
  </Suspense>
)
const routes = [
   {
      path: '/',
      element: <Navigate to='/page1'/>
   },
   {
      path: '/',
      element: withLoadingComponent(<Home/>),
      children: [
         {
            path: '/page1',
            element: withLoadingComponent(<Page1/>)
         },
         {
            path: '/page2',
            element: withLoadingComponent(<Page2/>)
         },
         {
            path: '/page3/page301',
            element: withLoadingComponent(<Page301/>)
         },
         {
            path: '/user/Alex/page5-1',
            element: withLoadingComponent(<Page501/>)
         },
      ]
   },
   {
      path: '/login',
      element: <Login/>
   },
   {
      path: '*',
      element: <Navigate to='/page1'/>
   },
   // {
   //    path: '/home',
   //    element: withLoadingComponent(<Home/>)
   // },
   // {
   //    path: '/about',
   //    element: // withLoadingComponent(<About/>)
   //      <React.Suspense fallback={<div>loading...</div>}>
   //         <About/>
   //      </React.Suspense>
   // },
]

export default routes
