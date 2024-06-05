<script>
    let products = [
        { id: 1, name: 'Omniscient Reader Viewpoint volym 1-5', price: 890, imageUrl:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602711083i/55673074.jpg', info: "Kim Dojka a 28 year officer worker that work in a game company. In the subway at the end of the day he got a notice that his favorite webb novel Tree Ways to Survive a Runied World. The novel have more than 3000 chapter and he was reading it more than 10 year. He was the only reader that readed the novel from the begining to the end. In thet day he didn't know that the novel thet he read will become reality and every character in thet novel will come to life, and he will be the only reader how know how the story vill end and he is willing to change the end of the story and give the people that he cear about the appy endning that they want. "},
        { id: 2, name: 'Trash of the count family', price: 660, imageUrl:'https://static.lightnovelworld.co/bookcover/300x400/00045-trash-count-novel.jpg', info: "When I opened my eyes, I was inside a novel. [The Birth of a Hero] [The Birth of a Hero] was a novel focused on the adventures of the main character, Choi Han, a high school boy who was transported to a different dimension from Earth, along with the birth of the numerous heroes of the continent. I became a part of that novel as the tr*sh of the Count’s family, the family that oversaw the territory where the first village that Choi Han visits is located. The problem is that Choi Han becomes twisted after that village, and everyone in it, is destroyed by assassins. The bigger problem is the fact that this s*upid tr*sh who I’ve become doesn’t know about what happened in the village and messes with Choi Han, only to get beaten to a pulp. “…This is going to be a headache.” I feel like something serious has happened to me. But it was worth trying to make this my new life."},
        { id: 3, name: 'Hunger games books', price: 800, imageUrl:'https://www.kindpng.com/picc/m/25-252009_hunger-games-book-covers-hd-png-download.png', info: "The Hunger Games is a dystopian novel by Suzanne Collins set in the fictional nation of Panem. It follows Katniss Everdeen, who volunteers to take her sister's place in the annual Hunger Games, where contestants fight to the death. Katniss forms alliances to survive and becomes a symbol of rebellion against the oppressive Capitol. The book explores themes of survival, love, and power."},
        { id: 4, name: 'Titanic movie', price: 30, imageUrl: 'https://media.ginza.se/Images/item_img_verylarge/60610.jpg', info: "The Titanic is a romantic drama directed by James Cameron. It tells the story of Jack Dawson and Rose DeWitt Bukater, who fall in love aboard the ill-fated RMS Titanic. Their romance is tested as the ship strikes an iceberg and sinks, but Jack sacrifices himself so Rose can survive. The film is celebrated for its epic scale and emotional storytelling."},
        { id: 5, name: 'The S-Classes that i rised', price: 440, imageUrl:'https://th.bing.com/th/id/OIP.xi7E52kCykGgNZ9hpOHgTgAAAA?rs=1&pid=ImgDetMain', info: "8 year ago a apocalypse happened in the world where gate for other world oppened and monster come to the earth. It is not only the monster that apered, even humane came to have power. Those humen caled hunter, from strongest S to the weakest F. Han Youjin is a F class hunter but his brother are S class. One day when Han Youjin whent to a D class dungeons, a SS class monster apered and his yonger brother saved hom, but the cost whas his live. One of Han Youjins power are to take te power of somone that like him when that persone die and make it stronger fore an houer. When Han Youjin managade to killed the monster,a reward came to him, a crital that will make one of his wish come true, bur it can't relife the death. So instand of it Han Youjin travelet 5 year to the past before the relationship with his brother got worse, so he will change what happened so it will not happen agen."},
        { id: 6, name: 'The Exorcist movie', price: 30, imageUrl:'https://th.bing.com/th/id/OIP.geBunulW9HBtInzJcQxNYQAAAA?rs=1&pid=ImgDetMain', info: "The Exorcist is a horror film about a young girl, Regan MacNeil, who becomes possessed by a demon. Her mother seeks the help of two priests to perform an exorcism and save her daughter's soul. The film is known for its chilling atmosphere and groundbreaking effects."},
        { id: 7, name: 'Demon Slayer movie', price: 50, imageUrl: 'https://br.web.img2.acsta.net/pictures/20/08/03/10/14/5958342.jpg', info: "Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train follows Tanjiro Kamado and his companions as they investigate mysterious disappearances aboard a train. They confront a powerful demon named Enmu and must overcome their inner struggles to defeat him. The film is known for its stunning animation and thrilling action."},
        { id: 8, name: 'Harry Potter books', price: 670, imageUrl:'https://buyersclub.blob.core.windows.net/images/items/2356412_0_800x800.jpg', info: "The Harry Potter book series, written by J.K. Rowling, follows the adventures of a young wizard named Harry Potter and his friends Hermione Granger and Ron Weasley as they attend Hogwarts School of Witchcraft and Wizardry. Throughout the seven books, they face challenges, uncover secrets about their past, and ultimately confront the dark wizard Lord Voldemort. Themes of friendship, courage, and the power of love are central to the series, which concludes with an epic battle and Voldemort's defeat."},
        { id: 9, name: 'The Lord of the Rings', price: 690, imageUrl:'https://image.bokus.com/images/9780063270923_200x_the-lord-of-the-rings-boxed-set-contains-tvtie-in-editions-of-fellowship-of-the-ring-the-two-towers-and-the-return-of-the-king_haftad', info: "The Lord of the Rings follows Frodo Baggins and his companions as they embark on a quest to destroy a powerful ring that could bring darkness to the world. They face challenges and battles as they journey across Middle-earth to Mount Doom, where the ring was forged. The series explores themes of friendship, courage, and the struggle between good and evil."},
        { id: 10, name: 'Rapunzel', price: 25, imageUrl:'https://th.bing.com/th/id/R.157cab22f75084d9c9a2028295f5102f?rik=krSLFOGSRF7vgA&riu=http%3a%2f%2ffanartexhibit.files.wordpress.com%2f2011%2f01%2frapunzel_poster3.jpg&ehk=kBPs8QZTP%2f8iUKXjBJaBEKcrD15q9pK5mLyxWHZULkE%3d&risl=&pid=ImgRaw&r=0', info: " Rapunzel s a fairy tale about a girl with long, magical hair locked in a tower by an evil witch. She befriends a prince, escapes with his help, and they live happily ever after."},
        { id: 11, name: 'Frozen 1', price: 25, imageUrl: 'https://2.bp.blogspot.com/-pcE2law557g/UpZHGDLRapI/AAAAAAAABrQ/6V24nnm9kW4/s1600/Frozen-Mini-Poster-disney-frozen-35322708-1280-1587.jpg', info: "Frozen Disney animated film about two sisters, Elsa and Anna, in the kingdom of Arendelle. Elsa's magical powers accidentally plunge the kingdom into eternal winter, prompting Anna to team up with Kristoff, Sven, and Olaf to find Elsa and save their home."},
        { id: 12, name: 'Venom movie', price: 40, imageUrl:'https://hdqwalls.com/download/venom-movie-logo-4k-x5-1920x1080.jpg', info: "Superhero film based on the Marvel Comics character. Journalist Eddie Brock becomes host to an alien symbiote called Venom, and together they battle threats while navigating their new partnership."},
        { id: 13, name: 'Solo Leveling volym 1-3', price: 460, imageUrl:'https://bok.hstrom.se/cdn/shop/files/146524232.jpg?v=1708478509&width=713', info: "South Korean web novel series follows Sung Jin-Woo, a low-ranked hunter who gains the ability to level up like a video game character. He embarks on a journey to become stronger and uncover the mysteries behind his powers."},
        { id: 14, name: 'Annabelle', price: 30, imageUrl:'https://th.bing.com/th/id/OIP.hoM8c28HbUNdLp_nRFzYpQHaEo?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', info: " Horror film about a possessed doll causing terror for a young couple."},
        { id: 15, name: 'Smile movie', price: 30, imageUrl:'https://th.bing.com/th/id/OIP._P0erel7LRwMy7DVw42u8gAAAA?w=129&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', info: "Smile is a horror film about a group of friends trapped by a sinister entity that preys on their fears. They must confront their darkest secrets to survive. "},
        { id: 16, name: 'EX rank supporting role replay in a prestigious high school', price: 600, imageUrl: 'https://cdn.novelupdates.com/images/2022/04/Ex-Rank-Supporting-Roles-Replay-in-a-Prestigious-School.png', info: " It is about Cho Euishin, where he whas playing a fames game. It is fames for it difficulty and it haten. But Cho Euishin loved the game and loved every playable character in it, so he managed to finish it in 10 year, but in the end every character in the gme died and it was not a happy end. Efter he finished the game a light abered in front of his eye. After 10 second when he oppened his eye, he fund himself inside the game, so he decided to give that game a happy endning with no one die."},
        { id: 17, name: 'Hotel Transylvania 1', price: 20, imageUrl:'https://picfiles.alphacoders.com/982/thumb-1920-98209.jpg', info: "Hotel Transylvania is an animated comedy about Count Dracula, who runs a hotel for monsters. When a human visits, Dracula tries to keep him hidden, but his daughter Mavis falls in love with the visitor. The film explores themes of acceptance and family, with plenty of humor and memorable characters."},
        { id: 18, name: 'Hotel Transylvania 2 ', price: 20, imageUrl:'https://th.bing.com/th/id/OIP.3-_iZQK3OmLkNgGF2F5t9QAAAA?rs=1&pid=ImgDetMain', info: " Count Dracula's grandson, Dennis, is a hybrid vampire and human. Dracula tries to bring out Dennis's vampire side before his family moves away. Along the way, they encounter new challenges, including Dracula's father, Vlad.."},
        { id: 19, name: 'Hotel Transylvania 3 ', price: 20, imageUrl:'https://th.bing.com/th/id/R.310965b05987170af9ed7dfeb9d31194?rik=tFR%2bEChrktRp3Q&pid=ImgRaw&r=0', info: " Count Dracula and his family take a cruise vacation. Dracula falls for the ship's captain, Ericka, but she harbors a dangerous secret. As they navigate their vacation, they encounter obstacles and supernatural creatures. Dracula must confront his feelings for Ericka while protecting his family from danger."},
        { id: 20, name: 'Frankenstein', price: 650, imageUrl:'https://covers.storytel.com/jpg-640/9782380370935.aec7d1e8-21c3-4a80-9962-36ba092f9de9?optimize=high&quality=70', info: " Frankenstein is a novel by Mary Shelley about a young scientist, Victor Frankenstein, who creates a creature but abandons it. The creature seeks revenge, leading to tragedy for both."},
        { id: 21, name: 'One Piece manga', price: 1890, imageUrl:'https://m.media-amazon.com/images/I/81MLf-pgXrL._AC_UF1000,1000_QL80_.jpg', info: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the adventures of Monkey D. Luffy, a young pirate who sets out on a journey to find the legendary treasure known as One Piece and become the Pirate King. Along the way, Luffy forms a diverse crew, known as the Straw Hat Pirates, who share his dream and face various challenges, including battles with other pirates, government agents, and powerful entities. The series explores themes of friendship, loyalty, and the pursuit of dreams, and is known for its imaginative world-building, engaging characters, and epic story arcs."}, 
        { id: 22, name: 'Naruto manga', price: 1350, imageUrl:'https://m.media-amazon.com/images/I/812KZelX6bL._AC_UF1000,1000_QL80_.jpg', info: " Naruto follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village. Alongside his friends, Naruto faces challenges, battles powerful enemies, and works towards achieving his dream of becoming Hokage."},
        { id: 23, name: 'Demon Slayer manga', price: 1300, imageUrl:'https://m.media-amazon.com/images/I/91+5OK-V00L._AC_UF1000,1000_QL80_.jpg', info: " Demon Slayer follows Tanjiro Kamado, a young demon slayer seeking revenge for his family's murder and a cure for his sister, Nezuko, who was turned into a demon. Along the way, he battles powerful demons and forms alliances with other demon slayers. The series explores themes of family, friendship, and redemption, and is known for its captivating story and stunning artwork."},
        { id: 24, name: 'Attack on Titan manga', price: 1350, imageUrl:'https://www.japantimes.co.jp/uploads/imported_images/uploads/2021/05/np_file_87110.jpeg', info: " Attack on Titan is a Japanese manga series set in a world where humanity battles giant humanoid creatures called Titans. The story follows Eren Yeager, his adoptive sister Mikasa Ackerman, and their friend Armin Arlert as they join the military to fight against the Titans and uncover the truth about their existence. It explores themes of survival, freedom, and the consequences of war."},
        { id: 25, name: 'How to Live as the Enemy Prince', price: 500, imageUrl:'https://cdn.novelupdates.com/images/2019/10/Enemys-Prince-cover.jpg', info: " I could hear the hum of life in my ears. It was hard to breathe…. … I raised my gaze and stared into the distance. However, my blurred vision could not see anything. The light began to fade. That was my last memory. When I opened my eyes once again, it was 10 years before that last memory took place. And of all the things I could have become, it was from the enemy country that drove Secretia to ruin – I became Kyris’ third prince Calian."},
        { id: 26, name: 'Toy Story 1', price: 10, imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg', info: "Toy Story is an animated film about toys belonging to a boy named Andy. The story focuses on Woody, a cowboy doll, and Buzz Lightyear, a space ranger toy. When Buzz arrives, Woody feels threatened and jealous. They both end up lost and must find their way home, learning the value of friendship along the way.."},
        { id: 27, name: 'Toy Story 2', price: 18, imageUrl:'https://m.media-amazon.com/images/I/61xzQKCP-2L._AC_UF1000,1000_QL80_.jpg', info: " Season 2 of Toy Story"},
        { id: 28, name: 'Toy Story 3', price: 20, imageUrl:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DFA21D80509E043EC4CB79E121224FA2FB344AF40ED03B510576F4ED9D831960/scale?width=1200&aspectRatio=1.78&format=webp', info: " Season 3 of Toy Story"},
        { id: 29, name: 'Toy Story 4', price: 25, imageUrl:'https://musicart.xboxlive.com/7/ca1d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080', info: " Season 4 of Toy Story"},
        { id: 30, name: 'Bungo Stray Dogs', price: 1500, imageUrl:'https://i.ebayimg.com/images/g/5iUAAOSwfY5hp2N7/s-l1200.webp', info: " Bungo Stray Dogs is a manga and anime series set in a world where people have supernatural abilities called Gifts. It follows Atsushi Nakajima, who joins the Armed Detective Agency, a group that solves cases involving these abilities. Alongside his eccentric colleagues, Atsushi faces off against criminal organizations like the Port Mafia while uncovering mysteries about his own past and the nature of Gifts. The series combines action, mystery, and character development in a captivating storyline."}
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
        <a href="/moviemain">Movie Shop</a>
        <a href="/novel">,Webb Novel</a>
        <a href="/manga"> ,Manga</a>

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