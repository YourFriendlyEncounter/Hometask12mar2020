<template>
    <footer v-bind:class="{'footer-normal': !isAltMode, 'footer-alternative': isAltMode}">
        <hr>
        <div id="flexy-footer-container">
            <div>
                <input type="checkbox" id="dark-theme-checkbox" v-model="isAltMode">
                <label for="dark-theme-checkbox">Альтернативная тема</label>
            </div>
            <h4>Copyright empty© 1917-2020</h4>
        </div>
    </footer>
</template>

<script>
export default {
    methods:{

    },
    computed:{
        isAltMode: {
            get: function(){
                return this.$root.altModeEnabled
            },
            set: function(value){
                this.$root.altModeEnabled = value
            }
        }
    }
}
</script>

<style scoped>
footer{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: rgba(54, 59, 68, 0.8);
}
.footer-normal{
    background-color: rgba(54, 59, 68, 0.8);
    transition: background-color .5s, color .5s;
}
.footer-alternative{
    background-color: rgba(255, 255, 255, 0.8);
    transition: background-color .5s, color .5s;
    color:rgb(38, 41, 46);
}
#flexy-footer-container{
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>