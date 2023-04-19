import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import { BrowserRouter as $router ,Routes, Route, Navigate } from 'react-router-dom'
// 两种路由模式的组件 ： BrowserRouter (History模式) HashRouter (Hash模式)

const baseRouter = ()=>(
  <$router>
     <Routes>
        <Route path='/' element={<App/>}>
           <Route path='/' element={<Navigate to='/home'/>}></Route>
           <Route path='home' element={<Home/>}></Route>
           <Route path='about' element={<About/>}></Route>
        </Route>
     </Routes>
  </$router>
)

export default baseRouter
