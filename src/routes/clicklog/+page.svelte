<script>
    let lettersString = "ABCDEFG".split("")
    let letters = [];
    let username = "";



    for(let letter of lettersString){
        letters.push({letter:letter,top:Math.random()*500,left:Math.random()*500})

    }
    console.log(letters)

    setInterval(()=>{
        letters = [];
        for(let letter of lettersString){
        letters.push({letter:letter,top:Math.random()*500,left:Math.random()*500})

        }
    },2000)


    function addletter(letter,i){
        username += letter;
        letters[i].top = Math.random()*500
        letters[i].left = Math.random()*500
        letters = letters;
    }




</script>
<h1>logga in som {username}</h1>
<div class= "container">
{#each letters as {letter,top,left},i}
    <button on:click={()=>addletter(letter,i)} style="position:sticky;top:{top}px; left:{left}px;">{letter}</button>
{/each}
</div>

<style>
    .container{
        background-color: aquamarine;
        width: 500px;
        height: 500px;
        margin: auto;

    }


</style>