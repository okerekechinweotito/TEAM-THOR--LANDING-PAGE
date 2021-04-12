const formActions =  document.querySelectorAll('.form-action button');

formActions.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    M.toast({ html: 'Sign Up & Sign In buttons are disabled!' });

    formActions.forEach(button => button.setAttribute('disabled', 'disabled'));
    setTimeout(() => {
      formActions.forEach(button => button.removeAttribute('disabled'));
    }, 4e3)
  })
})