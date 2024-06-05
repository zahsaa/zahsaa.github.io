<script>
    let products = [

        { id: 1, name: 'Toy Story 1', price: 10, imageUrl:'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg', info: "Toy Story is an animated film about toys belonging to a boy named Andy. The story focuses on Woody, a cowboy doll, and Buzz Lightyear, a space ranger toy. When Buzz arrives, Woody feels threatened and jealous. They both end up lost and must find their way home, learning the value of friendship along the way.. "},
        { id: 2, name: 'Toy Story 2', price: 18, imageUrl:'https://m.media-amazon.com/images/I/61xzQKCP-2L._AC_UF1000,1000_QL80_.jpg', info: "Season 2 of Toy Story"},
        { id: 3, name: 'Toy Story 3', price: 20, imageUrl:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFA21D80509E043EC4CB79E121224FA2FB344AF40ED03B510576F4ED9D831960/scale?width=1200&aspectRatio=1.78&format=webp', info: "Season 3 of Toy Story"},
        { id: 4, name: 'Toy Story 4', price: 25, imageUrl:'https://musicart.xboxlive.com/7/ca1d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', info: "Season 4 of Toy Story"},
        { id: 5, name: 'Hotel Transylvania 1', price: 20, imageUrl:'https://picfiles.alphacoders.com/982/thumb-1920-98209.jpg', info: "Hotel Transylvania is an animated comedy about Count Dracula, who runs a hotel for monsters. When a human visits, Dracula tries to keep him hidden, but his daughter Mavis falls in love with the visitor. The film explores themes of acceptance and family, with plenty of humor and memorable characters."},
        { id: 6, name: 'Hotel Transylvania 2', price: 20, imageUrl:'https://th.bing.com/th/id/OIP.3-_iZQK3OmLkNgGF2F5t9QAAAA?rs=1&pid=ImgDetMain', info: "Season 2 of Hotel Transylvania"},
        { id: 7, name: 'Hotel Transylvania 3', price: 20, imageUrl:'https://th.bing.com/th/id/R.310965b05987170af9ed7dfeb9d31194?rik=tFR%2bEChrktRp3Q&pid=ImgRaw&r=0', info: "Season 3 of Hotel Transylvania"},
        { id: 8, name: 'Smile movie', price: 30, imageUrl:'https://th.bing.com/th/id/OIP._P0erel7LRwMy7DVw42u8gAAAA?w=129&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', info: "Smile is a horror film about a group of friends trapped by a sinister entity that preys on their fears. They must confront their darkest secrets to survive."},
        { id: 9, name: 'Annabelle', price: 30, imageUrl:'https://th.bing.com/th/id/OIP.hoM8c28HbUNdLp_nRFzYpQHaEo?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', info: "Horror film about a possessed doll causing terror for a young couple."},
        { id: 10, name: 'Venom movie', price: 40, imageUrl:'https://hdqwalls.com/download/venom-movie-logo-4k-x5-1920x1080.jpg', info: "Superhero film based on the Marvel Comics character. Journalist Eddie Brock becomes host to an alien symbiote called Venom, and together they battle threats while navigating their new partnership."},
        { id: 11, name: 'Frozen 1', price: 25, imageUrl:'https://2.bp.blogspot.com/-pcE2law557g/UpZHGDLRapI/AAAAAAAABrQ/6V24nnm9kW4/s1600/Frozen-Mini-Poster-disney-frozen-35322708-1280-1587.jpg ', info: "Frozen Disney animated film about two sisters, Elsa and Anna, in the kingdom of Arendelle. Elsa's magical powers accidentally plunge the kingdom into eternal winter, prompting Anna to team up with Kristoff, Sven, and Olaf to find Elsa and save their home."},
        { id: 12, name: 'Rapunzel', price: 25, imageUrl:'https://th.bing.com/th/id/R.157cab22f75084d9c9a2028295f5102f?rik=krSLFOGSRF7vgA&riu=http%3a%2f%2ffanartexhibit.files.wordpress.com%2f2011%2f01%2frapunzel_poster3.jpg&ehk=kBPs8QZTP%2f8iUKXjBJaBEKcrD15q9pK5mLyxWHZULkE%3d&risl=&pid=ImgRaw&r=0', info: "Rapunzel s a fairy tale about a girl with long, magical hair locked in a tower by an evil witch. She befriends a prince, escapes with his help, and they live happily ever after."},
        { id: 13, name: 'Demon Slayer movie', price: 50, imageUrl:'https://br.web.img2.acsta.net/pictures/20/08/03/10/14/5958342.jpg', info: "Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train follows Tanjiro Kamado and his companions as they investigate mysterious disappearances aboard a train. They confront a powerful demon named Enmu and must overcome their inner struggles to defeat him. The film is known for its stunning animation and thrilling action."},
        { id: 14, name: 'The Exorcist movie', price: 30, imageUrl:'https://th.bing.com/th/id/OIP.geBunulW9HBtInzJcQxNYQAAAA?rs=1&pid=ImgDetMain', info: "The Exorcist is a horror film about a young girl, Regan MacNeil, who becomes possessed by a demon. Her mother seeks the help of two priests to perform an exorcism and save her daughter's soul. The film is known for its chilling atmosphere and groundbreaking effects."},
        { id: 16, name: 'The lord of the Rings movies', price: 199, imageUrl:'https://m.media-amazon.com/images/I/71O5tRLd3fL._AC_UF894,1000_QL80_.jpg', info: "The Lord of the Rings follows Frodo Baggins and his companions as they embark on a quest to destroy a powerful ring that could bring darkness to the world. They face challenges and battles as they journey across Middle-earth to Mount Doom, where the ring was forged. The series explores themes of friendship, courage, and the struggle between good and evil."},
        { id: 17, name: 'Harry Potter movies', price: 399, imageUrl:'https://miro.medium.com/v2/resize:fit:1358/0*-dkqWQNwu7hY2_3e.jpg', info: "The Harry Potter book series, written by J.K. Rowling, follows the adventures of a young wizard named Harry Potter and his friends Hermione Granger and Ron Weasley as they attend Hogwarts School of Witchcraft and Wizardry. Throughout the seven books, they face challenges, uncover secrets about their past, and ultimately confront the dark wizard Lord Voldemort. Themes of friendship, courage, and the power of love are central to the series, which concludes with an epic battle and Voldemort's defeat."},
        { id: 18, name: 'Hunger Games movies', price: 230, imageUrl:'https://sklepgekon.pl/userdata/public/gfx/b66e14c7b3929b64c8cd2233afb7ecee.jpg', info: "he Hunger Games is a dystopian novel by Suzanne Collins set in the fictional nation of Panem. It follows Katniss Everdeen, who volunteers to take her sister's place in the annual Hunger Games, where contestants fight to the death. Katniss forms alliances to survive and becomes a symbol of rebellion against the oppressive Capitol. The book explores themes of survival, love, and power."},
        { id: 19, name: 'Titanic movie', price: 30, imageUrl:'https://media.ginza.se/Images/item_img_verylarge/60610.jpg', info: "The Titanic is a romantic drama directed by James Cameron. It tells the story of Jack Dawson and Rose DeWitt Bukater, who fall in love aboard the ill-fated RMS Titanic. Their romance is tested as the ship strikes an iceberg and sinks, but Jack sacrifices himself so Rose can survive. The film is celebrated for its epic scale and emotional storytelling."},
        { id: 20, name: 'The Ring Movies', price: 270, imageUrl:'https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_.jpg', info: "The Ring movies are a series of horror films based on the Japanese novel Ring by Koji Suzuki. The story revolves around a cursed videotape that, when watched, leads to the viewer's death seven days later."},
        { id: 21, name: 'Jumanji 1', price: 100, imageUrl:'https://m.media-amazon.com/images/S/pv-target-images/baa48b7dc63525a8d160d3007833b4152d3e68b07edcc301709546967568bf5e.jpg', info: "Jumanji is a thrilling adventure film about a mysterious board game that brings its jungle world to life. When two siblings, Judy and Peter, start playing, they unwittingly release wild creatures and dangers into their town. Years later, they, along with two other players, find themselves trapped in the game and must navigate through its perils to finish it and break the curse. Along the way, they learn important lessons about courage and friendship. In the end, they succeed in completing the game, returning to the real world, and restoring peace to their town."},
        { id: 22, name: 'Jumanji 2', price: 120, imageUrl:'https://m.media-amazon.com/images/S/pv-target-images/191a71eda015defa7f5407a65aad62551000813c42eaa9ab140b1887cc4fb1a1.jpg', info: "Second season of Jumanji"},
        { id: 23, name: 'Jumanji 3', price: 125, imageUrl:'https://c8.alamy.com/comp/2ATFRD3/jumanji-the-next-level-2019-directed-by-jake-kasdan-and-starring-dwayne-johnson-jack-black-kevin-hart-and-karen-gillan-the-old-video-game-malfunctions-brings-new-surprises-for-the-players-2ATFRD3.jpg', info: "Season 3 of Jumanji"},
        { id: 24, name: 'Jumanji 4', price: 140, imageUrl:'https://outloudculture.com/wp-content/uploads/2023/03/maxresdefault.webp', info: "Seson 4 of Jumanji"},
        { id: 25, name: 'The Nun', price: 50, imageUrl:'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg', info: "The Nun is a 2018 horror film in The Conjuring Universe, directed by Corin Hardy. The movie serves as a prequel to The Conjuring 2 and explores the origins of the demonic nun Valak, who first appeared in the sequel. Set in 1952, The Nun follows a priest, Father Burke, and a novitiate, Sister Irene, who are sent by the Vatican to investigate the mysterious death of a nun at the Cârța Monastery in Romania."},
        { id: 26, name: 'Frozen 2', price: 20, imageUrl:'https://play-lh.googleusercontent.com/1uMZUpqycIK0SDYY92xBtNvdueRYa-yt7govWkTFK2GS-H_8OGAEDHRizDPNNbh0d5i0=w240-h480-rw', info: "Season 2 of Frozen"},
        { id: 27, name: 'Godzilla x Kong: The New Empire', price: 100, imageUrl:'https://th.bing.com/th/id/OIP.PaPYwdtvx8641-N0juA4XAAAAA?rs=1&pid=ImgDetMain', info: "Godzilla vs. Kong also known as Godzilla x Kong is a 2021 American monster film directed by Adam Wingard and a sequel to both Godzilla: King of the Monsters and Kong: Skull Island. In the film, Godzilla, the alpha Titan, becomes increasingly aggressive, attacking cities seemingly without cause. Meanwhile, Kong, the last of his kind, is being held in containment on Skull Island under the watchful eye of Monarch."},
        { id: 28, name: 'Avatar 1', price: 60, imageUrl:'https://resizing.flixster.com/f0bXqQUdQ0m6fyqZjI1OXSEia9E=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEzYmY3ZmZiLWMzYjEtNDQxMy05NTAxLTc2YTRlNmE3NWY2MC5qcGc=', info: "Set in the mid-22nd century, the story follows a paraplegic former Marine, Jake Sully, who is selected to participate in the Avatar Program on the distant moon of Pandora. Using genetically engineered bodies called avatars, humans aim to interact with the indigenous Na'vi people and mine the valuable mineral unobtanium. However, as Jake immerses himself in the Na'vi culture, he finds himself torn between his loyalty to humanity and his growing love for the Na'vi and their way of life."},
        { id: 29, name: 'Avatar 2', price: 65, imageUrl:'https://media.ginza.se/Images/item_img_1200/10874.jpg', info: "Season 2 of Avatar"},
        { id: 30, name: 'Star Wars: The Empire Strikes Back', price: 60, imageUrl:'https://musicart.xboxlive.com/7/7b325100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', info: "Star Wars: The Empire Strikes Back follows the Rebels as they flee from the Empire after their base on Hoth is attacked. Luke Skywalker trains with Yoda on Dagobah. Han Solo, Leia, and Chewbacca seek refuge in Cloud City but are betrayed by Lando Calrissian. Darth Vader captures Han and Leia to lure Luke, revealing he is Luke's father. The film ends with Han in captivity and the Rebels determined to continue their fight against the Empire."},
        { id: 31, name: 'The Dark Knight', price: 70, imageUrl:'https://static.posters.cz/image/1300/poster/the-dark-knight-trilogy-joker-i198202.jpg', info: ""},


    ];


    let cart = [];
    let total = 0
    function addToCart(product) {
        cart = [...cart, product];
        getTotalPrice()
    }

    function removeFromCart(index) {
        cart = cart.filter((_, i) => i !== index);
    }

    function getTotalPrice() {
        total = 0
        cart.forEach(( product) =>  total += product.price);
    }
</script>

<main>
    <h1>Welcome to our book/net book, manga and movei shop!</h1>
    <h1>Top read/watching</h1>
    <div>
        <a href="/manga">Manga</a>
        <a href="/novel">,Webb Novel</a>
        <a href="/shop"> ,Top Read/Watching</a>

    </div>
    <div class = "container">
     <div>
        <div class = "producter">
        {#each products as product}
            <div class="product">
                <h2>{product.name}</h2>
                <div class="product_info">
                    <img src={product.imageUrl} alt={product.name} style="max-width: 190px; max-height: 190px;">
                    <div>
                        <p>{product.info}</p>
                        <h4>Pris: {product.price}kr</h4>

                    </div>
                </div>
                <button on:click={() => addToCart(product)}>Lägg till i varukorg</button>
            </div>
        {/each}
    </div>
    </div>
    <section>
        <h3>Varukorg</h3>
        {#if cart.length === 0}
            <p>Varukorg är tom.</p>
        {:else}
            <ul>
                {#each cart as product, index}
                    <li>
                        <h3>{product.name}</h3>
                        <img src={product.imageUrl} alt={product.name} style="max-width: 100px; max-height: 100px;">
                        
                        <div>
                            <p>{product.info}</p>
                            <h4>Pris: {product.price}kr</h4>

                        </div>
                        <button on:click={() => removeFromCart(index)}>Ta bort</button>
                    </li>
                {/each}
            </ul>
            <p>Totalt: {total}kr</p>
        {/if}
    </section>
    </div>
</main>

<style>

    a{
        color: aliceblue;
    }

    .product{
        width: 47vw;
    }
    .product_info{
        display: grid;
        grid-template-columns: 50% 50%;
        width: 100%;
    }
    .container{
    
        background-color: rgb(242, 255, 201);
        width: 1450px;
        border-width: 7px;
        border-style:groove;
        border-color: black;
    }

    .producter{
    
       width: 65vw;
       flex-wrap: wrap;
    }
    main {
        
        max-width: 800px;
        margin: 10 auto;
        padding: 10px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    h2 {
        margin-bottom: 30px;
        border-bottom: 1px solid #403a3a;
        padding-bottom: 20px;
    }

    :global(body) {
      margin: 0;
      padding: 0;
      background-color: black;
    }
    h1 {
      color: rgb(118, 47, 149);
      font-family: 'Comic Sans MS', cursive;
      font-size: 2em
    }



    
</style>