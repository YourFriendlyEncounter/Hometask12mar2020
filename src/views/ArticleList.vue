<template>
    <div>
        <div id="main-container-articles">
            <ActualArticleList 
            v-if="articles.length"/>
            <h2 v-else>No articles found... So, create one!</h2>
        </div>
        <NewArticle @add-article="newArticle" />
    </div>
</template>

<script>
import NewArticle from "../components/NewArticle.vue"
import ActualArticleList from "../components/ActualArticleList.vue"
export default {
    name: "ArticleList",
    components:{
        NewArticle,
        ActualArticleList
    },
    data(){
        return{

        }
    },
    methods:{
        newArticle(article){
            article.id = this.articles.length + 1;
            this.articles.push(article);
        }
    },
    computed:{
        articles: function(){
            return this.$root.articles
        }
    }
}
</script>

<style scoped>
#main-container-articles{
    display: flex;
    justify-content: flex-start;
    align-content: center;  
}
</style>