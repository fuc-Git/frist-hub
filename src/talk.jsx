import { useState } from "react"
import './talk.css'
function Talk() {
    const [list, setList] = useState([{ id: 1, name: '而广泛认同和', sayname: '我也觉得' },
    { id: 2, name: '发给对方的', sayname: '还行吧，偶尔看看就好' },
    { id: 3, name: '大概分为', sayname: '省地方公共投入' }]
    )
    function del(id) {
        const newlist = list.filter(item => item.id != id)
        setList(newlist)
    }
    const [subname, setSn] = useState('')
    const [subsay, setSubsay] = useState('')
    function sub() {
        const list1 = [...list]
        list1.unshift({ id: +new Date(), name: subname, sayname: subsay })
        console.log(list1);
        setList(list1)
    }
    return (
        <div>
            <h3>评论</h3>
            <input value={subname} type="text" onChange={e => setSn(e.target.value)} placeholder="您的昵称" /><br />
            <input value={subsay} type="text" onChange={e => setSubsay(e.target.value)} placeholder="请发表文明用语" />
            <button onClick={sub}>发表</button>
            <hr />

            <ul className="ul">
                {
                    list.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <div className="div">
                                    <span>昵称:{item.name}</span>
                                    <button onClick={() => del(item.id)}>删除</button>
                                </div>

                                <div>{item.sayname}</div>

                            </li>
                        )

                    })
                }
            </ul>

        </div>
    )
}
export default Talk