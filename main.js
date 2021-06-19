
Vue.component('greetings', Greeting);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    template: `
    <div>
        <h1> {{message}} </h1>

        <h2> {{messageWithName}} </h2>    
        <h2> {{messageWithName2}} </h2>

        <input type="text" id="lname" :name="messageWithName">
        <input type="text" id="lname" :name="message">
        <input type="text" id="lname" :name="messageWithCounter(1)">

        <greetings/>

    </div>

    `,
    created: function(){

    },
    mounted: function(){

    },
    computed: {
        messageWithName() {
            return this.message + ' Ian'
        },

        messageWithName2: function() {
            return this.messageWithCounter(1)
        }
    },
    methods: {
        messageWithCounter: function(a){
            return this.message + 'Ian ' + a
        }
    }
})