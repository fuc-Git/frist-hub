const express =require('express');

const app=express();

app.get('/user',(req,res)=>{
    const params=req.query;
    for(let i in params){
        console.log(`参数:${i} 参数值:${params[i]}`);
    }
    res.send(`<h1>已成功解析GET请求参数</h1>`)
});
app.listen(3000,()=>{
    console.log('启动！');
})
