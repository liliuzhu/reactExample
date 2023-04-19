// reducer 是用来管理数据的
import handleArr from './index'
const reducer = (state: any = { ...handleArr.state }, action: { type:string }) => {
   // 调用dispatch执行这里的代码
 let newState = JSON.parse(JSON.stringify(state))

   // switch (action.type) {
   //    case handleArr.sarrrpush:
   //       handleArr.actions[handleArr.sarrrpush](newState, action)
   //       break;
   //    default:
   //       break;
   // }

   for(let key in handleArr.actions){
      if(action.type === key){
         handleArr.actions[key](newState, action)
      }
   }


   return newState
}
export default reducer
