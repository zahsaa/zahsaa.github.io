 
 <script>
  let email;
  let password;  

function Login() {
      if (email != '' && password != '') {
        window.location.href = "/shop";
      } else {
          alert('Email eller lösenord är fel. Försök igen.');
      }
  }

</script>


<div>
    <p class = 'container'>Shopp</p>
    <form on:submit|preventDefault={Login}>
        
      <h1>
       <label for = "Email">Email:</label>
        <input id ="Email" bind:value={email} required/>
        <label for = "Password">Password:</label>
        <input id ="Password" bind:value={password} required/>
        <button type="submit">Login</button>
      </h1>
    </form>  
</div>
<div>
</div>
<img src="https://www.njutafilms.nu/wp-content/uploads/2022/07/Filmserier-%E2%80%93-trilogier.jpg" alt=" ">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIShx2-naHgVvJeQqCpxBqrO-CGchoRlbfZ-8t1O8FNUgISM5vGA-9oYv3UzE9Vw06qEA&usqp=CAU" alt=" ">
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
  height: 50px;
  width: 100px; 
  background-color: rgb(170, 245, 245);
  border-width: 7px;
  border-style:groove;
  border-color: rgb(21, 73, 91);
  border-radius: 6%; 
}

  h1{

    color:antiquewhite;
    display: flex;
    font-size: 1em;
    height: 20px;


  }
  p {

  color: rgb(80, 27, 102);
	font-family: 'Comic Sans MS', cursive;
	font-size: 2em

}
img{
  width: 600px;
  height: 400px;
}

:global(body) {
      margin: 0;
      padding: 0;
      background-color: rgb(71, 71, 71);
    }

</style>