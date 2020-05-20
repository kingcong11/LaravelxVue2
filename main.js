Vue.component('coupon', {
    template: `
        <input type="text" placeholder="Enter Coupon Code" @blur="onCouponApplied"></input>
    `,

    methods: {
        onCouponApplied(){
            this.$emit('applied');
        }
    }
});

new Vue({

    el: "#root",
    data:{
        message: "sample message",
        couponApplied : false
    },

    methods: {
        onCouponApplied(){
            // alert(`Coupon Applied!! Balagaboom`);
            this.couponApplied = true;
        }
    },

});