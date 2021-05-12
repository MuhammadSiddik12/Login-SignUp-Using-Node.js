const add_data =(d)=>{
    let user=document.getElementById('first').value
    let pass=document.getElementById('second').value
    if (user==='' && pass===''){
        alert('Please enter something')
    }else{
    window.alert('You Successfully Login')
    let data={
        "username":user,
        "password":pass
    }
    console.log(data)}}
document.addEventListener('DOMContentLoaded', ()=> {document.getElementById('butt').addEventListener('click',add_data)})

