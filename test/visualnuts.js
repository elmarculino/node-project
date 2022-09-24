const assert = require('assert');
const visualnuts = require("../src/visualnuts.js")

describe('visualnuts', () => {
    it('should return 1 for visualnuts of 1',  () => {
        assert.equal(visualnuts(1), 1)
    });
    
    it('should return 2 for visualnuts of 2', () => {
        assert.equal(visualnuts(2), 2)
    });
    
    it('should return Visual for visualnuts of 3', () => {
        assert.equal(visualnuts(3), 'Visual')
    });

    it('should return Nuts for visualnuts of 5', () => {
        assert.equal(visualnuts(5), 'Nuts')
    });

    it('should return Visual Nuts for visualnuts of 150', () => {
        assert.equal(visualnuts(150), 'Visual Nuts')
    });

    it('should return Nuts for visualnuts of 500', () => {
        assert.equal(visualnuts(500), 'Nuts')
    });
    
    it('should return Visual Nuts for visualnuts of 90000000', () => {
        assert.equal(visualnuts(90000000), 'Visual Nuts')
    });

    it('should return undefined for visualnuts of undefined', () => {
        assert.equal(visualnuts(undefined), undefined)
    })
    
});
