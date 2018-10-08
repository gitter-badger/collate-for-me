Vue.component('Card', {
    props: ['post'],
    template: "<div class='card'><h3>{{ post.text }}</h3></div>"
});