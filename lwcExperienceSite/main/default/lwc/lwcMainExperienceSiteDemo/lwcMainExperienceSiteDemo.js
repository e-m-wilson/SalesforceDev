import { LightningElement } from 'lwc';
import getUserfName from '@salesforce/apex/UserInfoHelper.getUserFirstName';
import isGuest from '@salesforce/user/isGuest';

export default class LwcMainExperienceSiteDemo extends LightningElement {

    Home = true;
    Locations = false;
    Apply = false;
    guest = isGuest;
    firstName;
    logoutURL;

    menuChange(e) {
        let choice = e.target.dataset.menu;
        switch(choice) {
            case 'Home':
            {
                this.Home = true;
                this.Locations = false;
                this.Apply = false;
                break;
            }
            case 'Locations':
            {
                this.Home = false;
                this.Locations = true;
                this.Apply = false;
                break;
            }
            case 'Apply':
            {
                this.Home = false;
                this.Locations = false;
                this.Apply = true;
                break;
            }
            default:
            {
                this.Home = true;
                this.Locations = false;
                this.Apply = false;
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