<script>
    let username = '';
    let password = '';
    let lettersString = "こんにちは元気ですか？!+_-*HELLO1234ABCDEFGHIJK".split("")
    let letters = [];
    

    
    
    
    for(let letter of lettersString){
        letters.push({letter:letter,top:Math.random()*450,left:Math.random()*600})

    }
    console.log(letters)

    setInterval(()=>{
        letters = [];
        for(let letter of lettersString){
        letters.push({letter:letter,top:Math.random()*450,left:Math.random()*600})

        }
    },2500)
    

    
    function addletter(letter,i){
        username += letter;
        letters[i].top = Math.random()*450
        letters[i].left = Math.random()*600
        letters = letters;
    }
    function addletter2(letter,i){
        password += letter;
        letters[i].top = Math.random()*450
        letters[i].left = Math.random()*600
        letters = letters;
    }
    
    
    function login() {
        if (username === 'admin' && password === 'password') {
            alert('Du lyckades logga in!!');
        } else {
            alert('Användarnamn eller lösenord är fel. Försök igen.');
        }
    }

    function register() {
        alert('Registrering lyckades!');
    }
</script>



<div class = "flex-container">
<h1>Us: </h1>
<div class= "container">
{#each letters as {letter,top,left},i}
    <button on:click={()=>addletter(letter,i)} style="position:sticky;top:{top}px; left:{left}px;">{letter}</button>
{/each}
</div>
<h1>Pa: </h1>
<div class= "container">
{#each letters as {letter,top,left},i}
    <button on:click={()=>addletter2(letter,i)} style="position:sticky;top:{top}px; left:{left}px;">{letter}</button>
{/each}
</div>
</div>



<div>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username}>
    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password}>
</div>
<div>
<button on:click={login}>Logga in</button>
</div>
<button on:click={register}>Registera</button>


<style>
    .container{
        background-color: rgb(75, 154, 168);
        width: 700px;
        height: 500px;
        border-width: 7px;
        border-style:double;
        border-color: rgba(133, 11, 11, 0.523);
        border-radius: 6%;
        padding-top: 10px;    
    }
    button{
        background-color: rgb(196, 221, 236);
        border: 2px solid rgb(142, 165, 42);
        border-radius: 9px;
        padding: 3px 4px;
    }
    
    .flex-container {
        display: flex;
    }

</style>