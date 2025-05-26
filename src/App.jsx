import { NavLink, useRoutes, useNavigate } from 'react-router-dom'
import route from './routers'
import './App.css'
function App() {
  const go = useNavigate()
  function gopath(path) {
    go(path)
  }
  const go2 = useNavigate()
  function gopath2(path1) {
    go2(path1)
  }
  return (
    <div>
      <div className="top">
        <div className='router'>
          <div onClick={() => gopath('/home')} className="book">简书</div>
          <NavLink to='/home'>首页</NavLink>
          <NavLink to='/install'>下载App</NavLink>
          <NavLink to='/vip'>会员</NavLink>
          <NavLink to='/it'>IT技术</NavLink>
        </div>

        <div>
          <input type="text" className='input' placeholder='搜索' />
        </div>

        <div className='top_r'>
          <div><span>Aa</span></div>
          <div><span>登录</span></div>
          <div><div className='button' onClick={() => gopath2('/login')}>注册</div></div>
          <div><a href='https://www.jianshu.com/writer#/' className='button1'>写文章</a></div>
        </div>
      </div>
      <hr />
      <div className='show'>
        {useRoutes(route)}
      </div>


    </div>
  )
}
export default App