// reducer 是用来管理数据的
import handleNum from './index'

const reducer = (state: any = {...handleNum.state}, action: { type:string }) => {
   // 调用dispatch执行这里的代码
 let newState = JSON.parse(JSON.stringify(state))

   // switch (action.type) {
   //    case handleNum.add1:
   //       handleNum.actions[handleNum.add1](newState, action)
   //       break;
   //    case handleNum.add2:
   //       handleNum.actions[handleNum.add2](newState, action)
   //       break;
   //    default:
   //       break;
   // }

   for(let key in handleNum.actions){
      if(action.type === key){
         handleNum.actions[key](newState, action)
      }
   }


   return newState
}
export default reducer
