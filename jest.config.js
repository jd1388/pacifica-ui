module.exports = {
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    transform: {
        "^.+\\.svelte$": [
            "svelte-jester",
            {
                "preprocess": true
            }
        ],
        "^.+\\.ts$": "ts-jest"
    },
}
