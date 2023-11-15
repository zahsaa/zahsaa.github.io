<script>
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"
    let images = [image,photo,picture,image,photo,picture]
    </script>

<title>Photo App</title>
titelfält/fliknamn*/
<h1>Photo App</h1>


<div class="photos">
    {#each images as image}
        <div class="image-wrapper">
            <img src={image} alt="flexboxrules">
        </div>
    {/each}
    
    
</div>

<style>
.photos img {
max-width: 100%;
}
.photos{
  display:flex; align-items: center; justify-content: space-around;
  max-width: 90wv;
  overflow: hidden;
}
.image-wrapper img {
max-width: 100%;
}
.image-wrapper{
    flex-wrap: wrap;
    flex:1;
    padding: 5px;
}
</style>

