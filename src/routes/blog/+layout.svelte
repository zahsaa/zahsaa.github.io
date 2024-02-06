<script>
    import '../../app.css'

</script>



<main class="container">
  <slot />
  <nav class="bg-gray-800">
    <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md
    px-3 py-2 text-sm font-medium" href="/">Gå Till Hemsidan</a>

</main>


<style>

  .container{
    margin: 2%;
    background-color: rgb(144, 244, 244);
    border-width: 4px;
    border-style:inset;
    border-color: black;
    border-radius: 2%;
    
  }

  
  </style>