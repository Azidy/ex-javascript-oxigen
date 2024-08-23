// List steps
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

const especialidade_txt = document.getElementById('especialidade-txt');
const profissional_txt = document.getElementById('profissional-txt');
const date_txt = document.getElementById('date-txt');
const paciente_txt = document.getElementById('paciente');

// Sections
const homeSection = document.getElementById('home');
const formSection = document.getElementById('form');
const form_especialidade = document.getElementById('form-especialidade');
const form_doctor = document.getElementById('form-doctor');
const form_time = document.getElementById('form-time');
const form_info = document.getElementById('form-info');
const form_confirm = document.getElementById('form-confirmar');
const form_array = [form_especialidade, form_doctor, form_time, form_info, form_confirm];
const finalSection = document.getElementById('final');

// Buttons
const startButtion = document.getElementById('startBookingAppointment')
const firstButtonNext = document.getElementById('firstButtonNext');
const secondButtonNext = document.getElementById('secondButtonNext');
const thirdButtonNext = document.getElementById('thirdButtonNext');
const fourthButtonNext = document.getElementById('fourthButtonNext');
const buttonConfirm = document.getElementById('buttonConfirm');
const homeButton = document.getElementById('homeButton');

// Especialidades
const especialidade1 = document.getElementById('especialidade1');

// Auxiliares
let i = 0;

// Funções

one.onclick = function () {
    one.classList.add("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}

two.onclick = function () {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
three.onclick = function () {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.remove("active");
    five.classList.remove("active");
}
four.onclick = function () {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.remove("active");
}
five.onclick = function () {
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
}

especialidade1.onclick = function () {
    firstButtonNext.classList.remove('disabled')
}

function goToForms() {
    homeSection.classList.add('d-none');
    formSection.classList.remove('d-none');
    i = 0;
}

function nextForm() {
    if (i == 4) {
        formSection.classList.add('d-none');
        finalSection.classList.remove('d-none');
        form_array[i].classList.add('d-none');
        form_array[0].classList.remove('d-none')
    } else {
        form_array[i].classList.add('d-none');
        form_array[i + 1].classList.remove('d-none');
        i++;
    }
}

function backToHome(){
    finalSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}


// Events

startBookingAppointment.addEventListener('click', goToForms);
firstButtonNext.addEventListener('click', nextForm);
secondButtonNext.addEventListener('click', nextForm);
thirdButtonNext.addEventListener('click', nextForm);
fourthButtonNext.addEventListener('click', nextForm);
buttonConfirm.addEventListener('click', nextForm);
homeButton.addEventListener('click', backToHome)