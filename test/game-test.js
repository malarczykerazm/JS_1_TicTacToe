describe('Should init', function () {

    it('new competition', function () {
        //given
        var dummyBoardCell = document.createElement('td');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
        numberOfWinsX = 1;
        numberOfWinsO = 4;
        numberOfDraws = 2;
        spyOn(Game, 'gameInit').and.returnValue(null);
        //when
        Game.competitionInit();
        //then
        expect(Game.gameInit()).toBe(null);
        expect(numberOfWinsX).toEqual(0);
        expect(numberOfWinsO).toEqual(0);
        expect(numberOfDraws).toEqual(0);
    });

});

describe('Should switch starter', function () {

    it('from X to O by the first move', function () {
        //given
        var dummyBoardCell = document.createElement('td');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
        spyOn(window, 'displayActivePlayer').and.returnValue(null);
        spyOn(window, 'displayStatsAndNextStarter').and.returnValue(null);
        spyOn(window, 'displayMoveHistory').and.returnValue(null);
        spyOn(window, 'displayNumberOfMoves').and.returnValue(null);
        spyOn(window, 'displayBoard').and.returnValue(null);
        var testMH = [];
        var testBoard = [[], [], []];
        //when
        Game.competitionInit();
        //then
        expect(displayStatsAndNextStarter('O')).toBe(null);
        expect(displayActivePlayer('X')).toBe(null);
        expect(displayMoveHistory(testMH)).toBe(null);
        expect(displayNumberOfMoves(testMH.length)).toBe(null);
        expect(displayBoard(testBoard)).toBe(null);
        expect(Game.switchStarter()).toBe('O');
    });

    it('from O to X by the first move', function () {
        //given
        var dummyBoardCell = document.createElement('td');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
        spyOn(window, 'displayActivePlayer').and.returnValue(null);
        spyOn(window, 'displayStatsAndNextStarter').and.returnValue(null);
        spyOn(window, 'displayMoveHistory').and.returnValue(null);
        spyOn(window, 'displayNumberOfMoves').and.returnValue(null);
        spyOn(window, 'displayBoard').and.returnValue(null);
        var testMH = [];
        var testBoard = [[], [], []];
        //when
        Game.competitionInit();
        Game.switchStarter();
        //then
        expect(displayStatsAndNextStarter('O')).toBe(null);
        expect(displayActivePlayer('X')).toBe(null);
        expect(displayMoveHistory(testMH)).toBe(null);
        expect(displayNumberOfMoves(testMH.length)).toBe(null);
        expect(displayBoard(testBoard)).toBe(null);
        expect(Game.switchStarter()).toBe('X');
    });

    it('from X to O by the nth move', function () {
        //given
        var dummyBoardCell = document.createElement('td');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
        spyOn(window, 'displayActivePlayer').and.returnValue(null);
        spyOn(window, 'displayStatsAndNextStarter').and.returnValue(null);
        spyOn(window, 'displayMoveHistory').and.returnValue(null);
        spyOn(window, 'displayNumberOfMoves').and.returnValue(null);
        spyOn(window, 'displayBoard').and.returnValue(null);
        var testMH = [];
        var testBoard = [[], [], []];
        //when
        Game.competitionInit();
        //then
        expect(displayStatsAndNextStarter('O')).toBe(null);
        expect(displayActivePlayer('X')).toBe(null);
        expect(displayMoveHistory(testMH)).toBe(null);
        expect(displayNumberOfMoves(testMH.length)).toBe(null);
        expect(displayBoard(testBoard)).toBe(null);
        expect(Game.switchStarter()).toBe('O');
    });

    it('from O to X by the nth move', function () {
        //given
        var dummyBoardCell = document.createElement('td');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
        spyOn(window, 'displayActivePlayer').and.returnValue(null);
        spyOn(window, 'displayStatsAndNextStarter').and.returnValue(null);
        spyOn(window, 'displayMoveHistory').and.returnValue(null);
        spyOn(window, 'displayNumberOfMoves').and.returnValue(null);
        spyOn(window, 'displayBoard').and.returnValue(null);
        var testMH = [];
        var testBoard = [[], [], []];
        //when
        Game.competitionInit();
        Game.switchStarter();
        //then
        expect(displayStatsAndNextStarter('O')).toBe(null);
        expect(displayActivePlayer('X')).toBe(null);
        expect(displayMoveHistory(testMH)).toBe(null);
        expect(displayNumberOfMoves(testMH.length)).toBe(null);
        expect(displayBoard(testBoard)).toBe(null);
        expect(Game.switchStarter()).toBe('X');
    });

});

