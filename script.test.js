
describe("Process Input Test", function() {
    beforeEach(function () {
    // initialization logic
        typedFruit = '';
    });

    afterEach(function () {
        // initialization logic
            typedFruit = '';
            removeList();
        });

    it('should handle shift, arrows, capslock, option, meta as keystroke in empty search field', function () {
        for (let item of notLetters){
            expect(processInput(item).length).toBe(0);
            typedFruit = '';
        }
    });

    it('should handle shift, arrows, capslock, option, meta as keystroke in non-empty field', function() {
        for (let item of notLetters){
            typedFruit = 'banana';
            expect(processInput(item).length).toBe(1); // Banana
            expect(processInput(item)[0]).toEqual('Banana');
            typedFruit = '';
        }
    });

    it('should handle capitalized input', function(){
        expect(processInput('BANaNA').length).toBe(1); // Banana
        typedFruit = '';
        expect(processInput('BANaNA')[0]).toEqual('Banana');
    });

    it('should not find banananana', function(){
        expect(processInput('banananana').length).toBe(0); // Banana
    });

    it('should find partial matches', function(){
        expect(processInput('rran').length).toBe(3);
        typedFruit = '';
        expect(processInput('rran')[1]).toEqual('Currant');
        typedFruit = '';
    });


});