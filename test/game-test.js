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

