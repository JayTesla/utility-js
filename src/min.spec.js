const min = require('./min');

describe('min', () => {

    it('min of the list [1,2,3,4]', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });  
    
    it('min of the list [4,3,2,1]', () => {
        expect(min([4,3,2,1])).toEqual(1);
    }); 
    
    it('min of the list [21,432,43,555,23,1]', () => {
        expect(min([21,432,43,555,23,1])).toEqual(1);
    });

    it('min of the list [60]', () => {
        expect(min([60])).toEqual(60);
    }); 
    
    it('min of the list []', () => {
        expect(min([])).toEqual(undefined);
    });

})
