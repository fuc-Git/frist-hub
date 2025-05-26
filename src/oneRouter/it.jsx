import '../it.css'
import { NavLink, Outlet } from 'react-router-dom'
function It() {
    return (
        <div className='it'>
            <div className='link'>
                <NavLink className='linkson' to="/it/java">后端</NavLink>
                <NavLink className='linkson' to="/it/web">前端</NavLink>
                <NavLink className='linkson' to="/it/andriod">Andriod</NavLink>
                <NavLink className='linkson' to="/it/ios">IOS</NavLink>
                <NavLink className='linkson' to="/it/ai">人工智能</NavLink>
                <NavLink className='linkson' to="/it/mysql">数据库</NavLink>
                <NavLink className='linkson' to="/it/reduce">程序开发</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default It