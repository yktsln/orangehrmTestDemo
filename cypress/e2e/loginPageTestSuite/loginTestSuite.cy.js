
import { loginTest } from "./login"
const login = new loginTest;

beforeEach(()=>{
  login.navigate();
})

describe('Login Test Suite', () => {

  it('Control login page elements', () => {
    login.loginElements();
    cy.log('Test complated for Login page elements ');
  });

  it('Login with valid credentials',()=>{
    login.validLogin();
    cy.log('Test complated for Login with valid credentials ');
  });

  it('Login with invalid credentials',()=>{
    login.invalidLogin();
    cy.log('Test complated for Login with invalid credentials');
  })
  
  it('Login page links',()=>{
    login.lgnPageLinks();
    cy.log('Test complated for Login page links');
  })
})