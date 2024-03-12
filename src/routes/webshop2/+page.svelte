<script>
    let products = [
        { id: 1, name: 'Alien 1', price: 10000000, imageUrl: 'https://cdn.mos.cms.futurecdn.net/oafrH5eR2xkEjm55LS9gVM-1200-80.jpg' },
        { id: 2, name: 'Alien 2', price: 10000000, imageUrl: 'data:image/jpeg;base64,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'},
        { id: 3, name: 'Alien 3', price: 10000, imageUrl: 'https://www.shutterstock.com/image-photo/aliens-creature-forest-600nw-2109578969.jpg' },
        { id: 4, name: 'Alien 4', price: 100000, imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-s1q5sn_ecb74152.jpeg?region=0,0,450,450' },
        { id: 5, name: 'Alien 5', price: 100000, imageUrl: 'https://fabricfocus.co.uk/cdn/shop/products/TTCD8842aliens_grande.jpg?v=1667151756' },
        { id: 6, name: 'Alien 6', price: 10000000, imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/d4/64/1e/d4641e26-eea4-02b3-4533-68f98c65679d/mzl.nbfjrdzg.png/1200x675mf.jpg' },
        { id: 7, name: 'Alien 7', price: 100000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPtW0MCor6N00zyKICvUiL90FGgkYy3H17EI4ABCnmxK0BXT_LQQoM9bdFDLtIF3RxiPc&usqp=CAU' },
        { id: 8, name: 'Alien 8', price: 1000000, imageUrl:'https://cms.doctorwho.tv/sites/default/files/2022-03/Aliens%20of%20London%20V2%20-%20446x666.jpg'},
        { id: 9, name: 'Alien 9', price: 10000000, imageUrl:'https://t3.ftcdn.net/jpg/02/22/45/96/360_F_222459685_KgbxuHIdAK7OysDE4PGcjyjqPYGyOVtZ.jpg'},
        { id: 10, name: 'Alien 10', price: 100000, imageUrl:'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1623100310/210607-axe-aliens-ufos-tease_zhdulz'},
        { id: 11, name: 'Alien 11', price: 100000000, imageUrl:'https://i2.wp.com/cornellsun.com/wp-content/uploads/2021/06/Grey_Aliens_Drawing.jpg?fit=1170%2C760&ssl=1'},
        { id: 12, name: 'Alien 12', price: 1000000000, imageUrl:'https://media.cnn.com/api/v1/images/stellar/prod/170516142050-tentacled-aliens-from-arrival.jpg?q=w_1110,c_fill'},
        { id: 13, name: 'Alien 13', price: 1000000000000, imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjDA1vG4dJR1m5J5aoJUBOUF4gXwfQpzMCQ&usqp=CAU'}
    ];


    let cart = [];

    function addToCart(product) {
        cart = [...cart, product];
    }

    function removeFromCart(index) {
        cart = cart.filter((_, i) => i !== index);
    }

    function getTotalPrice() {
        return cart.reduce((total, product) => total + product.price, 0);
    }
</script>

<main>
    <h1>Välkommen till vår webbshop! Där du kan köpa från andra planeter.</h1>
    <div class = "container">
     <ul>
        <div class = "producter">
        {#each products as product}
            <li>
                <h2>{product.name}</h2>
                <img src={product.imageUrl} alt={product.name} style="max-width: 190px; max-height: 190px;">
                <p>Pris: ${product.price} </p>
                <button on:click={() => addToCart(product)}>Lägg till i varukorg</button>
            </li>
        {/each}</div>
    </ul>
    <section>
        <h2>Varukorg</h2>
        {#if cart.length === 0}
            <p>Varukorg är tom.</p>
        {:else}
            <ul>
                {#each cart as product, index}
                    <li>
                        <h3>{product.name}</h3>
                        <img src={product.imageUrl} alt={product.name} style="max-width: 100px; max-height: 100px;">
                        <p>Pris: ${product.price}</p>
                        <button on:click={() => removeFromCart(index)}>Ta bort</button>
                    </li>
                {/each}
            </ul>
            <p>Totalt: ${getTotalPrice()}</p>
        {/if}
    </section>
    </div>
</main>

<style>


    .container{
        display: flex;
        background-color: rgb(242, 255, 201);
        width: 1450px;
        border-width: 7px;
        border-style:groove;
        border-color: black;
    }

    .producter{
        display: flex;
       width: 45vw;
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
    li {
        margin-bottom: 30px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
    }
</style>