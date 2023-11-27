import { navbarTest } from "./navbar.js";
const navbar = new navbarTest;


    beforeEach(()=>{
        navbar.navigate();
        navbar.validLogin();
    })

 

describe('Navbar Test Suite',()=>{

    it('check navbar elements',()=>{
        navbar.navbarHeader();
        navbar.navbarSearch();
        navbar.navbarMainMenu();
        
    })

    it('navbar toggle functon',()=>{
        navbar.navbarToggleButton();
    })

    // it('navbar links',()=>{
    //     navbar.navbarLinks();
    // })
    
    it('Topbar elements',()=>{
        cy.get('.oxd-topbar-header div[class]').each(($list,index)=>{
            if(index === 0){
                cy.wrap($list).should('exist');
            }else if(index === 1){
                cy.wrap($list).should('exist');
            }

        })
    })

    it.only('navbar button',()=>{
        cy.get('button.oxd-icon-button').should('be.enabled');
    })
})