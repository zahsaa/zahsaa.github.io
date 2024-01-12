<script>
  let cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index, 
      img: "https://picsum.photos/id/"+(index%6+10).toString()+"/200/300", 
      flipped: false,  
      completed: false,
    });
  }
  let flipcount = 0;
  let blue_turn = true;

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cards)
cards=cards;

  function flip(card) {

    if (!card.flipped && flipcount < 2) {
      card.flipped = true;
      flipcount++;

      
      if (flipcount == 2) {

        cards.forEach(c =>{
          //Found a match if true
          if(c.flipped && c.img == card.img && c.id != card.id){
            if(blue_turn){
                blue++;
            }   
            else{
              red++;
            }

            c.completed = true;
            card.completed = true;
            cards = cards;
        
          }
        })
       
    


        

        setTimeout(() => {
          
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
          blue_turn = !blue_turn
        }, 2000);
      }
      cards = cards;
    } else {
      alert("chill");
    }
  }
  let red = 0
  let blue = 0

  function reseatcard(){
   cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index, 
      img: "https://picsum.photos/id/"+(index%6+10).toString()+"/200/300", 
      flipped: false,  
      completed: false,
    });
  }
  shuffleArray(cards);
  cards=cards;

  }



</script>

<main>
<button on:click={reseatcard}>Reseat</button>

  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
        
        
      >
        <img class="front" src={card.img} alt="" /> 
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
  <div class = "box" id = "red-box"><p>{red}</p></div>
  <div class = "box" id = "blue-box"><p>{blue}</p></div>
  <div style={blue_turn?"right: 10px;":"left:10px"} class = "box" id = "turn-box">...</div>
  
</main>


<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
    border-radius: 20px;
  }
 
  .red-box {
  background-color: red;
  z-index:1;
  left: 0px;
  text-align: center; 
  font-size: 30px;
  }
  .blue-box {
  background-color: blue;
  right: 0px;
  text-align: center;
  font-size: 30px;
  }
  .box {
  width: 100px;
  height: 100px;
  position: fixed;
  text-align: center;
  font-size: 30px;
  }
  #red-box, #blue-box{
  bottom: 0px;
  z-index: 2;
}

#red-box{
  background-color: red;
  left: 0px;
}


#blue-box{
  background-color: blue;
  right: 0px;
}
  #turn-box{
  bottom: 10px;
  z-index: 1;
  background-color: greenyellow;
  box-shadow: 0 0 20px 20px greenyellow;
}

  </style>
