/* Walidacja pól */

function validateForm(e) {
    e.preventDefault();
    console.log('test');
}

document.querySelector('form').addEventListener('submit', validateForm);

let zgoda1 = document.getElementById('zgoda-marketingowa-1');
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