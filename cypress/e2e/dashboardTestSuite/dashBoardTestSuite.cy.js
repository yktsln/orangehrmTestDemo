
import { dashBoardTest } from "../dashboardTestSuite/dashBoard.js";
const dashBoard = new dashBoardTest;

beforeEach(()=>{
        dashBoard.navigate();
        dashBoard.validLogin();
})

describe('dashboard Test Suite',()=>{

    it('all dashboard widgets',()=>{
        dashBoard.dashBoards();
    })

    it('Time at Work widget test cases',()=>{
        dashBoard.testAtWork();
    })

    it('My actions widget test cases',()=>{
        dashBoard.myActions();
    })

    it('Quick launch widget test cases',()=>{
        dashBoard.quickLaunch();
    })

    it('Buzz Latest Posts widget test cases',()=>{
        dashBoard.blatestPost();
    })

    it('Employees on Leave Today widget test cases',()=>{
        dashBoard.employeesonLeaveToday();
    })

    it('Distribution by Sub Unit widget test cases',()=>{
     dashBoard.distributionBySubUnit();
    })

    it('Employee Distribution by Location widget test cases',()=>{
        dashBoard.EmployeeDistributionbyLocation();
    })

    it.only('footer test cases',()=>{
        dashBoard.footer();
    })

})

 