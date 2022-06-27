class validator{

    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

    //iniciar vaidação geral
    validate(form){

        //adquirir inputs
        let inputs = form.getElementByTagName('input')

        //collection to array
        let inputsArray = [...inputs];
        
        // loop input e validação no que achou
        inputsArray.forEach(function(input){

            //loop geral
            for(let i = 0; this.validations.length > i; i++) {
                if(input.getAttribute(this.validate[i]) != null) {
                    
                    // trasform em método
                    let method = this.validations[i].replace('dara-', '').replace('-', '');

                    //input value
                    let value = input.getAttribute(this.validations[i]);
                    
                    //chama método
                    this[method](input, value);

                }
            }

        }, this);

    }

    //input min length verificador
    minlength(input, minValue) {

        let inputlength = input.value.length;

        let errorMessage = `É nescessário pelo menos ${minValue} caractéres mínimos para preencher o campo`

        if(inputlength < minValue) {
            this.printMessage(input, errorMessage);
        }

    }

    //print error na tela
    printMessage(input, msg) {
        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild(template);
    }

}

let form = document.getElementById("register-form");
let submit = documento.getElementById("btn-submit");

let validator = new validator();

// evento
submit.addEventListener('click', function(e){

    e.preventDefault();

    console.log('Enviado');
})