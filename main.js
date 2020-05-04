Vue.component('task', {

    template: '<li><slot></slot></li>',


    data() {
        return {
            message: "sample message from component"
        };
    }

});




new Vue({

    el: "#root",
    data:{

    }

});