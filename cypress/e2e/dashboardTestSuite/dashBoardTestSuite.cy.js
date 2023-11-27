
import { dashBoardTest } from "../dashboardTestSuite/dashBoard.js";
const dashBoard = new dashBoardTest;

beforeEach(()=>{
        dashBoard.navigate();
        dashBoard.validLogin();
})

describe('dashboard Test Suite',()=>{

    it('all dashboard widgets',()=>{
        dashBoard.dashBoards();
        dashBoard.testAtWork();
    })

})

 