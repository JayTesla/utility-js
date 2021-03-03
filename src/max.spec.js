const max = require('./max');

describe('max', () => {

    it('Max of the list [1,2,3,4]', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });  
    
    it('Max of the list [4,3,2,1]', () => {
        expect(max([4,3,2,1])).toEqual(4);
    }); 
    
    it('Max of the list [21,432,43,555,23,1]', () => {
        expect(max([21,432,43,555,23,1])).toEqual(555);
    });

    it('Max of the list [60]', () => {
        expect(max([60])).toEqual(60);
    }); 
    
    it('Max of the list []', () => {
        expect(max([])).toEqual(undefined);
    });

})
