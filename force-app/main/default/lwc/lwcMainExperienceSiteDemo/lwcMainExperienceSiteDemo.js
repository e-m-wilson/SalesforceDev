import { LightningElement, wire } from 'lwc';
import getUserfName from '@salesforce/apex/UserInfoHelper.getUserFirstName';

export default class LwcMainExperienceSiteDemo extends LightningElement {

    Home = true;
    CoolPage = false;
    AboutUs = false;
    smallFormFactor = true;
    desktopFormFactor = false;

    
    firstName;
    logoutURL;

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
        this.toggleMenu();
    }

    connectedCallback() {
        window.addEventListener('resize', this.handleWindowChange);
        /*Note that the logout will not work in the experience builder.
        It will only work in a live and published experience site. */
        this.logoutURL = window.location.origin + '/secur/logout.jsp';
        getUserfName()
        .then((r) => {
          this.firstName = r;
        })
        .catch((e) => {
            console.log(e);
        });
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
            this.toggleMenu();
        }
    }

    toggleMenu() {
        if(this.smallFormFactor) {
           this.template.querySelector('.mainMenu').classList.toggle('active'); 
        } else {
            this.template.querySelector('.mainMenu').classList.remove('active');
        }
    }
}