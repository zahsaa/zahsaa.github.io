<script>
    let Todo = [
        { done: false, name: 'Homework' },
        { done: true, name: 'Whach movie with friend' },
        { done: false, name: 'Cook for sibling' },
    ];
    let newTask = "";



    function completeTask(index){
        Todo[index].done = true;
        Todo=Todo;
    }

    function addTodo(){

    Todo = [{done:false, name:newTask},...Todo]
    }
    
    function removeTask(index){
        Todo.splice(index,1);
        Todo = Todo;
    

    }
</script>





<div class="container">
<h1>TODO</h1>
<input type="text" bind:value={newTask}> <button on:click={addTodo}> Add Todo </button>


<div class="layout">
    <div style="display:grid">
        <h1>NEW</h1>
        <ul>
            {#each Todo as { done, name }, i}
                {#if !done}
                    <li>
                    {name}<button on:click={()=>{completeTask(i)}}> Complete </button>
                    </li>
                {/if}
                
            {/each}
         </ul>
    </div>
    <div style="display:grid">
        <h1>COMPLETED</h1>
        <ul>
            {#each Todo as { done, name }, i}
                {#if done}
                    <li>
                    {name} <div class="btn btn-two"><button on:click={()=>{removeTask(i)}}> REMOVE </button></div>
                    </li>
                {/if}
                
            {/each}
         </ul>
    </div>
    </div>
    </div>

<style>

.container {
    width: 80vw;
    height: 70vh;
    background-color: rgb(300, 10, 300);
    border-width: 40px;
    border-style:groove;
    border-color: black;
    border-radius: 6%;
    padding-top: 10px;
}
.layout { display:grid;
    width:100%; 
    grid-template-columns: 50% 50%;
}
ol{
   
   list-style-type: lower-roman;
}
ul{
   list-style-type: disc;

}
input:focus{
    background-color: red;
    border-color: black;
}
input{
transition: border-color 0.5s, background-color 0.5s; 
}
.btn-two {
color: #FFF;
transition: all 0.5s;
position: relative;
}

</style>



<ol>
<li>Ett list objekt</li>
<li>Ett annat list objekt</li>
</ol>
<ul>
<li>Ett list objekt</li>
<li>Ett annat list objekt</li>
</ul>

