Vue.component('Column', {
    data: function () {
	    return {
	        posts: [{
	        	'id': 1,
	            'date': 'date',
	            'title': 'title',
	            'source': 'source',
	            'preview-text': 'preview-text'
	        }, {
	        	'id': 2,
	            'date': 'date',
	            'title': 'title',
	            'source': 'source',
	            'preview-text': 'preview-text'
	        }, {
	        	'id': 3,
	            'date': 'date',
	            'title': 'title',
	            'source': 'source',
	            'preview-text': 'preview-text'
	        }, {
	        	'id': 4,
	            'date': 'date',
	            'title': 'title',
	            'source': 'source',
	            'preview-text': 'preview-text'
	        }]
		}
    },
	template: "<div class='column'><Card v-for='post in posts' v-bind:post='post' :key='post.id'></Card></div>"
});