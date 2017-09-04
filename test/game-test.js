describe('Should', function () {
    it('switch active player from X to O', function () {
        expect(switchActivePlayer('X')).toBe('O');
    });

    it('switch active player from O to X', function () {
        expect(switchActivePlayer('O')).toBe('X');
    });

    it('not switch active player', function () {
        expect(switchActivePlayer('A')).toBe(undefined);

    });
});
