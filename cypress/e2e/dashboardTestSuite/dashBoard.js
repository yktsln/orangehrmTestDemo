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
                cy.wrap($list).find('.oxd-text.oxd-text--p').contains('Time at Work').should('be.visible');
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

    
    myActions(){
         cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget').each(($list,index)=>{
            if(index === 1){
                cy.wrap($list).should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-dashboard-widget-name p').contains('My Actions');
                cy.wrap($list).find('.orangehrm-todo-list').each(($elements,secondIndex)=>{
                    if(secondIndex === 0){
                       cy.wrap($elements).eq(0).should('exist').should('be.visible');
                       cy.wrap($elements).find('.orangehrm-report-icon').eq(0).should('be.enabled');
                       cy.wrap($elements).find('.orangehrm-report-icon svg').eq(0).should('have.attr','xmlns','http://www.w3.org/2000/svg');
                       cy.wrap($elements).find('.orangehrm-todo-list-item p').eq(0).should('have.text',' (3) Candidates to Interview'); 
                    }
                })

            }
         })
        
    }

    quickLaunch(){
         cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget').each(($list,index)=>{
            if(index === 2){
                cy.wrap($list).should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-dashboard-widget-name p').contains('Quick Launch');
                cy.wrap($list).find('.orangehrm-dashboard-widget-name i').should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-quick-launch div[class]').should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-quick-launch button').should('exist').should('be.visible').should('be.enabled');
                
            }
         });
    }

    blatestPost(){
        cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget').each(($list,index)=>{
            if(index === 3){
                cy.wrap($list).should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-dashboard-widget-name p').should('exist').should('be.visible').contains('Buzz Latest Posts');
                cy.wrap($list).find('.orangehrm-dashboard-widget-name p').should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-dashboard-widget-body div[class]').should('exist').should('be.visible')
                .each(($elements,index)=>{
                    if(index === 0){
                        cy.wrap($elements).find('.orangehrm-buzz-widget-header p').should('be.visible');
                        cy.wrap($elements).find('.orangehrm-buzz-widget-card img').should('be.visible');
                    }//in ths widget posts changes everytime run the test
                });
            }
        });
    }

    employeesonLeaveToday(){
        cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget').each(($list,index)=>{
            if(index === 4){
                
                cy.wrap($list).find('.orangehrm-dashboard-widget-name').should('have.text','Employees on Leave Today').should('be.visible').should('exist');
                cy.wrap($list).find('.orangehrm-dashboard-widget-name svg').should('have.attr','xmlns','http://www.w3.org/2000/svg');
                cy.wrap($list).find('.orangehrm-leave-card-icon').should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-dashboard-widget-body img').should('have.attr','src','/web/images/dashboard_empty_widget_watermark.png').should('be.visible').should('exist');
                cy.wrap($list).find('.orangehrm-dashboard-widget-body p').should('have.text','No Employees are on Leave Today').should('be.visible').should('exist');
            }
        })
    }

    distributionBySubUnit(){
        cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget').each(($list,index)=>{
            if(index === 5){
                cy.wrap($list).find('.orangehrm-dashboard-widget-header p').should('have.text','Employee Distribution by Sub Unit').should('exist').should('be.visible');
                cy.wrap($list).find('.orangehrm-dashboard-widget-header i').should('exist').should('be.visible');
                cy.wrap($list).find('.emp-distrib-chart .oxd-chart-legend').should('exist').then(()=>{
                    const departments = ['Engineering', 'Sales & Marketing', 'Administration', 'Finance', 'Human Resources', 'Client Services', 'Unassigned'];
                    departments.forEach((department) => {
                    cy.get('.emp-distrib-chart .oxd-chart-legend').contains(department).should('exist');
                     });
                })
            }
        })

    }

    EmployeeDistributionbyLocation(){
        cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--white.orangehrm-dashboard-widget').each(($list,index)=>{
            if(index === 6){
                cy.wrap($list).find('.orangehrm-dashboard-widget-header p').should('have.text','Employee Distribution by Location').should('exist');
                cy.wrap($list).find('.orangehrm-dashboard-widget-header i').should('exist');
                cy.wrap($list).find('.oxd-chart-legend').should('exist').then(()=>{
                    const locations = ['New York Sales Office','Canadian Regional HQ','Texas R&D','HQ - CA, USA','Unassigned'];
                    locations.forEach((location)=>{
                        cy.get('.oxd-chart-legend').contains(location).should('exist');
                    }) 
                })
            }
        })
    }

    footer(){
        cy.get('.oxd-layout-footer p').eq(0).should('have.text','OrangeHRM OS 5.5').should('exist');
        cy.get('.oxd-layout-footer p').eq(1).should('have.text','© 2005 - 2023 OrangeHRM, Inc. All rights reserved.').should('exist');
        cy.get('.oxd-layout-footer a').should('have.attr','href','http://www.orangehrm.com').should('exist');

    }




}