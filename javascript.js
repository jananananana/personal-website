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
        const _toggleDialog = () => {
            const dialog = document.getElementById('vaultDialog');

            if(dialog.open) {
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
                  template = `
                    <template>
                        <dialog class="j-dialog">
                            <form method="dialog">
                                <header class="j-dialog__header">
                                    <button aria-label="close" class="j-simple-button j-dialog__header-close" formnovalidate>&times;</button>
                                </header>
                                <section class="j-dialog__inner">
                                    <!-- autofocus attribute added for accessibility -->
                                    <h2 class="j-heading j-heading--2" autofocus>You're One Step Closer to Doodletown</h2>
                                    <p class="j-dialog__content ">${message1}</p>
                                </section>
                                <footer class="j-dialog__footer j-dialog__inner">
                                        <button  class="j-button" aria-label="close" formnovalidate>Ok!</button>
                                </footer>
                            </form>
                        </dialog>
                    </template>
                    `;
            
            document.getElementById('body').append(fullcode);

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