export default function(){  
  this.transition(
    this.fromRoute('blogs'),
    this.toRoute('blog-first'),
    this.use('toLeft'),
    this.reverse('toRight'),
    this.debug()
  );
}