export default function(){  
    this.transition(
        this.toRoute(['index', 'about', 'work', 'blogs', 'blog-first', 'blog-second', 'style-guide']),
        this.use('toLeft', {duration: 300}),
        this.debug()
    );

    this.transition(
        // --------------------- BLOG to BLOG-SINGLE ----------------------------------- //
        this.fromRoute('blogs'),
        this.toRoute('blog-first'),
        this.use('explode', {
          matchBy: 'data-nav',
          use: [ 'flyTo', { duration: 1000 } ]
        }, {
          use: [ 'crossFade', { duration: 1000 } ]
        }),

        // --------------------- BLOG-SINGLE to BLOG ----------------------------------- //
        this.reverse('explode', {
          matchBy: 'data-nav',
          use: [ 'flyTo', { duration: 1000 } ]
        }, {
          use: [ 'crossFade', { duration: 1000 } ]
        })
    );

    this.transition(
        // --------------------- BLOG to BLOG-SINGLE ----------------------------------- //
        this.fromRoute('blogs'),
        this.toRoute('blog-second'),
        this.use('explode', {
          matchBy: 'data-nav-2',
          use: [ 'flyTo', { duration: 1000 } ]
        }, {
          use: [ 'crossFade', { duration: 1000 } ]
        }),

        // --------------------- BLOG-SINGLE to BLOG ----------------------------------- //
        this.reverse('explode', {
          matchBy: 'data-nav-2',
          use: [ 'flyTo', { duration: 1000 } ]
        }, {
          use: [ 'crossFade', { duration: 1000 } ]
        })
    );
}