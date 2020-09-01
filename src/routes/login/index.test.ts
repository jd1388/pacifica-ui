import { render } from '@testing-library/svelte';

import LoginPage from './index.svelte';

describe('Login Page', () => {
    it('renders', () => {
        const { getByTestId } = render(LoginPage);
        const loginPage = getByTestId('login-page');

        expect(loginPage).toBeInTheDocument();
    });
});
