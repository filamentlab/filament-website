import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('blogs', {path: '/blog'});
    this.route('first-blog-title', {path: '/blog/first-blog-title'});
    this.route('second-blog-title', {path: '/blog/second-blog-title'});
});

export default Router;