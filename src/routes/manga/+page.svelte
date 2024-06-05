<script>
    let products = [
        { id: 1, name: 'Jujutsu kaisen', price: 300, imageUrl:'https://down-br.img.susercontent.com/file/sg-11134201-22110-ai531zondgkv77', info: "The narrative begins with Yuji Itadori joining his school's Occult Club to pass time. However, when his friends unseal a powerful Cursed Object—a finger belonging to the ancient, malevolent sorcerer Ryomen Sukuna—Yuji swallows it to protect them. This act turns him into Sukuna's vessel. Despite Sukuna's evil nature, Yuji retains control over his body, prompting the powerful sorcerer Satoru Gojo to bring him to the Tokyo Prefectural Jujutsu High School. Yuji's mission becomes to consume all of Sukuna's fingers to ultimately destroy Sukuna​ "},
        { id: 2, name: 'One Piece manga', price: 1090, imageUrl:'https://m.media-amazon.com/images/I/81MLf-pgXrL._AC_UF1000,1000_QL80_.jpg', info: "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It follows the adventures of Monkey D. Luffy, a young pirate who sets out on a journey to find the legendary treasure known as One Piece and become the Pirate King. Along the way, Luffy forms a diverse crew, known as the Straw Hat Pirates, who share his dream and face various challenges, including battles with other pirates, government agents, and powerful entities. The series explores themes of friendship, loyalty, and the pursuit of dreams, and is known for its imaginative world-building, engaging characters, and epic story arcs."}, 
        { id: 3, name: 'Naruto manga', price: 1050, imageUrl:'https://m.media-amazon.com/images/I/812KZelX6bL._AC_UF1000,1000_QL80_.jpg', info: " Naruto follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village. Alongside his friends, Naruto faces challenges, battles powerful enemies, and works towards achieving his dream of becoming Hokage."},
        { id: 4, name: 'Demon Slayer manga', price: 1000, imageUrl:'https://m.media-amazon.com/images/I/91+5OK-V00L._AC_UF1000,1000_QL80_.jpg', info: " Demon Slayer follows Tanjiro Kamado, a young demon slayer seeking revenge for his family's murder and a cure for his sister, Nezuko, who was turned into a demon. Along the way, he battles powerful demons and forms alliances with other demon slayers. The series explores themes of family, friendship, and redemption, and is known for its captivating story and stunning artwork."},
        { id: 5, name: 'Attack on Titan manga', price: 1050, imageUrl:'https://www.japantimes.co.jp/uploads/imported_images/uploads/2021/05/np_file_87110.jpeg', info: " Attack on Titan is a Japanese manga series set in a world where humanity battles giant humanoid creatures called Titans. The story follows Eren Yeager, his adoptive sister Mikasa Ackerman, and their friend Armin Arlert as they join the military to fight against the Titans and uncover the truth about their existence. It explores themes of survival, freedom, and the consequences of war."},
        { id: 6, name: 'Bungo Stray Dogs', price: 1000, imageUrl:'https://i.ebayimg.com/images/g/5iUAAOSwfY5hp2N7/s-l1200.webp', info: " Bungo Stray Dogs is a manga and anime series set in a world where people have supernatural abilities called Gifts. It follows Atsushi Nakajima, who joins the Armed Detective Agency, a group that solves cases involving these abilities. Alongside his eccentric colleagues, Atsushi faces off against criminal organizations like the Port Mafia while uncovering mysteries about his own past and the nature of Gifts. The series combines action, mystery, and character development in a captivating storyline."},
        { id: 7, name: 'Haikyuu', price: 350, imageUrl:'https://m.media-amazon.com/images/I/8125DI58M+L._AC_UF1000,1000_QL80_.jpg', info: "Haikyuu!! is a popular sports manga written and illustrated by Haruichi Furudate. The story centers around Shoyo Hinata, a high school student who becomes passionate about volleyball after watching a national championship match on TV. Despite his short stature, Hinata is determined to become an outstanding volleyball player like his idol, the Little Giant from Karasuno High School."},
        { id: 8, name: 'Kuroko no Basket', price: 340, imageUrl:'https://i.ebayimg.com/images/g/hN4AAOSwa6Rg59a~/s-l1200.webp', info: "Kuroko no Basket (Kuroko's Basketball) is a sports manga series written and illustrated by Tadatoshi Fujimaki. The story revolves around the high school basketball team of Seirin High, particularly focusing on two first-year players: Tetsuya Kuroko and Taiga Kagami."},
        { id: 9, name: 'Yuukoku no Moriarty', price: 500, imageUrl:'https://i.ebayimg.com/images/g/pisAAOSwKZZi68Fo/s-l1600.jpg', info: "Set in the late 19th century, the story focuses on William James Moriarty, a brilliant mathematician and criminal mastermind. Along with his brothers Albert and Louis, he seeks to overthrow the corrupt British aristocracy and create a fairer society. The Moriarty brothers, with William as the strategic leader, use their intelligence and resources to orchestrate crimes that expose the injustices of the upper class."},
        { id: 10, name: 'Detective Conan', price: 1050, imageUrl:'https://m.media-amazon.com/images/I/81QEpPOCLEL._AC_UF1000,1000_QL80_.jpg', info: "Hailed as the savior of the Japanese Police Department, high school detective Shinichi Kudou uses a combination of observational skills, critical thinking, and all-around knowledge to solve cases that leave the police stumped. One day, while at an outing with childhood friend Ran Mouri, Shinichi bears witness to a suspicious transaction between two men and is caught. As a result, he is forced to ingest a poison that is supposed to kill him, but unexpectedly shrinks his body to the size of a grade-schooler instead. Now believed to be dead, Shinichi takes up the alias of Conan Edogawa (a compound of the names of the famous mystery authors Arthur Conan Doyle and Ranpo Edogawa) in order to hide his identity and begins his new life as a seven-year-old living with Ran and her private detective father. Meitantei Conan follows Conan as he continues to solve murder cases, all while slowly working toward exposing the men who shrunk him and eventually restoring his body."},
        { id: 11, name: 'HunterxHunter', price: 1000, imageUrl:'https://m.media-amazon.com/images/I/61wCMEZAsBL._AC_UF1000,1000_QL80_.jpg', info: "he story revolves around a young boy named Gon Freecss, who discovers that his father, Ging Freecss, whom he thought was dead, is actually alive and a legendary Hunter. Hunters are licensed professionals capable of tracking down secret treasures, rare beasts, or even other individuals. They also have access to otherwise unavailable funds and information."},
        { id: 12, name: 'Steings Gate', price: 500, imageUrl:'https://i.ebayimg.com/images/g/1mUAAOSwDwNjPfcO/s-l1600.jpg', info: "Okabe and his friends run the Future Gadget Laboratory in Akihabara, Tokyo, where they invent gadgets and explore scientific curiosities. Their world changes dramatically when they accidentally create a device that can send text messages to the past using a modified microwave, which they dub the Phone Microwave."},
        { id: 13, name: 'My Hero Academia', price: 900, imageUrl:'https://m.media-amazon.com/images/I/71zatdGHRnL._AC_UF1000,1000_QL80_.jpg', info: "In a world where 80% of the population has superpowers called Quirks, Izuku Midoriya is born Quirkless but dreams of becoming a hero. He inherits the powerful Quirk One For All from the greatest hero, All Might, and enrolls in U.A. High School to train as a hero."},
        { id: 14, name: 'Natsume Yuujinchou', price: 600, imageUrl:'https://m.media-amazon.com/images/I/91hNaNXZ9yL._AC_UF1000,1000_QL80_.jpg', info: "Natsume Yuujinchou follows the story of Takashi Natsume, a teenage boy who has the ability to see spirits, a gift he inherited from his deceased grandmother, Reiko Natsume. Reiko, who was shunned by humans for her ability, spent her life challenging and binding spirits, collecting their names in a book she called the Book of Friends. This book allows its owner to control the spirits whose names are written in it."},
        { id: 15, name: 'Fullmetal Alchemist', price: 1200, imageUrl:'https://m.media-amazon.com/images/I/61GWN9NPJvL._AC_UF1000,1000_QL80_.jpg', info: "The story follows two brothers, Edward and Alphonse Elric, who live in the country of Amestris. After their mother dies, they attempt to bring her back to life using alchemy, a practice that allows the manipulation and transformation of matter. However, human transmutation is a forbidden act and their attempt fails horribly. As a result, Edward loses his left leg, and Alphonse loses his entire body. In a desperate bid to save his brother, Edward sacrifices his right arm to bind Alphonse’s soul to a suit of armor."},
        { id: 16, name: 'Owari no Seraph', price: 600, imageUrl:'https://i.ebayimg.com/images/g/x1kAAOSwrXhfxmJM/s-l1200.webp', info: "A mysterious virus sweeps across the globe, killing everyone over the age of 13. In the chaos that follows, vampires emerge from hiding and enslave the surviving children. Among these children are Yu and Mikaela (Mika) Hyakuya, orphans from the Hyakuya Orphanage. They are taken to an underground city where they are used as livestock by the vampires, who harvest their blood."},
        { id: 17, name: 'Servamp', price: 300, imageUrl:'https://i.ebayimg.com/images/g/VnkAAOSwgShjpC7z/s-l1600.jpg', info: "Mahiru Shirota is a 15-year-old high school student who believes in keeping things simple and hates complications. One day, he finds a stray black cat and names it Kuro. However, this cat is no ordinary feline; it transforms into a lazy, apathetic young man who reveals himself to be Sleepy Ash, the Servamp of Sloth."},
        { id: 18, name: 'Black Butler', price: 400, imageUrl:'https://m.media-amazon.com/images/I/81gQgSIrRKL._AC_UF1000,1000_QL80_.jpg', info: "Tucked away in the English countryside lies the ominous manor of the Phantomhives, a family which has established itself as the cold and ruthless Queen's Watchdog as well as the head of London's criminal underground. After a tragedy leaves the Earl and his wife dead, many are shocked when their son, a young boy named Ciel, claims his place as the new Earl of the Phantomhive house. At first, many perceive him only as a child surrounded by a few eccentric servants. But they soon begin to realize that it is foolish to meddle with Ciel and his demonic butler Sebastian"},
        { id: 19, name: 'One Outs', price: 200, imageUrl:'https://upload.wikimedia.org/wikipedia/en/a/ab/One_Outs_volume_1_cover.jpg', info: "Toua Tokuchi, a master of gambling and mind games, holds the remarkable record of 499 wins and zero losses in One Outs, a simplified form of baseball that consists of only a batter and a pitcher. Visiting Okinawa, Tokuchi's hometown, is Hiromichi Kojima, the star batter of the Saikyou Saitama Lycaons, the weakest team in the Japanese baseball league. Dreaming of leading the Lycaons to winning the championship, and in dire need of a replacement for their injured pitcher during a training camp, Kojima involves himself in a game of One Outs, only to lose to a normal fastball from the seemingly invincible Tokuchi."},
        { id: 20, name: 'Blue Lock', price: 400, imageUrl:'https://i.ebayimg.com/images/g/lZwAAOSw7Y9jJs1l/s-l400.jpg', info: "After reflecting on the current state of Japanese soccer, the Japanese Football Association decides to hire the enigmatic and eccentric coach Jinpachi Ego to achieve their dream of winning the World Cup. Believing that Japan has lacked an egoistic striker hungry for goals, Jinpachi initiates the Blue Lock—a prison-like facility where three hundred talented strikers from high schools all over Japan are isolated and pitted against each other. The sole survivor of Blue Lock will earn the right to become the national team's striker, and those who are defeated shall be banned from joining the team forever."},
        { id: 21, name: 'Vinland Saga', price: 700, imageUrl:'https://m.media-amazon.com/images/I/71ivjeCtjdL._AC_UF1000,1000_QL80_.jpg', info: "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an impressive feat for a person his age. However, Thorfinn is not part of the group for the plunder it entails—instead, for having caused his family great tragedy, the boy has vowed to kill Askeladd in a fair duel. Not yet skilled enough to defeat him, but unable to abandon his vengeance, Thorfinn spends his boyhood with the mercenary crew, honing his skills on the battlefield among the war-loving Danes, where killing is just another pleasure of life."},
        { id: 22, name: 'Mairimashita Iruma kun', price: 800, imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0EiQAS9Q3SPGNWDd67LuxWguCd8zaVKg-ew&s', info: "Fourteen-year-old Iruma Suzuki has the worst luck possible! Incapable of saying no to anyone, he has always performed whatever life-threatening jobs his greedy and lazy parents requested. His life takes an unexpected turn when they form a contract with Sullivan, a high-ranking demon, at the cost of his soul. Afraid and confused, Iruma is surprised that all Sullivan wants is to act as his grandfather."},
        { id: 23, name: 'Saiki Kusuo no Psi Nan', price: 100, imageUrl:'https://i.ebayimg.com/images/g/bgQAAOSwwG1bPKyn/s-l1600.jpg', info: "Kusuo Saiki is not your typical high schooler—behind his glasses, pink hair, and antenna-like appendages exists a being of unfathomable psychic power. Telekinesis, teleportation, and astral projection might sound exciting to the average person, but from Saiki's viewpoint, they are nothing but an annoyance. Psychic powers are unnecessary—this is all that Saiki has believed since he was a kid."},
        { id: 24, name: 'Free!', price: 300, imageUrl:'https://static.wikia.nocookie.net/free-anime/images/5/53/Free%21_Vol.1_Blu-ray.png/revision/latest?cb=20130812130213', info: "Haruka Nanase has a love for water and a passion for swimming. In elementary school, he competed in and won a relay race with his three friends Rin Matsuoka, Nagisa Hazuki, and Makoto Tachibana. After claiming victory at the tournament, the four friends went their separate ways. Years later, they reunite as high school students; however, Rin couldn't care less about returning to the way things used to be. Not only does he attend a different school, but the sole thing important to him is proving that he is a better swimmer than Haruka."},
        { id: 25, name: 'Jibaku Shounen Hanako-kun', price: 200, imageUrl:'https://i.ebayimg.com/images/g/TgkAAOSwhBtfSizx/s-l1200.jpg', info: "Rumors of the supernatural overrun Kamome Academy, namely the Seven Mysteries. One of these mysteries is the legend of Hanako-san, the ghost of a young girl residing in the girl's bathroom on the third floor of the old school building, who is said to grant any wish her summoner desires. First-year high school student Nene Yashiro daringly summons Hanako-san in desperate need of love, but the Hanako that appears before her is a boy!"},
        { id: 26, name: 'SK&', price: 300, imageUrl:'https://static.wikia.nocookie.net/sk8theinfinity/images/2/21/SK8_the_Infinity_Manga_Visual.png/revision/latest?cb=20210302212012', info: "High school student Reki Kyan is passionate about one thing: skateboarding. When night falls, he heads to S, an illegal underground race inside a mine where skaters compete in highly dangerous situations. After a loss that results in his skateboard being destroyed and his arm being broken, Reki is now incapable of practicing at all."},
        { id: 27, name: 'Tokyo Revengers', price: 600, imageUrl:'https://m.media-amazon.com/images/I/71yOR2fVofL._AC_UF1000,1000_QL80_.jpg', info: "Takemichi Hanagaki's life is at an all-time low. Just when he thought it couldn't get worse, he finds out that Hinata Tachibana, his ex-girlfriend, was murdered by the Tokyo Manji Gang: a group of vicious criminals that has been disturbing society's peace for quite some time. Wondering where it all went wrong, Takemichi suddenly finds himself traveling through time, ending up 12 years in the past—when he was still in a relationship with Hinata. Realizing he has a chance to save her, Takemichi resolves to infiltrate the Tokyo Manji Gang and climb the ranks in order to rewrite the future and save Hinata from her tragic fate."},
        { id: 28, name: 'Vanitas no Carte', price: 500, imageUrl:'https://m.media-amazon.com/images/I/81odMrRpfYL._AC_UF1000,1000_QL80_.jpg', info: "There once lived a vampire known as Vanitas, hated by his own kind for being born under a full blue moon, as most arise on the night of a crimson one. Afraid and alone, he created the Book of Vanitas, a cursed grimoire that would one day take his vengeance on all vampires; this is how the story goes, at least."},
        { id: 29, name: 'Mireuko-chan', price: 200, imageUrl:'https://m.media-amazon.com/images/I/91x9CWMC89L._AC_UF1000,1000_QL80_.jpg', info: "Miko Yotsuya is a typical high school student whose life turns upside down when she suddenly starts to see gruesome and hideous monsters. Despite being completely terrified, Miko carries on with her daily life, pretending not to notice the horrors that surround her. She must endure the fear in order to keep herself and her friend Hana Yurikawa out of danger, even if that means coming face to face with the absolute worst. Blending both comedy and horror, Mieruko-chan tells the story of a girl who tries to deal with the paranormal by acting indifferent toward it."},
        { id: 30, name: 'Bleach', price: 800, imageUrl:'https://upload.wikimedia.org/wikipedia/en/3/3f/Bleach_%28manga%29_1.png', info: "For as long as he can remember, high school student Ichigo Kurosaki has been able to see the spirits of the dead, but that has not stopped him from leading an ordinary life. One day, Ichigo returns home to find an intruder in his room who introduces herself as Rukia Kuchiki, a Soul Reaper tasked with helping souls pass over. Suddenly, the two are jolted from their conversation when a Hollow—an evil spirit known for consuming souls—attacks. As Ichigo makes a brash attempt to stop the Hollow, Rukia steps in and shields him from a counterattack. Injured and unable to keep fighting, Rukia suggests a risky plan—transfer half of her Soul Reaper powers to Ichigo. He accepts and, to Rukia's surprise, ends up absorbing her powers entirely, allowing him to easily dispatch the Hollow."},
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