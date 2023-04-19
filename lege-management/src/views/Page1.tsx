import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import numStatus from '@/store/NumStatus'

const Page1 = () => {
   // 对num的操作
   // 通过useSelector获取仓库数据
   const { num } = useSelector((state:RootState)=> state.NumStatus)
   const { sarr } = useSelector((state:RootState)=> state.ArrStatus)
   // 通过useDispatch修改仓库数据
   const dispatch = useDispatch()
   const changeNum = ()=>{
      // dispatch({type:"字符串(认为是一个记号)",val:3})   type是固定的  val是自定义的
      // dispatch({type:"add1"})
      dispatch({type:"add2",val:100})   // 触发了reducer函数的执行
   }
   const changeNumAsync = () =>{
      // setTimeout(()=>{
      //    dispatch({type:"add1"})
      // }, 1000)
      // 异步写法， - redux-thunk的用法， 基本格式
      // dispatch((dis:Function)=>{
      //    setTimeout(()=>{
      //       dis({type:"add1"})
      //    }, 1000)
      // })


      // 优化异步写法
      dispatch(numStatus.asyncAction.asyncAdd1)
   }
   const changeArr = () => {
      dispatch({type:"sarrrpush",val:100})   // 触发了r
   }
   return (
     <div>
        {num}
        <button onClick={changeNum}>同步按钮</button>
        <button onClick={changeNumAsync}>异步按钮</button>
        <br/>
        {sarr}
        <button onClick={changeArr}>按钮</button>
     </div>
   );
};

export default Page1;
