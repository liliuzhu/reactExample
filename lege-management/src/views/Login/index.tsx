import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './login.module.scss'
import './login.less'
import initLoginBg from './init'
import { Button, Input, Space, message } from 'antd';
import {CaptchaAPI, LoginAPI} from '@/request/api'
import {useNavigate} from "react-router-dom";
const Login: React.FC = () => {
   useEffect(()=>{
      initLoginBg()
      // window.onresize = function (){
      //    initLoginBg()
      // }
      getCapthaImg()
   },[])

   const [usernameVal, setUsernameVal] = useState("qdtest1")
   const [passwordVal, setPasswordVal] = useState("123456")
   const [captchaVal, setCaptchaVal] = useState("888888")
   const [uuid, setUuid] = useState("")
   const [img, setImg] = useState("")
   // const [captchaVal, setCaptchaVal] = useState("888888")
   const userNameChange = (e:ChangeEvent<HTMLInputElement>) =>{setUsernameVal(e.target.value.trim())}
   const passwordChange = (e:ChangeEvent<HTMLInputElement>) =>{setPasswordVal(e.target.value.trim())}
   const captchaChange = (e:ChangeEvent<HTMLInputElement>) =>{setCaptchaVal(e.target.value.trim())}

   const navigateTo = useNavigate()

   const goLogin = async ()=>{
      console.log (usernameVal, passwordVal, captchaVal)
      if(!usernameVal || !passwordVal || !captchaVal){
         message.warn('请输入完整信息')
         return
      }

      let res = await LoginAPI({
         username: usernameVal,
         password: passwordVal,
         code:captchaVal,
         uuid: uuid
      })
      if(res.code === 200){
         message.success('登录成功')
         navigateTo('/page1', { replace: true })

         localStorage.setItem("token", res.token)
      } else {
         message.error(res.msg)
      }

   }
   const getCapthaImg = async ()=>{
      const res = await CaptchaAPI()
      if(res.captchaEnabled){
         setUuid(res.uuid)
         setImg('data:image/png;base64,'+ res.img)
      }
   }
   return (
     <div className={styles.loginPage}>
        <canvas id="canvas" style={{ display: "block" }}></canvas>
        <div className={styles.loginBox+ " loginbox" }>
           <div className={styles.title}>
              <h1>通用后台系统</h1>
              <p>Strive Everyday</p>
           </div>
           {/*表单内容*/}
           <div className="form">
              <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                 <Input placeholder="用户名" value={usernameVal} onChange={userNameChange}/>
                 <Input.Password value={passwordVal} placeholder="密码" onChange={passwordChange}/>
                 <div className="captchaBox">
                    <Input value={captchaVal} placeholder="验证码" onChange={captchaChange}/>
                    <div className="captchaImg" onClick={getCapthaImg}>
                       <img height="38" src={img} alt="" />
                    </div>
                 </div>
                 <Button type="primary" block onClick={goLogin}>登录</Button>
              </Space>
           </div>
        </div>
     </div>
   );
};

export default Login;
