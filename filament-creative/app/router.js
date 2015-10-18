import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('blogs', {path: '/blog'});
    this.route('blog-first', {path: '/blog/first-blog'});
    this.route('blog-second', {path: '/blog/second-blog'});
    this.route('page-not-found', { path: '/*wildcard' });
    this.route('style-guide', { path: '/style-guide' });
});

export default Router;