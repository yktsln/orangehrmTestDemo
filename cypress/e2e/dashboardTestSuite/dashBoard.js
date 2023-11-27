export class dashBoardTest{

    navigate(){
       cy.visit('https://opensource-demo.orangehrmlive.com', {
       proxy: 'http://localhost:3000',
       });
    }

    validLogin(){
        cy.get('input[name="username"]').type('Admin').should('exist');
        cy.get('input[name="password"]').type('admin123');
        cy.get('.orangehrm-login-button').click()
    }

    dashBoards(){
        cy.get('.orangehrm-dashboard-widget').should('be.visible')
    }

    testAtWork(){
        cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget').each(($list,index)=>{
            if(index === 0){
                cy.wrap($list).should('exist');
                cy.wrap($list).find('.oxd-text.oxd-text--p').contains('Time at Work');
                cy.wrap($list).find('.oxd-icon.bi-clock-fill.orangehrm-dashboard-widget-icon').should('be.visible');
                cy.wrap($list).find('.orangehrm-attendance-card-profile-image img').should('have.attr','src','../pim/viewPhoto/empNumber/7');
                cy.wrap($list).find('.orangehrm-attendance-card-profile-record p').should('be.visible');
                cy.wrap($list).find('.orangehrm-attendance-card-bar .orangehrm-attendance-card-fulltime b').should('have.length',2).then(($elements)=>{
                    const hours = $elements.eq(0).text();
                    const minutes = $elements.eq(1).text();
                    cy.log(`Worked hours: ${hours} ${minutes}`)
                });
                cy.wrap($list).find('.orangehrm-attendance-card-summary p').each(($elements,index)=>{
                    if(index === 0){
                        cy.wrap($elements).contains('This Week');
                    }else if(index === 1){
                        cy.wrap($elements).contains('Nov 27 - Dec 03');
                    }
                });
                cy.wrap($list).find('.emp-attendance-chart').should('exist');
                cy.wrap($list).find('.emp-attendance-chart canvas').should('have.attr', 'width', '240');
                cy.wrap($list).find('.emp-attendance-chart canvas').should('have.attr', 'height', '170');

                cy.log('Dashboard widget test completed for Time at Work');

                

            }
        })
    }


}