import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  punchCopy: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date')
});

// Blog.reopenClass({
//     FIXTURES: [
//         {
//             id: 1,
//             title: "First Blog Title",
//             author: "Lindsay Trevors",
//             punchCopy: "I am writting a blog",
//             date: "05/25/2105"
//         },
//         {
//             id: 2,
//             title: "Second Blog Title",
//             author: "Trevor Davson",
//             punchCopy: "I am writting a blog",
//             publishDate: "05/22/2105"
//         }
//     ]
// });