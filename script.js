// 1. При изменении значения в input с id = "from", значение содержащееся 
// в нем  должно моментально отображаться в span.То есть при печати в input
// тег span также должен меняться.

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом 
// message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой 
// форме. Если какое - либо поле не заполнено, форма не должна отправляться, 
// также должны быть подсвечены незаполненные поля(необходимо поставить класс 
// error незаполненным полям).Как только пользователь начинает заполнять 
// какое - либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить(поставить класс 
// error данному полю).
// - Если поле было чем - либо заполнено, подсветку(класс error) необходимо 
// убрать.

// 1.
document.querySelector('#from').addEventListener('input', (e) => {
   document.querySelector('span').innerHTML = e.target.value;
});

// 2
const messageBtnEl = document.querySelector('.messageBtn');
const divMessageEl = document.querySelector('.message');
// console.log(messageBtnEl);
messageBtnEl.addEventListener('click', () => {
   divMessageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
   divMessageEl.style.visibility = 'visible';
});

// 3
const formEl = document.querySelector('form');
const formInSel = formEl.querySelectorAll('.form-control');

formEl.addEventListener('submit', (event) => {
   formInSel.forEach(e => {
      if (!e.value) {
         e.classList.add('error');
         e.style.backgroundColor = '#ccc';
         event.preventDefault();
      }
   });
});

formEl.addEventListener('input', (event) => {
   if (event.target.classList.contains('error')) {
      if (event.target.value) {
         event.target.classList.remove('error');
         event.target.style.backgroundColor = null;
      }
      return;
   }
});
