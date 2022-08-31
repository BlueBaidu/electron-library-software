const fs = require('fs')

const btn = document.querySelector('button');
fs.writeFile(`input.txt`,`按钮写入的内容是hello word`,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('写入成功');
    }
})

let i = 0
btn.onclick = function(){
    i++;
    fs.writeFile(`input${i}.txt`,`按钮写入的内容是${i}`,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('写入成功');
        }
    })
}