export default function(){  
    this.transition(
        this.fromRoute('blogs'),
        this.toRoute('blog-first'),
        this.use('toLeft'),
        this.reverse('toRight'),
        this.debug()
    );

    this.transition(
        this.fromRoute('blogs'),
        this.toRoute('get-in-touch'),
        this.use('show-contact-form'),
        this.reverse('show-contact-form')
    );
}