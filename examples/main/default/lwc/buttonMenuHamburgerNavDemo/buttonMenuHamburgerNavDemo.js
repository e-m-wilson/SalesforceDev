import { LightningElement } from 'lwc';

export default class ButtonMenuDemo extends LightningElement {

    Home = true;
    CoolPage = false;
    AboutUs = false;
    smallFormFactor = true;
    desktopFormFactor = false;

    menuChange(e) {
        let choice = e.target.dataset.menu;
        switch(choice) {
            case 'Home':
            {
                this.Home = true;
                this.CoolPage = false;
                this.AboutUs = false;
                break;
            }
            case 'Cool Page':
            {
                this.Home = false;
                this.CoolPage = true;
                this.AboutUs = false;
                break;
            }
            case 'About Us':
            {
                this.Home = false;
                this.CoolPage = false;
                this.AboutUs = true;
                break;
            }
            default:
            {
                this.Home = true;
                this.CoolPage = false;
                this.AboutUs = false;
            }
        }
    }

    connectedCallback() {
        window.addEventListener('resize', this.handleWindowChange);
    }

    renderedCallback() {
        this.handleWindowChange();
    }
        
    handleWindowChange = () => {
        let width = this.template.querySelector('.header').getBoundingClientRect().width;
        console.log(width);
        if(width < 800){
            this.smallFormFactor = true;
            this.desktopFormFactor = false;
        } else {
            this.smallFormFactor = false;
            this.desktopFormFactor = true;
        }
    }
}