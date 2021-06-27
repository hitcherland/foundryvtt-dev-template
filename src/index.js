import './index.sass';
import HelloWorldApplication from './example-application/application';
import templates from './**/*.@(html|handlebars|hbs)';

// convert webpack'd template files to handlebar partials.
function activateTemplates() {
    templates.forEach(function(module) {
        const template = module.default;
        const compiled = Handlebars.compile(template.source);
        Handlebars.registerPartial(template.path, compiled);
        _templateCache[template.path] = compiled;
    });
}

function initialise() {
    activateTemplates();

    game.sample = {
        HelloWorldApplication
    };
}

// Run once when the Foundry VTT software begins initialisation.
Hooks.once('init', function () {
    console.log("We have loaded our sample module");
    initialise();
});

Hooks.on('ready', function() {
    new game.sample.HelloWorldApplication().render(true);
});

if (module.hot) {
    if (module.hot) {
        module.hot.accept();
        
        initialise();

        // Refresh all open windows with new css and/or html
        Object.values(ui.windows).forEach(function(window) {
            window.render(true);
        });
    }
}