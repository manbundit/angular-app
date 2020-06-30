import { dateValidator } from './date.directive';

describe('dateValidator', () => {
    it('should create an instance', () => {
        const directive = new dateValidator();
        expect(directive).toBeTruthy();
    });
});
