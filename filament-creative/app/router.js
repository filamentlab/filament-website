import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('blogs', {path: '/blog'});
    this.route('blog-first', {path: '/blog/first-blog'});
    this.route('blog-second', {path: '/blog/second-blog'});

    this.route('get-in-touch', {path: '/get-in-touch'});
    this.route('work', {path: '/work'});
    this.route('about', {path: '/about'});

    this.route('page-not-found', { path: '/*wildcard' });
    this.route('style-guide', { path: '/style-guide' });
});

export default Router;