const add_data =(d)=>{
    let name=document.getElementById('first').value
    let user=document.getElementById('second').value
    let phone=document.getElementById('third').value
    let state=document.getElementById('fourth').value
    let pass=document.getElementById('fifth').value
    if (name==='' || phone==='' ||  state==='' || user==='' || pass===''){
        alert('Please Fill All Details')
    }else{
    window.alert('You Successfully Login')
    let data={
        "username":user,
        "password":pass,
        'name':name,
        'state':state,
        'phone':phone
    }
    console.log(data)}}
document.addEventListener('DOMContentLoaded', ()=> {document.getElementById('butt').addEventListener('click',add_data)})

