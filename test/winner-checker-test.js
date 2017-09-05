describe('Should', function () {
  
        it('not confirm the end of the game due to empty board', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'X';
            testBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
            testNextStarter = 'X';
            testMoveHistory = [];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe(undefined);
        });
    
        it('not confirm the end of the game due to too short moveHistory', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'X';
            testBoard = [["X", "X", "X"], ["", "", ""], ["", "", ""]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(7, 'X', "13")), (new singleMove(8, 'O', "23"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe(undefined);
        });
        
        it('confirm the end of the game due to X on row 1', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'X';
            testBoard = [["X", "X", "X"], ["", "", ""], ["", "", ""]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player X won on row 1!");
        });
                
        it('confirm the end of the game due to O on row 2', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'O';
            testBoard = [["X", "", ""], ["O", "O", "O"], ["", "X", ""]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player O won on row 2!");
        });
                      
        it('confirm the end of the game due to X on row 3', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'X';
            testBoard = [["X", "", ""], ["O", "O", ""], ["X", "X", "X"]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player X won on row 3!");
        });
                   
        it('confirm the end of the game due to X on column 1', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'X';
            testBoard = [["X", "", ""], ["X", "O", "O"], ["X", "X", ""]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player X won on column 1!");
        });
                      
        it('confirm the end of the game due to O on column 2', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'O';
            testBoard = [["X", "O", ""], ["O", "O", ""], ["X", "O", "X"]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player O won on column 2!");
        });
                              
        it('confirm the end of the game due to O on column 3', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'O';
            testBoard = [["X", "", "O"], ["O", "", "O"], ["X", "", "O"]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player O won on column 3!");
        });
                               
        it('confirm the end of the game due to X on diagonal', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'X';
            testBoard = [["X", "", "O"], ["O", "X", "O"], ["X", "", "X"]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player X won on diagonal!");
        });
                                       
        it('confirm the end of the game due to O on row diagonal', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'O';
            testBoard = [["O", "", "X"], ["X", "O", "O"], ["X", "", "O"]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Player O won on diagonal!");
        });
                                               
        it('confirm the end of the game due draw', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'O';
            testBoard = [["X", "O", "X"], ["X", "O", "O"], ["O", "X", "X"]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe("Draw!");
        });
                                                       
        it('not confirm the end of the game (draw) due to too long moveHistory', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            testPlayerChar = 'O';
            testBoard = [["X", "O", "X"], ["X", "O", "O"], ["O", "X", "X"]];
            testNextStarter = 'X';
            testMoveHistory = [(new singleMove(1, 'X', "11")), (new singleMove(2, 'X', "12")), (new singleMove(3, 'X', "13")), (new singleMove(4, 'O', "33")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32")), (new singleMove(5, 'O', "32"))];
            //when
            var testMessage = WinnerChecker.checkIfEndOfGame(testPlayerChar, testBoard, testNextStarter, testMoveHistory);
            //then
            expect(testMessage).toBe(undefined);
        });

    });