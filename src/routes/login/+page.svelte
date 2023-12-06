<div>
    <h1>Login</h1>
    <form on:submit|preventDefault={handleSubmit}>
        

        <label for = "Email">Email:</label>
        <input id ="Email" bind:value={email}/>
        <label for = "Password">Password:</label>
        <input id ="Password" bind:value={password}/>
        <button type="submit">Sumbit</button>

    </form>
    <p>Don´t have an account? <a href="/register">register</a></p>

</div>
<script>
    let email;
    let password; 
    function handleSubmit() {
    console.log('Form submitted!');
}
</script>

 <style>
div{
    width: 70vw;
    background-color: rgb(250, 208, 68);
}
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

</style>