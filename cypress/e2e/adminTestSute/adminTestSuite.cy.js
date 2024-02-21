// spec.js
import { adminTest } from "./admin.js";
const admin = new adminTest();

beforeEach('test',() => {
  admin.navigate();
  admin.validLogin();
  cy.viewport(2000, 1100);
  
});


describe('test',()=>{

    it('navbar test cases',()=>{
        admin.navigateAdminPage();
        admin.dashBoards();
       
    });

    it('navigation drop down menu test cases',()=>{
        admin.navigateAdminPage();
        admin.topBarElements();
        cy.viewport(1200, 800);
        cy.contains('.oxd-topbar-body-nav-tab-item', 'More').click();
        cy.get('.oxd-dropdown-menu').should('be.visible');
        admin.dropDownMenu();
        cy.viewport(2000, 1100);
        admin.navigateDropDownFunction();
    });

    it('user table filter test cases',()=>{
        admin.navigateAdminPage();
        admin.tableFilterElements();


    })



})