describe('Should', function () {
    
        it('put new X on the board and return new moveHistory', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            dummyBoardCell.id = "31";
            var expectedMoveHistory = [new singleMove(1, 'X', "31")];
            var testBoard = [["", "", ""], ["", "", ""], ["X", "", ""]];
            spyOn(window,'displayBoard');
            spyOn(window,'displayActivePlayer');
            spyOn(window,'displayNumberOfMoves');
            spyOn(window,'displayMoveHistory');
            spyOn(WinnerChecker, 'checkIfEndOfGame');
            //when
            Game.competitionInit();
            var actualMoveHistory = Game.putChar(dummyBoardCell);
            //then
            expect(actualMoveHistory).toEqual(expectedMoveHistory);
            expect(WinnerChecker.checkIfEndOfGame).toHaveBeenCalledWith('X', testBoard, 'X', actualMoveHistory);
            expect(displayBoard).toHaveBeenCalledWith(testBoard);
            expect(displayActivePlayer).toHaveBeenCalledWith('O');
            expect(displayNumberOfMoves).toHaveBeenCalledWith(actualMoveHistory.length);
            expect(displayMoveHistory).toHaveBeenCalledWith(actualMoveHistory);
        });
            
        it('put new O (switched from X) on the board and return new moveHistory', function () {
            //given
            var dummyBoardCell1 = document.createElement('td');
            dummyBoardCell1.id = "31";
            var dummyBoardCell2 = document.createElement('td');
            dummyBoardCell2.id = "22";
            var expectedMoveHistory = [new singleMove(1, 'X', "31"), new singleMove(2, 'O', "22")];
            var testBoard = [["", "", ""], ["", "O", ""], ["X", "", ""]];
            spyOn(window,'displayBoard');
            spyOn(window,'displayActivePlayer');
            spyOn(window,'displayNumberOfMoves');
            spyOn(window,'displayMoveHistory');
            spyOn(WinnerChecker, 'checkIfEndOfGame');
            //when
            Game.competitionInit();
            Game.putChar(dummyBoardCell1)
            var actualMoveHistory = Game.putChar(dummyBoardCell2);
            //then
            expect(actualMoveHistory).toEqual(expectedMoveHistory);
            expect(WinnerChecker.checkIfEndOfGame).toHaveBeenCalledWith('X', testBoard, 'X', actualMoveHistory);
            expect(displayBoard).toHaveBeenCalledWith(testBoard);
            expect(displayActivePlayer).toHaveBeenCalledWith('X');
            expect(displayNumberOfMoves).toHaveBeenCalledWith(actualMoveHistory.length);
            expect(displayMoveHistory).toHaveBeenCalledWith(actualMoveHistory);
        });
           
        it('not put new char on the board and return new moveHistory', function () {
            //given
            var dummyBoardCell1 = document.createElement('td');
            dummyBoardCell1.id = "11";
            var dummyBoardCell2 = document.createElement('td');
            dummyBoardCell2.id = "11";
            var expectedMoveHistory = [new singleMove(1, 'X', "11")];
            var testBoard = [["X", "", ""], ["", "", ""], ["", "", ""]];
            spyOn(window,'displayBoard');
            spyOn(window,'displayActivePlayer');
            spyOn(window,'displayNumberOfMoves');
            spyOn(window,'displayMoveHistory');
            //when
            Game.competitionInit();
            Game.putChar(dummyBoardCell1)
            var actualMoveHistory = Game.putChar(dummyBoardCell2);
            //then
            expect(actualMoveHistory).toEqual(expectedMoveHistory);
            expect(displayBoard).toHaveBeenCalledWith(testBoard);
            expect(displayActivePlayer).toHaveBeenCalledWith('O');
            expect(displayNumberOfMoves).toHaveBeenCalledWith(actualMoveHistory.length);
            expect(displayMoveHistory).toHaveBeenCalledWith(actualMoveHistory);
        });

    });
    
