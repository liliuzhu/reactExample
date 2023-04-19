// 【重点】类型声明文件不要直接使用 import store from "@/store";
// 而是使用import("@/store") 这种也发
// TS 中提供了ReturnType，用来获取函数类型的返回值
type RootState = ReturnType<typeof import("@/store").getState>
interface Window{
   __REDUX_DEVTOOLS_EXTENSION__:function,
   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function
}
