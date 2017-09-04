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

    it('from X to O', function () {
        nextStarter = 'X';
        moveHistory = [];
        var displayStatsAndNextStarterMock = mock(displayStatsAndNextStarter());
        var displayActivePlayerMock = mock(displayActivePlayer('O'));
        expect(displayStatsAndNextStarterMock).toHaveBeenCalled();
        expect(displayActivePlayerMock).toHaveBeenCalled();
        expect(switchStarter()).toBe('O');
    });

    it('from O to X', function () {
        nextStarter = 'O';
        moveHistory = [];
        var displayStatsAndNextStarterMock = mock(displayStatsAndNextStarter());
        var displayActivePlayerMock = mock(displayActivePlayer('X'));
        expect(displayStatsAndNextStarterMock).toHaveBeenCalled();
        expect(displayActivePlayerMock).toHaveBeenCalled();
        expect(switchStarter()).toBe('X');
    });

});

