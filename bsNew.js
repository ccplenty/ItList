const config = require('./config.json');
const bs = require('browser-sync').create();
//gdg
bs.init({
    proxy: getLiveUrl(),

    /* Watch following files/directories and refresh connected browsers. (Injecting live without reload for CSS)*/
    files: [config.watchFilesForChange],

    /* Replace remote JS resources with plugin CWD ones */
    rewriteRules: [
        getJsRewriteRule()
    ],

    /* Redirect request for JS resources to load from local machine instead of live system plugin CWD */
    serveStatic: [
        getJsStaticRule()
    ]
});

function getJsRewriteRule()
{
    let jsRewriteRule = {};
    if (config.loadJsFromCWD.enable) {

        jsRewriteRule = {
            match: getRegexJsLive(),
            replace: getReplacementJsCwdPath()
        };
    }

    return jsRewriteRule;
}

function getJsStaticRule()
{
    let staticRoute = {};
    if (config.loadJsFromCWD && config.loadJsFromLocalMachine) {
        staticRoute = {
            route: ["/"+config.loadJsFromCWD.localJsPath],
            dir: config.loadJsFromCWD.localJsPath
        }
    }

    return staticRoute;
}

function getLiveUrl()
{
    return config.liveSystem + config.pluginName;
}

function getRegexJsLive()
{
    let remoteLocationName = config.pluginName.toLowerCase();

    return new RegExp("http.*\\/" + remoteLocationName + "\\/js\\/(.*.js)");
}

function getReplacementJsCwdPath()
{
    return config.loadJsFromCWD.localJsPath + "/$1"
}
