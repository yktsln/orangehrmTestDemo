export class navbarTest{

    navigate(){
       cy.visit('https://opensource-demo.orangehrmlive.com', {
       proxy: 'http://localhost:3000', // Cypress'ın çalıştığı porta ayarlayın
       });
    }

    validLogin(){
        cy.get('input[name="username"]').type('Admin').should('exist');
        cy.get('input[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click()
    }

    navbarHeader(){
        cy.get('.oxd-brand-banner img').should('have.attr','src','/web/images/orangehrm-logo.png?v=1689053487449');
    }

    navbarSearch(){
        cy.get('.oxd-main-menu-search svg').should('be.visible');
        cy.get('.oxd-main-menu-search input').should('be.enabled');
    }
      
    navbarMainMenu(){
        cy.get('.oxd-main-menu li').each(($list)=>{
            cy.wrap($list).should('be.visible')
        })
    }

    navbarToggleButton(){
        cy.get('.oxd-main-menu-item--name').each(($list)=>{
            cy.wrap($list).should('be.visible')
        })
        cy.get('.oxd-main-menu-button').click();
        cy.get('.oxd-main-menu-item--name').each(($list)=>{
            cy.wrap($list).should('not.be.visible')
        })
        cy.get('.oxd-main-menu-item--icon').each(($list)=>{
            cy.wrap($list).should('be.visible')
        })
    }

    navbarLinks(){
        cy.get('.oxd-main-menu li').each(($list,index)=>{
            if(index === 0){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
            }else if(index === 1){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
            }else if(index === 2){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
            }else if(index === 3){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet');
                cy.go('back');
            }else if(index === 4){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
                cy.go('back');
            }else if(index === 5){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
                cy.go('back');
            }else if(index === 6){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview');
                cy.go('back');
            }else if(index === 7){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
                cy.go('back');
            }else if(index === 8){
                cy.wrap($list).click();
                cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
                cy.go('back');
            }
            
        })
    }
    
} 