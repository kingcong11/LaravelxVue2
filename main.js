Vue.component('modal',{

    template: `

        <div class="modal is-active">
            <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close" @click="$emit('close-modal')"></button>
                    </header>
                    <section class="modal-card-body">
                        <slot></slot>
                    </section>
                    <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" @click="$emit('close-modal')">Cancel</button>
                    </footer>
                </div>
        </div>
    
    
    `


});

new Vue({

    el: "#root",
    data:{
        message: "sample message",
        showModal: false
    }



});