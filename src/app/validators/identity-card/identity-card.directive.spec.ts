import { identityCardValidator } from './identity-card.directive';

describe('identityCardValidator', () => {
    it('should create an instance', () => {
        const directive = new identityCardValidator();
        expect(directive).toBeTruthy();
    });
});
