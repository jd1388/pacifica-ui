import { render } from '@testing-library/svelte';

import Nav from '../../components/Nav.svelte';

describe('Nav', () => {
    it('runs the tests', () => {
        const { getByText } = render(Nav, {
            segment: undefined
        });
        const homeElement = getByText('home');

        expect(homeElement).toBeInTheDocument();
    });
});
