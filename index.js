function sendMail()
{
    var params = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


const serviceID ="service_u91u2rc"
const templateID="template_40b4zc8"
emailjs
.send(serviceID,templateID,params)
.then((res) =>{
        document.getElementById("fullname").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
    alert("your message sent succesfully");
})
.catch((err) => console.log(err));


}


