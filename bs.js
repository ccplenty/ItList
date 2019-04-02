var bs = require('browser-sync').create();

bs.init({
    proxy: "https://codecamp.plentymarkets-cloud01.com/ItList",
    files: [
        'resources/js/**',
        'resources/css/**',
    ],

    serveStatic: [
        {
            route: ['/resources/js'],
            dir: 'resources/js'
        },
        {
            route: ['/resources/css'],
            dir: 'resources/css'
        },
    ],

    rewriteRules: [
        {
            match: new RegExp('http.*\\/itlist\\/js\\/(.*.js)'),
            replace: '/resources/js/$1'
        },
        {
            match: new RegExp('http.*\\/itlist\\/css\\/(.*.css)'),
            replace: '/resources/css/$1'
        },
    ]
});
