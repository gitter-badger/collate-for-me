Vue.component('Card', {
    data: function() {
        return {}
    },
    props: ['post'],
    template: "<div class='card'><h3>{{ post.title }}</h3></div>"
});