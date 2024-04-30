const config = {
    catalogs: [
        {
            "path": "./locales/{locale}",
            "include": ["app"],
        },
    ],
    "locales": ["en-en", "es-es"],
    "sourceLocale": "en-en",
    "fallbackLocales": {
        "default": "en-en",
    },

    "formatOptions": {
        "origins": false,
    },
}

module.exports = config