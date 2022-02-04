var modalBg = document.querySelector('.modalbg');
var confirm = document.querySelector('.confirm');
var finish = document.querySelector('.finish')
var inputArea = document.querySelector(".inputArea");
var insertForm = document.querySelector('.insertForm')
var number = document.querySelector('.numberInput')
var code = document.querySelector('.codeInput')
var anotherOne = document.querySelector('.anotherOne')
var inputNum = document.querySelector('.numberInput')
var inputCode = document.querySelector(".codeInput");
var numberWarning = document.querySelector('.numberWarning')
var codeWarning = document.querySelector(".codeWarning");
var loader = document.querySelector('.loader')
    
function validateNumber() {
  if (number.value.toString().length !== 9) {
    numberWarning.classList.add('numberWarningActive');
    inputNum.classList.add("notValid");
  } else if (number.value.toString().length == 9){
    numberWarning.classList.remove('numberWarningActive');
    inputNum.classList.remove("notValid");
  }
} 

function validateCode() {
  if (code.value.toString().length !== 4) {
    codeWarning.classList.add('codeWarningActive');
    inputCode.classList.add("notValid");
  } else if (code.value.toString().length == 4) {
    codeWarning.classList.remove("codeWarningActive");
    inputCode.classList.remove("notValid");
  }
} 

function validate() {
    if (number.value.toString().length == 9 &&
    code.value.toString().length == 4) {
      confirm.classList.remove('confirmNotActive');
      confirm.disabled = false;
    } else {
      confirm.disabled = true;
      confirm.classList.add('confirmNotActive');
    }
}

number.addEventListener("input", function () {
  validateNumber();
  validate();
});
code.addEventListener("input", function () {
  validateCode();
  validate();
});


confirm.addEventListener('click', function (event) {
  event.preventDefault();
  if (number.value.toString().length == 9 &&
    code.value.toString().length == 4) {
    loader.classList.add("loaderActive");
    confirm.classList.add("confirmLoading");
    console.log('hello')
    setTimeout(() => {
     modalBg.classList.add("activeModal");
     number.value = null;
     code.value = null; 
     loader.classList.remove('loaderActive')
     confirm.classList.remove("confirmLoading");
    },1000)
  }
  inputArea.classList.toggle("activeInputArea");
  validate()
  event.preventDefault();
  console.log('active')
})

finish.addEventListener('click', function () {
  modalBg.classList.remove('activeModal')
  
})
anotherOne.addEventListener('click', function () {
  modalBg.classList.remove('activeModal');
  inputArea.classList.toggle("activeInputArea");
  validate();
})