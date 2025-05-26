import { useState } from 'react'
import '../login.css'
import { useNavigate } from 'react-router-dom'
function Login() {
    const toback = useNavigate()
    const [input2, setInput2] = useState('input')
    function mouse() {
        setInput2('input1')
    }
    return (
        <div>
            <button className='back' onClick={() => toback(-1)}> 返回 </button>
            <div className="login">
                <h3>登录/注册</h3>
                <div className='form'>
                    <input className={input2} type="text" placeholder="你的昵称" onMouseEnter={mouse}></input>
                    <input className={input2} type="text" placeholder="手机号" onMouseEnter={mouse} />
                    <input className={input2} type="text" placeholder="密码" onMouseEnter={mouse} />

                    <button>注册</button>
                </div>
            </div>
        </div>
    )
}
export default Login