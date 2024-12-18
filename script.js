function AddNum(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById('Result')
    Res=num1+num2
    h1.innerText= "Result :" +Res
}
function SubNum(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    let h1=document.getElementById('Result')
    Res=num1-num2
    h1.innerText= "Result :" +Res
}
function MulNum(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    let h1=document.getElementById('Result')
    Res=num1*num2
    h1.innerText= "Result :" +Res
}
function DivNum(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    let h1=document.getElementById('Result')
    Res=num1/num2
    h1.innerText= "Result :" +Res
}
function PovNum(){
    let num1=document.getElementById('first').value
    let num2=document.getElementById('second').value
    let h1=document.getElementById('Result')
    Res=num1**num2
    h1.innerText= "Result :" +Res
}

