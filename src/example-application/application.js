import html from './application.html';

export default class HelloWorldApplication extends Application {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: html.path
        })
    }
}