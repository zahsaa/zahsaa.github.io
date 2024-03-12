<script>
    let lettersString = "こんにちは元気ですか？!+_-*HELLO1234ABCDEFGHIJK".split("")
    let snake = [];
    let letters = [];
	let top = 50;
	let left = 50;
	// up = 38
	// down = 40
	// right = 39
	// left = 37
	function onKeyDown(e) {
		 switch(e.keyCode) {
			 case 38:
				 top -= 50;
				 break;
			 case 40:
				 top += 50;
				 break;
			 case 37:
				 left -= 50;
				 break;
			 case 39:
				 left += 50;
				 break;
		 }
	}






    for(let letter of lettersString){
        letters.push({letter:letter,top:Math.random()*450,left:Math.random()*550})

    }
    console.log(letters)

    setInterval(()=>{
        letters = [];
        for(let letter of lettersString){
        letters.push({letter:letter,top:Math.random()*450,left:Math.random()*550})

        }
    },2500)







</script>
<style>
	main {
		width: 600px;
		height: 600px;
		border: solid blue 1px;
		margin: 10px auto;
		position: relative
	}
	div {
		width: 30px;
		height: 20px;
		background-color: rgb(161, 50, 50);
		position: absolute;
	}






</style>


<main>
	<div style="left: {left}px; top: {top}px">
	</div>
    <div class= "container">
        {#each letters as {letter,top,left},i}
            <div on:click={()=>addletter(letter,i)} style="position:absolute;top:{top}px; left:{left}px;">{letter}</div>
        {/each}
        </div>





  
</main>

<svelte:window on:keydown|preventDefault={onKeyDown} />