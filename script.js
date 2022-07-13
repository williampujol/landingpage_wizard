const btn = document.getElementById("send");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const name = document.getElementById("input_name").value;
    const phone = document.getElementById("input_phone").value;
    const email = document.getElementById("input_email").value;

    console.log(name, phone, email);
})