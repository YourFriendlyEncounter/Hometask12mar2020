<template>
    <div id="article-container">
        <div v-for="article in articles" 
            class="article-block-all"
            v-bind:class="{ 'article-block-normal': !isAltMode, 'article-block-alternative': isAltMode }"
            :key="article.id">
            <h2>{{article.title}}</h2>
            <router-link :to="{name: 'Article', params: {title: article.title, text: article.text}}">Подробнее</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ActualArticleList",
    computed:{
        isAltMode: function(){
            return this.$root.altModeEnabled
        },
        articles: function(){
            return this.$root.articles
        }
    }
}
</script>

<style scoped>
.article-block-all{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#article-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
h2{
    margin-top: 0;
}
a{
    display:inline-block;
    padding:0.4em 1.4em;
    margin:0 6rem 0 6rem;
    border-radius:0.15em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto Slab',sans-serif;
    font-weight:400;
    color:#FFFFFF;
    background-color:#3369ff;
    box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    text-align:center;
    position:relative;
}
a:active{
    top:0.1em;
}
</style>