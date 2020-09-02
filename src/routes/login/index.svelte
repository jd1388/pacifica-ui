<div data-testid="login-page" id="page-container">
    <div id="login-panel">
        <h1>Pacifica</h1>
        <label for="username-input">Username</label>
        <input id="username-input" type="text" />
        <label for="password-input">Password</label>
        <input id="password-input" type="password" />
        <button type="button">Login</button>
    </div>
</div>

<style>
    h1 {
        color: var(--color-magenta);
        font-size: 36px;
        font-style: italic;
        margin: 0 0 48px 0;
        width: fit-content;
    }

    label {
        color: var(--color-magenta);
        font-size: 12px;
    }

    #page-container {
        align-items: center;
        background: linear-gradient(180deg, var(--color-aqua) 0%, var(--color-magenta) 100%);
        display: flex;
        justify-content: center;
        min-height: 100vh;
        width: 100%;
    }

    #login-panel {
        align-items: center;
        border: 1px solid var(--color-aqua);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.5);
        display: flex;
        flex-direction: column;
        height: 395px;
        justify-content: center;
        width: 480px;
    }
</style>
