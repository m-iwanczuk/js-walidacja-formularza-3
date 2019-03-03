/* Walidacja pól */

function validateForm(e) {
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const zgoda1 = document.getElementById('zgoda-marketingowa-1');
    const message = document.getElementById('wiadomosc');

    message.innerHTML = ''; // czyści wiadomosci w ul.

    if(nameInput.value === '') {
        e.preventDefault();
        const msgName = document.createElement('li');
        msgName.innerText = 'Wpisz imię!';
        message.appendChild(msgName);
    }

    if(emailInput.value === '') {
        e.preventDefault();
        const msgEmail = document.createElement('li');
        msgEmail.innerText = 'Wpisz email!';
        message.appendChild(msgEmail);
    }

    if(!zgoda1.checked) { // "its funny because its true"
        e.preventDefault();    
        const msgAgreement = document.createElement('li');
        msgAgreement.innerText = 'Wyraź zgodę!';
        message.appendChild(msgAgreement);
    }

}

document.querySelector('form').addEventListener('submit', validateForm);

// let zgoda1 = document.getElementById('zgoda-marketingowa-1');
let zgoda2 = document.getElementById('zgoda-marketingowa-2');
// let zgody = document.getElementById('wszystkie-zgody');

document.getElementById('wszystkie-zgody').addEventListener('change', checkCheckboxes)

function checkCheckboxes() {
      zgoda1.checked = this.checked;
      zgoda2.checked = this.checked;
      zgoda1.disabled = this.checked;
      zgoda2.disabled = this.checked;
}

/* function checkCheckboxes() {
    const zgoda1 = document.getElementById('zgoda-marketingowa-1');
    const zgoda2 = document.getElementById('zgoda-marketingowa-2');
    // const zgody = document.getElementById('wszystkie-zgody');

    if(this.checked) {
        zgoda1.checked = true;
        zgoda2.checked = true;
        zgoda1.disabled = true;
        zgoda2.disabled = true;

    } else {
        zgoda1.checked = false;
        zgoda2.checked = false;
        zgoda1.disabled = false;
        zgoda2.disabled = false;

    }
} */

document.getElementById('wszystkie-zgody').addEventListener('change', checkCheckboxes);