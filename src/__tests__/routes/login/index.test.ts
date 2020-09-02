import { render } from '@testing-library/svelte';

import LoginPage from '../../../routes/login/index.svelte';

describe('Login Page', () => {
    it('renders', () => {
        const { getByTestId } = render(LoginPage);
        const loginPage = getByTestId('login-page');

        expect(loginPage).toBeInTheDocument();
    });

    it('has an input for a username', () => {
        const { getByLabelText } = render(LoginPage);
        const usernameInput = getByLabelText('Username');

        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput).toHaveAttribute('type', 'text');
    });

    it('has an input for a password', () => {
        const { getByLabelText } = render(LoginPage);
        const usernameInput = getByLabelText('Password');

        expect(usernameInput).toBeInTheDocument();
        expect(usernameInput).toHaveAttribute('type', 'password');
    });

    it('has a login button', () => {
        const { getByText } = render(LoginPage);
        const loginButton = getByText('Login');

        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveAttribute('type', 'button');
    });
});
