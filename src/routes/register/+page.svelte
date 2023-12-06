<div>
    <h1>Sing in</h1>
    <form on:submit|preventDefault={handleSubmit}>
        
        <label for = "firstName">First and last name:</label>
        <input id ="firstName"  bind:value={name}/>
        <label for = "Email">Email:</label>
        <input id ="Email" bind:value={email}/>
        <label for = "Password">Password:</label>
        <input id ="Password" bind:value={password}/>
        <label>Save</label>
        <input type="checkbox" bind:value={checkbox}/>
        <button type="submit">Sumbit</button>

    </form>
    <p>Have an account? <a href="/login">Log in</a></p>
</div>
<script>
    let name;
    let email;
    let password; 
    let checkbox;
    function handleSubmit() {
    console.log('Form submitted! Welcome ', name);
}
</script>

 <style>
div{
    width: 70vw;
    background-color: rgb(250, 212, 86);
}
form{display:grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    grid-row-gap: 60px;
    width:60vw;
    height: 50vh;
    max-width: 500px;
    min-width: 300px;
    margin: auto;
    margin: 100px;

}

</style>

