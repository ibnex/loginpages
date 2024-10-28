function validate(){
    let username=document.getElementById("username").value 
    let password=document.getElementById("password").value 

    if (username==="ibne" && password==="000"){
        alert("login successfully")

    }
    else{
        alert("login failed try agian ")
        
    }
}