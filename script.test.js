
describe("Search handler test", function() {
    beforeEach(function () {
    // initialization logic
        typedFruit = '';
    });

    it('should handle shift, arrows, capslock, option, meta as keystroke in empty search field', function () {
        console.log('1');
        let e = {};
        for (let item of notLetters){
            e.key = item;
            expect(searchHandler(e).length).toBe(0);
            typedFruit = '';
        }
    });

    it('should handle shift, arrows, capslock, option, meta as keystroke in non-empty field', function() {
        for (let item of notLetters){
            let e = {key:'banana'};
            searchHandler(e);   // get an input we would find (so we can have a result and check to ensure
                                // that it doesn't affect the result)
            e.key = item;       // now set the key we want
            expect(searchHandler(e).length).toBe(1); // Banana
            expect(searchHandler(e)[0]).toEqual('Banana');
            typedFruit = '';
        }
    });

    it('should handle capitalized input', function(){
        let e = {key:'BANaNA'};
        expect(searchHandler(e).length).toBe(1); // Banana
        typedFruit = '';
        expect(searchHandler(e)[0]).toEqual('Banana');
    });

    it('should not find banananana', function() {
        let e = {key:'banananana'};
        expect(searchHandler(e).length).toBe(0); // Banana
    });

    it('should find partial matches', function(){
        let e = {key:'rran'};
        expect(searchHandler(e).length).toBe(3);
        typedFruit = '';
        expect(searchHandler(e)[1]).toEqual('Currant');
    });

});