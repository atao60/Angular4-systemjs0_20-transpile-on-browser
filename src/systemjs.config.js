/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

    var paths = {
        'npm:': '../node_modules',
        'angular:': '../node_modules/@angular', // requiered inside packages' mapping 
    };

    // map tells the System loader where to look for things
    var map = {
        // the demo code is under the src/app folder
        'app': 'app',
        // angular libraries
        '@angular': 'angular:',
        'angular-in-memory-web-api': 'npm:/angular-in-memory-web-api/bundles',
        'ngx-webstorage': 'npm:/ngx-webstorage',
        // other libraries
        'rxjs': 'npm:/rxjs',
        'typescript': 'npm:/typescript/lib/typescript.js',
        'ts': 'npm:/plugin-typescript/lib/plugin.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app: { 
            defaultExtension: 'ts',
            meta: {
                './*.js': {
                    loader: 'systemjs-angular-loader.js'
                }
            }
        },
        rxjs: { defaultExtension: 'js' },
        'ngx-webstorage': {main: 'bundles/core.umd.js', defaultExtension: 'js'},
        'angular-in-memory-web-api': { defaultExtension: 'js' }
    };
  
    // @angular library list
    var ngPackages = [
        [ 'animations', 'browser' ],
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        [ 'platform-browser', 'animations' ],
        'platform-browser-dynamic',
        'router',
        'upgrade',
      ];

    // @angular libraries as umd bundles
    function setNgUmdPackages(ngPackages) {
        ngPackages.forEach( (ngp/*ngPackage*/) => {
            ngp = typeof ngp !== 'string' ? ngp : [ ngp ];
            var name = ngp.shift();
            var suffixes = ngp;
            var tag = '@angular/' + name;
            var path = 'bundles/' + name + '.umd.js';
            packages[ tag ] = { 
                'main': path,
                defaultExtension: 'js'
            };
            if (! suffixes || ! suffixes.length) return;
            var map = {};
            suffixes.forEach( (suffix) => {
                var key = './' + suffix;
                var path = 'angular:/' + name + '/bundles/' + name + '-' + suffix + '.umd.js';
                map[ key ] = path;
            });
            packages[ tag ].map = map;
        });
    }

    setNgUmdPackages(ngPackages);
    System.config({
        warnings: true,
        paths: paths,
        map: map,
        packages: packages,
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        }
    });

    global.bootstrapping = System
        .import('./main.ts')
        .then(
        function handleResolve() {

            console.info("System.js successfully bootstrapped app.");

        },
        function handleReject(error) {

            console.warn("System.js could not bootstrap the app.");
            console.error(error);

            return (Promise.reject(error));

        });

})(this);