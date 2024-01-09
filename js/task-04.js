const form = document.querySelector('.login-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === '' || password === '') {
        return alert('All form fields must be filled in');
    } else {
        const data = {
            email: email.trim(),
            password: password.trim(),
        };
        form.reset();
        console.log(data);
    }
})