class FooterComponent extends HTMLElement {
    template = `
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/grid-system-and-input.css">

    
    <footer>
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-12 text-center">
                    <img class="logo-bottom" src="./media/newLogo.png" alt="logo" />
                </div>
            </div>

            <div class="row">
                <div class="col-md-8 offset-md-2 mt-5">
                    <ul class="list-inline social text-center" style="display: flex; justify-content: center;">
                        <li><a href="https://www.instagram.com/mouro.catarina/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.facebook.com/MouroCatarina/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCXOMD_ASBH5pIAM7vYjvqfg"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.soundcloud.com/mourocatarina"><i class="fa fa-soundcloud" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <hr>
            </div>

            <div class="row">
                <div class="col-md-12 mb-3 text-center text-white">
                    <p class="h6">Catarina Mouro $year$ &copy; All Rights Reserved</p>
                </div>
                <hr>
            </div>	
        </div>
    </footer>`;

    constructor ()
    {
        super();

        this.attachShadow({ mode: 'open' });
        //this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.template = this.template.replace("$year$", new Date().getFullYear());
        this.shadowRoot.innerHTML = this.template;
    }
}

window.customElements.define('footer-component', FooterComponent);