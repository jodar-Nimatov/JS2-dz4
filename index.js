let form = document.querySelector('.form')
form.addEventListener('submit' , (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/users` , {
        method: "POST",
        headers: {
            'Content-Type' : 'Application/json'
        },
        body: JSON.stringify({
            name: e.target[0].value,
            LastName: e.target[1].value,
            Age: e.target[2].value
        })
    }).then((res) => alert('success' , res))
    .catch((err) => alert('error' , err))
})