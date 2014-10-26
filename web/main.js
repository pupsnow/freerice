require.config({
    baseUrl: '/test',
    paths: {
        'text': 'lib/text/text',
        jquery: 'lib/jquery/dist/jquery.min',
        json: 'lib/require/json',
        router: 'router',
        underscore: 'lib/underscore/underscore',
        mustache: 'lib/mustache/mustache',
        backbone: 'lib/backbone/backbone',
        "jquery-cookie": "lib/jquery.cookie/jquery.cookie"
    },
    shim: {
        "jquery-cookie": ["jquery"],
        underscore: {
            exports: '_'
        }
    }
});

require(['app'], function(App){
    App.initialize();
});