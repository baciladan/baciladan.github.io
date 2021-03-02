window.addEventListener('DOMContentLoaded', (event) => {
    let inputFields = document.getElementById('contact-form').childNodes;
    let submitButton = document.getElementById('subButton');
    let errorAnimation = document.querySelector('.errorIlustration');
    let sentAnimation = document.querySelector('.illustration');
    submitButton.addEventListener("click", function(event){
        if(inputFields[1].value === '' || inputFields[3].value === '' || inputFields[5].value === ''){
            event.preventDefault();
            console.log('Prevented from sending empty form!');
            window.scrollTo(0,0);
            sentAnimation.classList.remove('illustration-active');
            errorAnimation.classList.add('error-active');
        }
    })
    inputFields[1].addEventListener('keypress',function(){
        errorAnimation.classList.remove('error-active');
    })
    inputFields[3].addEventListener('keypress',function(){
        errorAnimation.classList.remove('error-active');
    })
    inputFields[5].addEventListener('keypress',function(){
        errorAnimation.classList.remove('error-active');
    })

})