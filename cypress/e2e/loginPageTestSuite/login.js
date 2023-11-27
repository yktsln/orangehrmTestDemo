
export class loginTest{

    navigate(){
       cy.visit('https://opensource-demo.orangehrmlive.com', {
       proxy: 'http://localhost:3000', // Cypress'ın çalıştığı porta ayarlayın
       });

         

    }

    loginElements(){
        
        cy.get('.orangehrm-login-container div[class]').should('be.visible').should('exist');
        cy.get('.orangehrm-login-logo').should('be.visible').should('exist');
    }

    validLogin(){
        cy.get('.oxd-input--active[name="username"]').click().type('Admin');
        cy.get('.oxd-input--active').click().type('admin123');
        cy.get('.orangehrm-login-button').click();
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }

    invalidLogin(){
        //Both input place empty
        cy.get('input[name="username"]').should('have.value','');
        cy.get('input[name="password"]').should('have.value','');
        cy.get('.oxd-input-group__message').should('not.exist');
        cy.get('.orangehrm-login-button').click();
        cy.get('.oxd-input-group__message').contains('Required');
        cy.reload();
        cy.wait(1500)
        //username empty
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').should('have.value','');
        cy.get('.oxd-input-group__message').should('not.exist');
        cy.get('.orangehrm-login-button').click();
        cy.get('.oxd-input-group__message').contains('Required');
        cy.reload();
        cy.wait(1500)
        //login using valid username invalid password  --not empty
        cy.get('input[name="username"]').type('Admin').should('exist');
        cy.get('input[name="password"]').type('admin123123');
        cy.get('.oxd-alert-content-text').should('not.exist');
        cy.get('.orangehrm-login-button').click();
        cy.get('.oxd-alert-content-text').should('exist');
        cy.contains('Invalid credentials').should('be.visible');
        cy.reload();
        //login using invalid username valid password  --not empty
        cy.get('input[name="username"]').type('Adminn').should('exist');
        cy.get('input[name="password"]').type('admin123');
        cy.get('.oxd-alert-content-text').should('not.exist');
        cy.get('.orangehrm-login-button').click();
        cy.get('.oxd-alert-content-text').should('exist');
        cy.contains('Invalid credentials').should('be.visible');
    }

    lgnPageLinks(){
        cy.get('.orangehrm-login-footer-sm a').each(($list,index)=>{
           if (index === 0) {
                cy.wrap($list).should('have.attr','href','https://www.linkedin.com/company/orangehrm/mycompany/')
            
            }else if(index === 1){
                 cy.wrap($list).should('have.attr','href','https://www.facebook.com/OrangeHRM/');
            }else if(index === 2){
                cy.wrap($list).should('have.attr','href','https://twitter.com/orangehrm?lang=en');
            }else if(index === 3){
                cy.wrap($list).should('have.attr','href','https://www.youtube.com/c/OrangeHRMInc');
            }
        })
        cy.get('.orangehrm-copyright a').should('have.attr','href','http://www.orangehrm.com');
    }




}