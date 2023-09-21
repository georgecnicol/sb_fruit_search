
describe("Search Test", function() {
    beforeEach(function () {
    // initialization logic
    });

    afterEach(function () {
        // initialization logic
            removeList();
        });

    it('should handle capitalized input', function(){
        expect(search('BANaNA').length).toBe(1); // Banana
        expect(search('BANaNA')[0]).toEqual('Banana');
    });

    it('should not find banananana', function(){
        expect(search('banananana').length).toBe(0); // Banana
    });

    it('should find partial matches', function(){
        expect(search('rran').length).toBe(3);
        expect(search('rran')[1]).toEqual('Currant');
    });

    it('should make line items', function(){
        addListItem('blueberry');
        addListItem('Strawberry');
        expect(suggestions.childElementCount).toBe(2);
    });

});