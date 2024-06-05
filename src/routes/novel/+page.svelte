<script>
    let products = [
        { id: 1, name: 'Omniscient Reader Viewpoint volym 1-5', price: 890, imageUrl:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602711083i/55673074.jpg', info: "Kim Dojka a 28 year officer worker that work in a game company. In the subway at the end of the day he got a notice that his favorite webb novel Tree Ways to Survive a Runied World. The novel have more than 3000 chapter and he was reading it more than 10 year. He was the only reader that readed the novel from the begining to the end. In thet day he didn't know that the novel thet he read will become reality and every character in thet novel will come to life, and he will be the only reader how know how the story vill end and he is willing to change the end of the story and give the people that he cear about the appy endning that they want. "},
        { id: 2, name: 'Trash of the count family', price: 860, imageUrl:'https://static.lightnovelworld.co/bookcover/300x400/00045-trash-count-novel.jpg', info: "When I opened my eyes, I was inside a novel. [The Birth of a Hero]. [The Birth of a Hero] was a novel focused on the adventures of the main character, Choi Han, a high school boy who was transported to a different dimension from Earth, along with the birth of the numerous heroes of the continent I became a part of that novel as the tr*sh of the Count’s family, the family that oversaw the territory where the first village that Choi Han visits is located. The problem is that Choi Han becomes twisted after that village, and everyone in it, is destroyed by assassins. The bigger problem is the fact that this s*upid tr*sh who I’ve become doesn’t know about what happened in the village and messes with Choi Han, only to get beaten to a pulp. “…This is going to be a headache.” I feel like something serious has happened to me. But it was worth trying to make this my new life."},
        { id: 3, name: 'Hunger games books', price: 800, imageUrl:'https://www.kindpng.com/picc/m/25-252009_hunger-games-book-covers-hd-png-download.png', info: "The Hunger Games is a dystopian novel by Suzanne Collins set in the fictional nation of Panem. It follows Katniss Everdeen, who volunteers to take her sister's place in the annual Hunger Games, where contestants fight to the death. Katniss forms alliances to survive and becomes a symbol of rebellion against the oppressive Capitol. The book explores themes of survival, love, and power."},
        { id: 4, name: 'What Happens When the Second Male Lead Powers Up', price: 600, imageUrl: 'https://cdn.novelupdates.com/images/2021/01/What-Happens-When-the-Second-Male-Lead-Powers-Up.jpg', info: "I was transported into the romantic fantasy novel my younger sister was reading, not as the male lead but as the second male lead. If I remember correctly, this punk is fated to go into war in the future and die in the male lead’s place. Okay, I’ve made up my mind. Let’s not go anywhere near the main characters and stay healthy until I can go home."},
        { id: 5, name: 'The S-Classes that i rised', price: 740, imageUrl:'https://th.bing.com/th/id/OIP.xi7E52kCykGgNZ9hpOHgTgAAAA?rs=1&pid=ImgDetMain', info: "8 year ago a apocalypse happened in the world where gate for other world oppened and monster come to the earth. It is not only the monster that apered, even humane came to have power. Those humen caled hunter, from strongest S to the weakest F. Han Youjin is a F class hunter but his brother are S class. One day when Han Youjin whent to a D class dungeons, a SS class monster apered and his yonger brother saved hom, but the cost whas his live. One of Han Youjins power are to take te power of somone that like him when that persone die and make it stronger fore an houer. When Han Youjin managade to killed the monster,a reward came to him, a crital that will make one of his wish come true, bur it can't relife the death. So instand of it Han Youjin travelet 5 year to the past before the relationship with his brother got worse, so he will change what happened so it will not happen agen."},
        { id: 6, name: 'Theatrical Regression Life', price: 500, imageUrl:'https://cdn.novelupdates.com/imgmid/series_59749.jpg', info: "Theatrical regression life of an old-fashioned villain (kkondae) who recalled his past life. “There’s nothing I wouldn’t do for a better life.” —— Survival in the ‘Otherworld’; a place where only the insane can set foot in."},
        { id: 7, name: 'The Trashy PD Has To Survive as an Idol', price: 550, imageUrl: 'https://cdn.novelupdates.com/imgmid/series_54346.jpg', info: "[Congratulations Seo Hoyun! You have been selected as a player in the Unknown Idol Tycoon.] The good-for-nothing PD, who is criticized by everyone, becomes a unknown idol in a parallel world. Only his younger sibling remembers him. To return to the original world, he must become a top idol and clear the game! “…Quest accepted.” “Are you crazy?” “Don’t we need to eat and live?” His specialty is blackmailing, his hobby is persuasion. The survival story of the unscrupulous PD-turned-idol who will stop at nothing!"},
        { id: 8, name: 'Harry Potter books', price: 670, imageUrl:'https://buyersclub.blob.core.windows.net/images/items/2356412_0_800x800.jpg', info: "The Harry Potter book series, written by J.K. Rowling, follows the adventures of a young wizard named Harry Potter and his friends Hermione Granger and Ron Weasley as they attend Hogwarts School of Witchcraft and Wizardry. Throughout the seven books, they face challenges, uncover secrets about their past, and ultimately confront the dark wizard Lord Voldemort. Themes of friendship, courage, and the power of love are central to the series, which concludes with an epic battle and Voldemort's defeat."},
        { id: 9, name: 'The Lord of the Rings', price: 690, imageUrl:'https://image.bokus.com/images/9780063270923_200x_the-lord-of-the-rings-boxed-set-contains-tvtie-in-editions-of-fellowship-of-the-ring-the-two-towers-and-the-return-of-the-king_haftad', info: "The Lord of the Rings follows Frodo Baggins and his companions as they embark on a quest to destroy a powerful ring that could bring darkness to the world. They face challenges and battles as they journey across Middle-earth to Mount Doom, where the ring was forged. The series explores themes of friendship, courage, and the struggle between good and evil."},
        { id: 10, name: 'Return of Mount Hua Sect', price: 700, imageUrl:'https://cdn.novelupdates.com/imgmid/series_44245.jpg', info: "The 13th generation disciple of the Great Mount Hua Sect. One of the Three Great Swordsmen. The Plum Blossom Sword Saint, Chung Myung. After slicing the head of the peerless Heavenly Demon, who threw the world into chaos, he slept an eternal sleep on the peak of the Hundred Thousand Great Mountains. Jumping over a hundred years, he comes back in the body of a child. But… what? Mount Hua declined? What the hell are you talking about!? It’s only natural to want to live if you’re going broke. “Decline? Even though I’m here? Who would dare!” Plum blossoms eventually fall. But when the cold winter passes and spring comes, plum blossoms shall bloom again. “But I’m gonna die first before Mount Hua gets revived! If you’re gonna go bust, might as well do it right, you bastards!” The beginning of the Plum Blossom Sword Saint, Chung Myung’s solitary struggle to save the thoroughly declining Mount Hua Sect."},
        { id: 11, name: 'Doctor’s Rebirth', price: 790, imageUrl: 'https://cdn.novelupdates.com/imgmid/series_63864.jpg', info: "I had been abroad to do medical volunteer work, when I was swept up in a civil war. I was killed by a rebel soldier, while taking a bullet for a patient. But when I finally woke up, I had become a child?!? And in front of me stood a destroyed carriage and a group of oddly dressed people, who were unconscious! “It’s just like a Murim world.” As I hurry to perform first aid in an attempt to save even one person, I realize that this world is that of [The Supreme Demon King], a Wuxia novel I’ve enjoyed reading. After meeting the rescue team of the ‘Three Great Doctors’, I found out that one of the person I saved was the protagonist of this novel, the future Demon King ‘Yeo Haryun’! “Hey, since I’m indebted to you for saving me, call me ‘hyung’.” For saving his life, I become sworn brothers with the future Demon King, and the White Dragon Godly Doctor, one of the most knowledgeable people around, recognized my potential and took me in as his disciple. This is the story of how I became the greatest physician in Gangho!"},
        { id: 12, name: 'The Editor Is the Novel’s Extra', price: 650, imageUrl:'https://cdn.novelupdates.com/imgmid/series_28699.jpg', info: "Kim Jeongjin, an editor of a publishing company on the brink of closing due to bankruptcy, ends up transmigrating inside a fantasy novel as the incompetent youngest son of a wealthy family. And here he thought that he should live a rich life in this life… “Why was I given a high-level skill? Don’t even bother!”"},
        { id: 13, name: 'Solo Leveling volym 1-3', price: 460, imageUrl:'https://bok.hstrom.se/cdn/shop/files/146524232.jpg?v=1708478509&width=713', info: "South Korean web novel series follows Sung Jin-Woo, a low-ranked hunter who gains the ability to level up like a video game character. He embarks on a journey to become stronger and uncover the mysteries behind his powers."},
        { id: 14, name: 'Lord of the Mysteries', price: 800, imageUrl:'https://cdn.novelupdates.com/images/2018/11/Lord-of-the-Mysteries.jpeg', info: "With the rising tide of steam power and machinery, who can come close to being a Beyonder? Shrouded in the fog of history and darkness, who or what is the lurking evil that murmurs into our ears? Waking up to be faced with a string of mysteries, Zhou Mingrui finds himself reincarnated as Klein Moretti in an alternate Victorian-era world where he sees a world filled with machinery, cannons, dreadnoughts, airships, different machines, as well as Potions, Divination, Hexes, Tarot Cards, Sealed Artifacts… The Light continues to shine but mystery has never gone far. Follow Klein as he finds himself entangled with the Churches of the world—both orthodox and unorthodox—while he slowly develops newfound powers thanks to the Beyonder potions. Like the corresponding tarot card, The Fool, which is numbered 0—a number of unlimited potential—this is the legend of “The Fool”."},
        { id: 15, name: 'Debut or Die', price: 450, imageUrl:'https://cdn.novelupdates.com/images/2024/05/Debut-or-Die.png', info: "A student who had been preparing for the Civil Service examination for 4 years suddenly found himself in an unfamiliar body and 3 years in the past. Along with it came a status window displaying a threat right before his eyes! [Outbreak!] [Status Abnormality: ‘Debut or Die’ occurs! A diary about the transformation of the main character, who was suddenly challenged to be an idol even though he had never been in the industry before, due to the sudden threat of death. ※Speciality: Before regressing and possessing his new body, he used to collect and sell idol’s data."},
        { id: 16, name: 'EX rank supporting role replay in a prestigious high school', price: 600, imageUrl: 'https://cdn.novelupdates.com/images/2022/04/Ex-Rank-Supporting-Roles-Replay-in-a-Prestigious-School.png', info: " It is about Cho Euishin, where he whas playing a fames game. It is fames for it difficulty and it haten. But Cho Euishin loved the game and loved every playable character in it, so he managed to finish it in 10 year, but in the end every character in the gme died and it was not a happy end. Efter he finished the game a light abered in front of his eye. After 10 second when he oppened his eye, he fund himself inside the game, so he decided to give that game a happy endning with no one die."},
        { id: 17, name: 'Star Instructor, Master Baek', price: 480, imageUrl:'https://cdn.novelupdates.com/imgmid/series_49444.jpg', info: "After his qi center is destroyed, a martial arts instructor of the Blood Demon Cult is assigned to learn and research the martial arts of four captured murim masters. However, when the Cult betrays him and decides to kill him, he fights back and everyone in the Cult dies, including himself. He then mysteriously wakes up in the body of Baek Suryong, a young martial arts instructor in the rural countryside with a disease that will kill him within three years. He realizes that the martial arts he had learned holds the key to healing his new body’s illness, but in order to do that, he needed money. A LOT of money."},
        { id: 18, name: 'I Became a Sick Nobleman', price: 150, imageUrl:'https://cdn.novelupdates.com/imgmid/series_42125.jpg', info: "I became a miserably weak aristocrat in the web novel ‘SSS-Class Knight’. With a body that can drop at a moment’s notice, no less. ‘Let’s live for now. Let’s fight on.’ I have to survive, even without knowing the ending."},
        { id: 19, name: 'After Transmigrating Into An Idol Talent Show', price: 500, imageUrl:'https://cdn.novelupdates.com/imgmid/series_53237.jpg', info: "“The information displayed inside shows that you’re still in high school, and you also don’t belong to any entertainment company, so what made you think of participating in our talent show?” Qin Lu opened his eyes and found himself standing right under the spotlight. In front of him sat four people with strong auras and delicate makeup. The tiered pyramid-shaped seats behind them were filled with handsome young boys. Their gazes were all fixated on Qin Lu, watching his performance."},
        { id: 20, name: 'Frankenstein', price: 650, imageUrl:'https://covers.storytel.com/jpg-640/9782380370935.aec7d1e8-21c3-4a80-9962-36ba092f9de9?optimize=high&quality=70', info: " Frankenstein is a novel by Mary Shelley about a young scientist, Victor Frankenstein, who creates a creature but abandons it. The creature seeks revenge, leading to tragedy for both."},
        { id: 21, name: 'Surviving as a Mage in a Magic Academy', price: 600, imageUrl:'https://cdn.novelupdates.com/imgmid/series_59232.jpg', info: "Graduate student Yi-han finds himself reborn in another world as the youngest child of a mage family.– I’m never attending school, ever again! ‘What do you wish to achieve in life?’ ‘I wish to play around and live comforta-‘ ‘You must be aware of your talent. Now go attend Einroguard!’ ‘Patriarch!’ My future would be guaranteed once I graduate. For my future!"}, 
        { id: 22, name: 'Requiem of Subdued Souls', price: 300, imageUrl:'https://cdn.novelupdates.com/imgmid/series_46781.jpg', info: "“If there existed a horrendous ghost among the hwarangs, who would it be? Of course, it’d be Seol Yeong-rang who uses necromancy to call upon ghosts!” Hwarang Seol Yeong, who was named as the horrendous ghost who’d bring forth a great disaster one day. There was only one way to get rid of the false accusations and return to his original position. It was to prove he wasn’t a horrendous ghost by solving abnormal incidents. Then, Ja Ha, the head of the previous generation’s hwarang, the man who killed a great evil spirit eight years prior and disappeared without a trace, appeared in front of Seol Yeong…"},
        { id: 23, name: 'I Returned as a God', price: 400, imageUrl:'https://cdn.novelupdates.com/imgmid/series_53404.jpg', info: "I was thrust into an unknown world by a god and forced to save it, under the promise that if I were successful in saving the world, I’d be sent back to my home… However, after doing the god’s bidding, I was betrayed. With no other options left, I had to escape through a dimensional rift. “Just you wait! I’ll definitely come back!” That’s how I… Returned as a God."},
        { id: 24, name: 'Count’s Youngest Son is a Warlock', price: 200, imageUrl:'https://cdn.novelupdates.com/imgmid/series_43429.jpg', info: "The Count of Chronia’s youngest son became a warlock to live."},
        { id: 25, name: 'How to Live as the Enemy Prince', price: 500, imageUrl:'https://cdn.novelupdates.com/images/2019/10/Enemys-Prince-cover.jpg', info: " I could hear the hum of life in my ears. It was hard to breathe…. … I raised my gaze and stared into the distance. However, my blurred vision could not see anything. The light began to fade. That was my last memory. When I opened my eyes once again, it was 10 years before that last memory took place. And of all the things I could have become, it was from the enemy country that drove Secretia to ruin – I became Kyris’ third prince Calian."},
        { id: 26, name: 'The Name of the Wind', price: 200, imageUrl: 'https://m.media-amazon.com/images/I/611iKJa7a-L._AC_UF1000,1000_QL80_.jpg', info: "The Name of the Wind is the first book in Patrick Rothfuss's fantasy trilogy The Kingkiller Chronicle. The novel follows the life of Kvothe, a legendary figure, as he narrates his story to a chronicler."},
        { id: 27, name: 'Jade City', price: 400, imageUrl:'https://m.media-amazon.com/images/I/81AquDKQT0L._AC_UF1000,1000_QL80_.jpg', info: "Jade City by Fonda Lee is an epic urban fantasy novel set in the fictional city of Janloon, where jade grants its wearers enhanced abilities and magical powers. The story follows two rival crime families, the No Peak Clan and the Mountain Clan, as they vie for control of the city and its precious jade supply. The novel intricately weaves together themes of family loyalty, power, and tradition in a world inspired by East Asian culture and gangster dramas."},
        { id: 28, name: 'Nattens cirkus', price: 220, imageUrl:'https://heartfullofbooks.files.wordpress.com/2014/05/the-night-circus-uk.jpg?w=188&h=300', info: "The Night Circus by Erin Morgenstern is a fantasy novel that weaves a magical tale of love, rivalry, and enchantment. The story centers around a mysterious circus that only opens at night and serves as the battleground for a high-stakes competition between two young illusionists."},
        { id: 29, name: 'Who Made Me a Princess', price: 300, imageUrl:'https://images.penguinrandomhouse.com/cover/9781685797713', info: "When I opened my eyes I had become a princess! But out of all characters in this romance novel, why is it the princess who has the fate of dying to her own blood-related dad, the emperor! If I want to live, I must not be seen by that emperor dad. “When did this kind of scumbag start living in my castle?” The man who doesn’t have single drop of blood nor tear to drop, that cold emperor Claude! Will Athanasia who had been caught by the emperor be able to survive? “I… What do I do…..?”"},
        { id: 30, name: 'Twilight New Moon books', price: 1000, imageUrl:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHHPI16-NrdQnkxjBIxOqzcpJcocyWxDgOEezBTTQdz2n16_nYErtuTZwx9m_JcF-hZrmKgiPsfZs3NdzC1jkk6pK-zsTUBBzGGfTURlWTsfCBpuPbnDQgNw', info:  "New Moon is the second book in Stephenie Meyer's Twilight series. The story picks up with Bella Swan celebrating her 18th birthday with the Cullen vampire family. However, a paper cut during the festivities prompts Jasper, a vampire with a difficult past, to lose control and attack Bella. In the aftermath, Edward Cullen, feeling guilty and believing he's a danger to Bella, decides to leave Forks, Washington, and Bella behind, along with his family. Bella, devastated by Edward's departure, falls into a deep depression. She finds solace in her friendship with Jacob Black, who she discovers is a werewolf. As Bella spends more time with Jacob, she learns about the existence of werewolves and the history of their rivalry with vampires. Though Jacob provides some comfort,"}
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
        <a href="/manga">,Manga</a>
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