const $form = document.querySelector("#form")



$form.addEventListener(`submit`, handleSubmit)


async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method:this.method,
        body:form,
        headers:{
        "Accept" : "application/json"
        }
    })
    if(response.ok){
        this.reset()
        Swal.fire({
            title: "Excelente",
            text: "gracias por contactarnos, te escribiremos pronto ",
            icon: "success",
            timer: 10000,
            width: 400,
        });
    }
}
