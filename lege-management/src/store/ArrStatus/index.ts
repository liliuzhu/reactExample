interface Action { type:string, val:number }
export default {
   state:{
      sarr:[23,30],
   },
   actions:{
      sarrrpush(newState:any, action:Action){
         newState.sarr.push(action.val)
      },
   },
   sarrrpush: 'sarrrpush'
}
