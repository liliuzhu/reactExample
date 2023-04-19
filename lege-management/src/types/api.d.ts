// 这个文件专门定义请求参数的类型和相应

interface CaptchaAPIRes {
   msg: string,
   img: string,
   code: number,
   captchaEnabled: boolean,
   uuid: string
}

interface LoginAPIReq {
   username: string,
   password: string,
   code: string,
   uuid?: string,
}

interface LoginAPIRes {
   msg: string,
   code: number,
   token: string
}
