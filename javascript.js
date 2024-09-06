(function (){
    
    const appFunctions = (function() {
        
        const _showThankYou = () => {
            // Assignment requirement
            console.log("Hello World!");


            document.addEventListener('DOMContentLoaded', (event) => {


                const forms = document.getElementsByClassName('j-email-form');

                for (let i = 0; i < forms.length; i++) {
                    const form = forms[i];
                    // I have no idea why the bind works and why it needs a null, but it works
                    form?.addEventListener('submit' , _getEmail.bind(null, form));
                }
                // No need for this to bubble up, nothing else needs to use this click
                event.stopPropagation();
            });
        }

        // dialog opening and closing logic
        const _toggleDialog = (paragraph) => {
            const dialog = document.getElementById('emailDialog');

            if(dialog.open) {
                paragraph.innerHTML = "";
                dialog.close();
            } else {
                dialog.showModal();
            }
        }

        const _getEmail = (form, e) => {   
            const formData = new FormData(form),
                    email = formData.get("email"),
                    message = `Your email ${email} is now subscribed to the exclusive Doodletown newsletter!`;

            _putMessageInTemplate(message);

            
            e.preventDefault();

        }

        const _putMessageInTemplate = (message) => {
            const message1 = message,
                    paragraph = document.getElementById('dialog-message');
            
            paragraph.append(message1);
            _toggleDialog(paragraph);
        }

        const _init = () => {
            _showThankYou();
        }    
        
        return {
            init: function() {_init()}
        };
    }());

    (function (){
        appFunctions.init();
    }())

})();