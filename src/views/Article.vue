<template>
    <div id="article-container">
        <h1>{{title}}</h1>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    computed:{

    },
}
</script>

<style scoped>
#article-container{
    margin: 2rem 20%;
    background-color: rgba(204, 243, 255, 0.8);
    box-shadow: 0px 0px 8px #ccc;
    color:rgba(45, 48, 49, 0.8);
    padding: 1rem 2rem;
    font-size: 120%;
    font-family: 'Roboto Slab';
    border-radius: 5px;
}
</style>