fetchData();


async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // fetch data from the pokeman api
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


        // conditional branch to handle the response.
        if(!response.ok){
            throw new Error(`Could not find this type of resourse`);
        }

        // converting the response to a json file
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        
    }
    catch(error){
        console.error(error); 
   }
}
