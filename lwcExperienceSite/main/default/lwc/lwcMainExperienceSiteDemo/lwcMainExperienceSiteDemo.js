import { LightningElement, wire } from 'lwc';
import getUserfName from '@salesforce/apex/UserInfoHelper.getUserFirstName';

export default class LwcMainExperienceSiteDemo extends LightningElement {

    Home = true;
    CoolPage = false;
    AboutUs = false;
    
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
    }

    mobileMenuChange(e) {
        this.menuChange(e);
        this.toggleMenu();
    }

    connectedCallback() {
     
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

  
   

    toggleMenu() {
        this.template.querySelector('.mobileMenu').classList.toggle('active');
    }
}