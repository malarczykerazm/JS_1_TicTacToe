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
        expect(Game.switchStarter()).toBe('O');
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
        expect(Game.switchStarter()).toBe('X');
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
        expect(Game.switchStarter()).toBe('O');
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
        expect(Game.switchStarter()).toBe('X');
    });

    it('from wrong sign to X by the nth move', function () {
        //given
        nextStarter = 'F';
        moveHistory = [];
        moveHistory.push(new singleMove(1, 'X', "11"));
        //when
        spyOn(window,'displayStatsAndNextStarter').and.returnValue(null);
        //then
        expect(displayStatsAndNextStarter()).toBe(null);
        expect(Game.switchStarter()).toBe('X');
    });
    
    it('from wrong sign to X by the nth move', function () {
        //given
        nextStarter = 'A';
        moveHistory = [];
        moveHistory.push(new singleMove(1, 'X', "11"));
        //when
        spyOn(window,'displayStatsAndNextStarter').and.returnValue(null);
        //then
        expect(displayStatsAndNextStarter()).toBe(null);
        expect(Game.switchStarter()).toBe('X');
    });
});

