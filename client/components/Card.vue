Vue.component('Card', {
    data: function() {
        return {}
    },
    props: ['post'],
    template: "<div class='card'><h3>{{ post.text }}</h3></div>"
});