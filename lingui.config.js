const config = {
    catalogs: [
        {
            "path": "./locales/{locale}",
            "include": ["app"],
        },
    ],
    "locales": ["en-us", "es-es"],
    "sourceLocale": "en-us",
    "fallbackLocales": {
        "default": "en-us",
    },

    "formatOptions": {
        "origins": false,
    },
}

module.exports = config