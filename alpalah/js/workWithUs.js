window.addEventListener('DOMContentLoaded', () => {

    const myForm = document.querySelector('form');
    const inputName = myForm.querySelector('#fname');
    const genre = myForm.querySelector('#genre');
    const date = myForm.querySelector('#date');
    const email = myForm.querySelector('#email');
    const personalDescription = myForm.querySelector('#personalDescription');
    const submitButton = myForm.querySelector('#submit');

    submitButton.addEventListener('click', (event) => {

        // event.preventDefault();

        const applicant = {
            fullName: inputName.value,
            genre: genre.value,
            date: date.value,
            email: email.value,
            personalDescription: personalDescription.value,
        }

        localStorage.setItem('Full name', JSON.stringify(applicant.fullName));
        localStorage.setItem('Genre', JSON.stringify(applicant.genre));
        localStorage.setItem('Date', JSON.stringify(applicant.date));
        localStorage.setItem('E-mail', JSON.stringify(applicant.email));
        localStorage.setItem('Personal Description', JSON.stringify(applicant.personalDescription));
    })
})