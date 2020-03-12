<template>
    <div id="new-article-container">
        <div id="new-article">
            <h2>Новая статья</h2>
            <input id="input-title" 
            type="text" 
            placeholder="Заголовок статьи"
            v-model="newTitle">
            <br>
            <textarea id="textarea-text" 
            placeholder="Текст статьи"
            v-model="newText"></textarea>
            <button @click="newArticle">Опубликовать</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewArticle",
    data(){
        return{
            newTitle: "",
            newText: ""
        }
    },
    methods: {
        newArticle(){
            let newArticle = 
            {
                title: this.newTitle, 
                text: this.newText
            }
            if(newArticle.title.length == 0){
                alert("Введите заголовок");
                return;
            }
            if(newArticle.text.length == 0){
                alert("Введите текст");
                return;
            }
            this.$emit("add-article", newArticle);
            this.newTitle = "";
            this.newText = "";
        }
    }
}
</script>

<style scoped>
#new-article-container{
    display: flex;
    justify-content: center;
}
h2{
    color:rgb(55, 60, 61);
    font-family: 'Roboto Slab';
    margin: 0.5rem;
}
#new-article{
    border: 1px outset white;
    width: 26rem;
    padding: 0 1rem 1rem 1rem;
    border-radius: 5px;
    background-color: rgba(204, 243, 255, 0.8);
    box-shadow: 0px 0px 8px #ccc;
    margin-top: 1rem;
    margin-bottom: 6rem;
}
input{
    width: 100%;
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid darkgray;
    font-family: 'Roboto Slab';
    padding: 0.1rem 0.5rem;
}
textarea{
    width: 100%;
    box-sizing: border-box;
    resize: vertical;
    margin: 1rem 0;
    padding: 0.1rem 0.5rem;
    border-radius: 3px;
    font-family: 'Roboto Slab';
}
button{
    border-radius: 3px;
    font-family: 'Roboto Slab';
}
</style>