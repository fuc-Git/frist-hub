import '../install.css'
import { useNavigate } from 'react-router-dom'
function Install() {
    const letback = useNavigate()
    return (
        <div>
            <div className="imgbox">
                <img onClick={() => letback(-1)} src="../src/assets/install1.png" alt="" />
                <img src="../src/assets/install2.png" alt="" />
                <img src="../src/assets/install3.png" alt="" />
                <img src="../src/assets/install4.png" alt="" />
                <img src="../src/assets/install5.png" alt="" />
            </div>
        </div>
    )
}
export default Install