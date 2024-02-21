// admin.js
export class adminTest {

  navigate() {
    cy.visit('https://opensource-demo.orangehrmlive.com');
  }

  validLogin() {
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.orangehrm-login-button').click(); // Assuming this is the correct identifier for the login button
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // Add more assertions here if needed
  }

   

  navigateAdminPage(){
    cy.get('.oxd-main-menu-item--name').first().click();
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  }

  dashBoards(){
        cy.get('.oxd-topbar-header').should('be.visible');
        cy.get('.oxd-topbar-header-breadcrumb-module').should('contain','Admin');
        cy.get('.oxd-topbar-header-breadcrumb-level').should('contain','User Management');
    }

    topBarElements(){
        cy.get('.oxd-topbar-body-nav-tab-item').each(($list)=>{

            cy.wrap($list).should('be.visible');

        });

        cy.get('.oxd-topbar-body-nav-tab-item').each(($list,$index)=>{
            if($index === 0){
                cy.wrap($list).should('contain','User Management ')
            }else if($index === 1){
                cy.wrap($list).should('contain','Job')
            }else if($index === 2){
                cy.wrap($list).should('contain','Organization')
            }else if($index === 3){
                cy.wrap($list).should('contain','Qualifications')
            }else if($index === 4){
                cy.wrap($list).should('contain','Nationalities')
            }else if($index === 5){
                cy.wrap($list).should('contain','Corporate Branding')
            }else if($index === 6){
                cy.wrap($list).should('contain','Configuration ')
            }

        })
    }

    dropDownMenu(){

        cy.get('.oxd-dropdown-menu li').eq(1).click({ force: true });
        cy.get('.oxd-topbar-body-nav-tab-accordian li').each(($list)=>{
            cy.wrap($list).should('be.visible')
            
        });
    }

    navigateDropDownFunction(){
        cy.get('.oxd-topbar-body-nav-tab-item').each(($list,$index)=>{
            if($index === 0){
                cy.wrap($list).click().click();
                cy.get('.oxd-topbar-body-nav-tab-link').should('contain','Users').should('be.visible');
                // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
                // cy.go('back');

            }else if($index === 1){
                cy.wrap($list).click().click();
                cy.get('.oxd-dropdown-menu').should('be.visible');
            }else if($index === 2){
                cy.wrap($list).click();
                cy.get('.oxd-dropdown-menu').should('be.visible');
            }else if($index === 3){
                cy.wrap($list).click();
                cy.get('.oxd-dropdown-menu').should('be.visible');
            }else if($index === 4){
                cy.wrap($list).should('be.visible');
            }else if($index === 5){
                cy.wrap($list).should('be.visible');
            }else if($index === 6){
                cy.wrap($list).click();
                cy.get('.oxd-dropdown-menu').should('be.visible');
            }
        })
        cy.get('.bi-question-lg').should('be.visible');
    }

    tableFilterElements(){
        cy.get('.oxd-table-filter-title').should('contain','System Users').should('be.visible');
        cy.get('.oxd-form-row').should('be.visible');
        cy.get('.bi-caret-up-fill').click();
        cy.get('.oxd-form-row').should('not.to.be.visible');
        cy.get('.bi-caret-up-fill').click();
        cy.get('.orangehrm-full-width-grid').should('')


    }








}