describe('Should', function () {
    
        it('undo last move and return shortened moveHistory', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            dummyBoardCell.id = "31";
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            var expectedMoveHistory = [];
            var testBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
            spyOn(window,'displayBoard');
            spyOn(window,'displayActivePlayer');
            spyOn(window,'displayNumberOfMoves');
            spyOn(window,'displayMoveHistory');
            spyOn(window,'displayStatsAndNextStarter');
            //when
            Game.competitionInit();
            Game.putChar(dummyBoardCell);
            var actualMoveHistory = Game.undoMove();
            //then
            expect(actualMoveHistory).toEqual(expectedMoveHistory);
            expect(displayBoard).toHaveBeenCalledWith(testBoard);
            expect(displayActivePlayer).toHaveBeenCalledWith('X');
            expect(displayNumberOfMoves).toHaveBeenCalledWith(actualMoveHistory.length);
            expect(displayMoveHistory).toHaveBeenCalledWith(actualMoveHistory);
            expect(displayStatsAndNextStarter).toHaveBeenCalledWith('X');
        });
        
        it('not undo last move due to empty moveHistory', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            var expectedMoveHistory = [];
            var testBoard = [["", "", ""], ["", "", ""], ["", "", ""]];
            spyOn(window,'displayBoard');
            spyOn(window,'displayActivePlayer');
            spyOn(window,'displayNumberOfMoves');
            spyOn(window,'displayMoveHistory');
            spyOn(window,'displayStatsAndNextStarter');
            //when
            Game.competitionInit();
            var actualMoveHistory = Game.undoMove();
            //then
            expect(actualMoveHistory).toEqual(expectedMoveHistory);
            expect(displayBoard).toHaveBeenCalledWith(testBoard);
            expect(displayActivePlayer).toHaveBeenCalledWith('X');
            expect(displayNumberOfMoves).toHaveBeenCalledWith(actualMoveHistory.length);
            expect(displayMoveHistory).toHaveBeenCalledWith(actualMoveHistory);
            expect(displayStatsAndNextStarter).toHaveBeenCalledWith('X');
        });
        
        it('undo last move, decrease namber of X wins and return shortened moveHistory', function () {
            //given
            var dummyBoardCell = document.createElement('td');
            document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyBoardCell);
            var dummyBoardCell1 = document.createElement('td');
            dummyBoardCell1.id = "31";
            var dummyBoardCell2 = document.createElement('td');
            dummyBoardCell2.id = "12";
            var dummyBoardCell3 = document.createElement('td');
            dummyBoardCell3.id = "32";
            var dummyBoardCell4 = document.createElement('td');
            dummyBoardCell4.id = "11";
            var dummyBoardCell5 = document.createElement('td');
            dummyBoardCell5.id = "33";
            var expectedMoveHistory = [(new singleMove(1, 'X', "31")),(new singleMove(2, 'O', "12")),(new singleMove(3, 'X', "32")),(new singleMove(4, 'O', "11"))];
            var testBoard = [["O", "O", ""], ["", "", ""], ["X", "X", ""]];
            spyOn(window,'displayBoard');
            spyOn(window,'displayActivePlayer');
            spyOn(window,'displayNumberOfMoves');
            spyOn(window,'displayMoveHistory');
            spyOn(window,'displayStatsAndNextStarter');
            //when
            Game.competitionInit();
            Game.putChar(dummyBoardCell1);
            Game.putChar(dummyBoardCell2);
            Game.putChar(dummyBoardCell3);
            Game.putChar(dummyBoardCell4);
            Game.putChar(dummyBoardCell5);
            var actualMoveHistory = Game.undoMove();
            //then
            expect(numberOfWinsX).toEqual(0);
            expect(actualMoveHistory).toEqual(expectedMoveHistory);
            expect(displayBoard).toHaveBeenCalledWith(testBoard);
            expect(displayActivePlayer).toHaveBeenCalledWith('X');
            expect(displayNumberOfMoves).toHaveBeenCalledWith(actualMoveHistory.length);
            expect(displayMoveHistory).toHaveBeenCalledWith(actualMoveHistory);
            expect(displayStatsAndNextStarter).toHaveBeenCalledWith('X');
        });

    });

