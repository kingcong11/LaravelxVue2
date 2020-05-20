window.Event = new Vue();

Vue.component('coupon', {
    template: `
        <input type="text" placeholder="Enter Coupon Code" @blur="onCouponApplied"></input>
    `,

    methods: {
        onCouponApplied(){
            Event.$emit('applied');
        }
    }
});

new Vue({

    el: "#root",

    data:{
        message: "sample message",
        couponApplied : false
    },

    created(){
        Event.$on('applied', () => {

            alert(`Global Event triggered, handling it`);
            this.couponApplied = true;

        });
    }

});