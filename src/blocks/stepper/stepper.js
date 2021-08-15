const stepper = function () {
  const $steppers = document.querySelectorAll('.js-stepper');

  $steppers.forEach($el => {

    const inc = $el.querySelector('.stepper__btn--inc');
    const dec = $el.querySelector('.stepper__btn--dec');
    const field = $el.querySelector('.stepper__field');

    let count = field.value;

    const increment = function () {
      if (count > 0 && dec.classList.contains('stepper__btn--disabled')) {
        dec.classList.remove('stepper__btn--disabled')
      }
      count++;
      field.value = count;
    }

    const decrement = function () {
      if (count > 2) {
        count--;
      } else {
        dec.classList.add('stepper__btn--disabled')
        count = 1;
      }
      field.value = count;
    }

    const fieldChange = function (e) {
      let value = e.target.value;
      if (value < 1) {
        count = 1;
        dec.classList.add('stepper__btn--disabled')
      } else {
        count = value;
        dec.classList.remove('stepper__btn--disabled')
      }
      field.value = count;
    }

    increment();
    decrement();

    inc.addEventListener('click', increment)
    dec.addEventListener('click', decrement)
    field.addEventListener('blur', fieldChange)
  })
}

export default stepper;
