<div>
    <h1 class = 'container'>Shopp</h1>
    <form on:submit|preventDefault={handleSubmit}>
        

        <label for = "Email">Email:</label>
        <input id ="Email" bind:value={email}/>
        <label for = "Password">Password:</label>
        <input id ="Password" bind:value={password}/>
        <button type="Login">Login</button>

</div>
<script>
    let email;
    let password;  
    function handleSubmit() {
    console.log('Form submitted!');
}
</script>

 <style>

form{display:grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-row-gap: 60px;
    width:70vw;
    height: 30vh;
    max-width: 600px;
    min-width: 100px;
    margin: auto;
    margin: 100px;

}
.container{
  height: 10px;
  width: 10px; 
  background-color: aqua; 
}

</style>