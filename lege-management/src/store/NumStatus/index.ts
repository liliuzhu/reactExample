interface Action { type:string, val:number }
export default {
   state:{
      num:20,
   },
   actions:{
      add1(newState:any, action:Action){
         newState.num++
      },
      add2(newState:any, action:Action){
         newState.num+=action.val
      }
   },
   asyncAction: {
      asyncAdd1(dispatch:Function){
         setTimeout(()=>{
            dispatch({ type: "add1" })
         }, 1000)
      }
   }
}
