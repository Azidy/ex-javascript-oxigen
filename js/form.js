// General
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

const especialidade_txt = document.getElementById('especialidade-txt');
const profissional_txt = document.getElementById('profissional-txt');
const date_txt = document.getElementById('date-txt');
const paciente_txt = document.getElementById('paciente');

const step = document.getElementById('etapa');
const especialidadeTxtFinal = document.getElementById('especialidadeTxtFinal')
const dateTxtFinal = document.getElementById('dateTxtFinal')
const doctorTxtFinal = document.getElementById('doctorTxtFinal')
const whosConsultingFinal = document.getElementById('whosConsultingFinal')
const nomeTxtFInal = document.getElementById('nomeTxtFInal')
const birthdayTxtFinal = document.getElementById('birthdayTxtFinal')
const cpfTxtFinal = document.getElementById('cpfTxtFinal')
const emailTxtFinal = document.getElementById('emailTxtFinal')
const telTxtFinal = document.getElementById('telTxtFinal')

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
const firstButtonPrevious = document.getElementById('firstButtonPrevious');
const secondButtonPrevious = document.getElementById('secondButtonPrevious');
const thirdButtonPrevious = document.getElementById('thirdButtonPrevious');
const fourthButtonPrevious = document.getElementById('fourthButtonPrevious');
const buttonConfirm = document.getElementById('buttonConfirm');
const homeButton = document.getElementById('homeButton');





// Variaveis
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

function prviousForm() {
    form_array[i - 1].classList.remove('d-none');
    form_array[i].classList.add('d-none');
    i--;
}

function saveEspecialidade() {
    const especialidade1 = document.getElementById('especialidade1');
    especialidade_txt.innerHTML = especialidade1.value;
    step.innerHTML = 'Selecione o profissional';
    especialidadeTxtFinal.innerHTML = `${especialidade1.value}`;
}

function saveDotor() {
    const doctorRadio = document.querySelector('input[name="doutor"]:checked');
    profissional_txt.innerHTML = doctorRadio.value;
    step.innerHTML = 'Selecione a data e o horário da consulta';
    doctorTxtFinal.innerHTML = `${doctorRadio.value}`;
}

function saveDate() {
    const d = document.getElementById('date').value;
    const [ano, mes, dia] = d.split('-');
    const horaSelect = document.getElementById('horaSelect');
    const horaTxt = horaSelect.options[horaSelect.selectedIndex].text;
    date_txt.innerHTML = `${dia} | ${mes} | ${ano} • ${horaTxt}H`;
    step.innerHTML = 'Informe os dados do paciente';
    dateTxtFinal.innerHTML = `${dia} | ${mes} | ${ano} • ${horaTxt}h`;
}

function savePacient() {

    const whosConsulting = document.getElementById('whosConsulting');
    const whosConsultingTxt = whosConsulting.options[whosConsulting.selectedIndex].text;
    const nameInput = document.getElementById('nameInput');
    const birthdayInput = document.getElementById('birthdayInput').value;
    const [anobday, mesbday, diabday] = birthdayInput.split('-');
    const emailInput = document.getElementById('emailInput');
    const cpfInputInput = document.getElementById('cpfInput');
    const telInput = document.getElementById('telInput');

    paciente_txt.innerHTML = nameInput.value;
    step.innerHTML = 'Confirmação de dados';

    whosConsultingFinal.innerHTML = `Tipo de consulta: ${whosConsultingTxt}`;
    nomeTxtFInal.innerHTML = `Nome: ${nameInput.value}`;
    birthdayTxtFinal.innerHTML = `Data de Nascimento: ${diabday}/${mesbday}/${anobday}`;
    cpfTxtFinal.innerHTML = `CPF: ${cpfInputInput.value}`;
    emailTxtFinal.innerHTML = `E-mail: ${emailInput.value}`;
    telTxtFinal.innerHTML = `Telefone: ${telInput.value}`;
}

function removeEspecialidade() {
    especialidade_txt.innerHTML = ``;
    step.innerHTML = 'Selecione a especialidade';
}

function removeDoctor() {
    profissional_txt.innerHTML = ``;
    step.innerHTML = 'Selecione o profissional';
}

function removeDate() {
    date_txt.innerHTML = ``;
    step.innerHTML = 'Selecione a data e o horário da consulta';
}

function removePacient(){
    paciente_txt.innerHTML = ``;
    step.innerHTML = 'Informe os dados do paciente';
}

function backToHome() {
    finalSection.classList.add('d-none');
    homeSection.classList.remove('d-none');
}


// Events

startBookingAppointment.addEventListener('click', goToForms);

firstButtonNext.addEventListener('click', nextForm)
firstButtonNext.addEventListener('click', saveEspecialidade);

secondButtonNext.addEventListener('click', nextForm);
secondButtonNext.addEventListener('click', saveDotor);

thirdButtonNext.addEventListener('click', nextForm);
thirdButtonNext.addEventListener('click', saveDate);

fourthButtonNext.addEventListener('click', nextForm);
fourthButtonNext.addEventListener('click', savePacient);

firstButtonPrevious.addEventListener('click', prviousForm);
firstButtonPrevious.addEventListener('click', removeEspecialidade);

secondButtonPrevious.addEventListener('click', prviousForm);
secondButtonPrevious.addEventListener('click', removeDoctor);

thirdButtonPrevious.addEventListener('click', prviousForm);
thirdButtonPrevious.addEventListener('click', removeDate);

fourthButtonPrevious.addEventListener('click', prviousForm);
fourthButtonPrevious.addEventListener('click', removePacient);

buttonConfirm.addEventListener('click', nextForm);

homeButton.addEventListener('click', backToHome)