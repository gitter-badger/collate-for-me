Vue.component('Column', {
    props: ['posts'],
    template: "<div class='column'><Card v-for='post in posts' v-bind:post='post' :key='post.id'></Card></div>"
});