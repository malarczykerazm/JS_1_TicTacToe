describe('Should', function () {

    it('switch active player from X to O', function () {
        expect(switchActivePlayer('X')).toBe('O');
    });

    it('switch active player from O to X', function () {
        expect(switchActivePlayer('O')).toBe('X');
    });

    it('return the default active player (X)', function () {
        expect(switchActivePlayer('A')).toBe('X');
    });

});

describe('Should switch starter', function () {

    it('from X to O by the first move', function () {
        //given
        nextStarter = 'X';
        moveHistory = [];
        //when
        spyOn(window,'displayStatsAndNextStarter').and.returnValue(null);
        spyOn(window,'displayActivePlayer').and.returnValue(null);
        //then
        expect(displayStatsAndNextStarter()).toBe(null);
        expect(displayActivePlayer(nextStarter)).toBe(null);
        expect(switchStarter()).toBe('O');
    });

    it('from O to X by the first move', function () {
        //given
        nextStarter = 'O';
        moveHistory = [];
        //when
        spyOn(window,'displayStatsAndNextStarter').and.returnValue(null);
        spyOn(window,'displayActivePlayer').and.returnValue(null);
        //then
        expect(displayStatsAndNextStarter()).toBe(null);
        expect(displayActivePlayer(nextStarter)).toBe(null);
        expect(switchStarter()).toBe('X');
    });
    
    it('from X to O by the nth move', function () {
        //given
        nextStarter = 'X';
        moveHistory = [];
        moveHistory.push(new singleMove(1, 'X', "11"));
        //when
        spyOn(window,'displayStatsAndNextStarter').and.returnValue(null);
        //then
        expect(displayStatsAndNextStarter()).toBe(null);
        expect(switchStarter()).toBe('O');
    });
    
    it('from O to X by the nth move', function () {
        //given
        nextStarter = 'O';
        moveHistory = [];
        moveHistory.push(new singleMove(1, 'X', "11"));
        //when
        spyOn(window,'displayStatsAndNextStarter').and.returnValue(null);
        //then
        expect(displayStatsAndNextStarter()).toBe(null);
        expect(switchStarter()).toBe('X');
    });

});

