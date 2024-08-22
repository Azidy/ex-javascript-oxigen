const losango1 = document.getElementById('losango1')
const losango2 = document.getElementById('losango2')
const losango3 = document.getElementById('losango3')
const losango4 = document.getElementById('losango4')
const losango5 = document.getElementById('losango5')
const losango6 = document.getElementById('losango6')

let changeChecked = addEventListener("change", showSelector, false);

function showSelector() {
    const {value: checked} = window.document.querySelector('input[name="btnradio"]:checked')
    switch (checked) {
        case "1":
            losango1.classList.add('losango-ativo')
            losango2.classList.remove('losango-ativo')
            losango3.classList.remove('losango-ativo')
            losango4.classList.remove('losango-ativo')
            losango5.classList.remove('losango-ativo')
            losango6.classList.remove('losango-ativo')
            break;

        case "2":
            losango1.classList.remove('losango-ativo')
            losango2.classList.add('losango-ativo')
            losango3.classList.remove('losango-ativo')
            losango4.classList.remove('losango-ativo')
            losango5.classList.remove('losango-ativo')
            losango6.classList.remove('losango-ativo')
            break;

        case "3":
            losango1.classList.remove('losango-ativo')
            losango2.classList.remove('losango-ativo')
            losango3.classList.add('losango-ativo')
            losango4.classList.remove('losango-ativo')
            losango5.classList.remove('losango-ativo')
            losango6.classList.remove('losango-ativo')
            break;

        case "4":
            losango1.classList.remove('losango-ativo')
            losango2.classList.remove('losango-ativo')
            losango3.classList.remove('losango-ativo')
            losango4.classList.add('losango-ativo')
            losango5.classList.remove('losango-ativo')
            losango6.classList.remove('losango-ativo')
            break;

        case "5":
            losango1.classList.remove('losango-ativo')
            losango2.classList.remove('losango-ativo')
            losango3.classList.remove('losango-ativo')
            losango4.classList.remove('losango-ativo')
            losango5.classList.add('losango-ativo')
            losango6.classList.remove('losango-ativo')
            break;

        case "6":
            losango1.classList.remove('losango-ativo')
            losango2.classList.remove('losango-ativo')
            losango3.classList.remove('losango-ativo')
            losango4.classList.remove('losango-ativo')
            losango5.classList.remove('losango-ativo')
            losango6.classList.add('losango-ativo')
            break;
    }
}