let pokemonList = [{
    pokemon: {
      nom: "Emile",
      hp: 100,
      image: "images/perso01.png",
      abiliter: [
        {"attaque1":[30,"joie"]},
        {"attaque2":[25,"coup de poing"]},
        {"attaque3": [20,"coup de pied"]},
        {"attaque4": [10,"slap"]}
      ]
    }},{
    pokemon: {
      nom: "Eliott",
      hp: 100,
      image:"images/perso02.png",
       abiliter: [
        {"attaque1": [30,"faché"]},
        {"attaque2": [25,"coup de poing"]},
        {"attaque3": [20,"coup de pied"]},
        {"attaque4": [10,"slap"]}
      ]
    }
  },{
    pokemon: {
      nom: "Elena",
      hp: 100,
      image:"images/perso03.png",
       abiliter: [
        {"attaque1": [30,"surprise"]},
        {"attaque2":[25,"coup de poing"]},
        {"attaque3": [20,"coup de pied"]},
        {"attaque4": [10,"slap"]}
      ]
    }
  },{
    pokemon: {
      nom: "Elie",
      hp: 100,
      image:"images/perso04.png",
       abiliter: [
        {"attaque1": [30,"neutre"]},
        {"attaque2": [25,"coup de poing"]},
        {"attaque3": [20,"coup de pied"]},
        {"attaque4": [10,"slap"]}
      ]
    }
  },{
    pokemon: {
      nom: "Erwan",
      hp: 100,
      image:"images/perso05.png",
       abiliter: [
        {"attaque1": [30,"peur"]},
        {"attaque2": [25,"coup de poing"]},
        {"attaque3": [20,"coup de pied"]},
        {"attaque4": [10,"slap"]}
      ]
    }
  },{
    pokemon: {
      nom: "Elisabeth",
      hp: 100,
      image:"images/perso06.png",
       abiliter: [
        {"attaque1": [30,"tristesse"]},
        {"attaque2": [25,"coup de poing"]},
        {"attaque3": [20,"coup de pied"]},
        {"attaque4": [10,"slap"]}
      ]
    }
  },{
    pokemon: {
      nom: "Ethan",
      hp: 100,
      image:"images/perso07.png",
       abiliter: [
        {"attaque1": [30,"relaxe"]},
        {"attaque2": [25,"coup de poing"]},
        {"attaque3": [20,"coup de pied"]},
        {"attaque4": [10,"slap"]}
      ]
    }
  }];
  
  
  
  
  
  function selectionPokemon1(index) {
    //* POKEMON 1
    //*ecrit nom
    document.querySelector(".nom.pokemon1").innerText =
      pokemonList[index]["pokemon"]["nom"];
    //*ecrit hp
    document.querySelector(".hp.pokemon1").innerText =
      pokemonList[index]["pokemon"]["hp"] + "/" + pokemonList[index]["pokemon"]["hp"] + "hp";
    //*met image
    document.querySelector(".img.pokemon1").src = pokemonList[index]["pokemon"]["image"];
  }
    
  
  
  function selectionPokemon2(index){
   //* POKEMON 2
    //*ecrit nom
    document.querySelector(".nom.pokemon2").innerText =
      pokemonList[index]["pokemon"]["nom"];
    //*ecrit hp
    document.querySelector(".hp.pokemon2").innerText =
      pokemonList[index]["pokemon"]["hp"] + "/" + pokemonList[index]["pokemon"]["hp"] + "hp";
    //*met image
    document.querySelector(".img.pokemon2").src = pokemonList[index]["pokemon"]["image"];
  }
  
  let index1 = 0;
  let index2 = 0;
  let nbViePokemon1 = 0;
  let nbViePokemon2 = 0;
  let nbVieMaxPokemon1 = 0;
  let nbVieMaxPokemon2 = 0;
  function selection(){
    let nbPokemon = pokemonList.length-1
   index1 = Math.round(Math.random()*nbPokemon)
   index2 = Math.round(Math.random()*nbPokemon)
   nbViePokemon1 = pokemonList[index1]["pokemon"]["hp"];
   nbVieMaxPokemon1 = pokemonList[index1]["pokemon"]["hp"];
   nbViePokemon2 = pokemonList[index2]["pokemon"]["hp"];
   nbVieMaxPokemon2 = pokemonList[index2]["pokemon"]["hp"];
  
  
   if(index1 == index2){
     index1 = Math.round(Math.random()*pokemonList.length);
     index2 = Math.round(Math.random()*pokemonList.length)
   }
    else{
      selectionPokemon1(index1)
      selectionPokemon2(index2)
    }
  }

  document.querySelector(".selection").addEventListener("click",selection);






  function attaqueG(){
    let nbAbiliter = pokemonList[index1]["pokemon"]["abiliter"].length-1;
    let choixAbiliter = Math.round(Math.random()*nbAbiliter);
    nbViePokemon2 = nbViePokemon2 - pokemonList[index1]["pokemon"]["abiliter"][choixAbiliter][`attaque${choixAbiliter+1}`][0];
    document.querySelector(".hp.pokemon2").innerText = nbViePokemon2  + "/" + nbVieMaxPokemon2 + "hp";
    document.querySelector(".boite.texte.coterG").innerHTML = pokemonList[index1]["pokemon"]["nom"] + " utilise " + pokemonList[index1]["pokemon"]["abiliter"][choixAbiliter][`attaque${choixAbiliter+1}`][1];
    document.querySelector(".boite.texte.coterD").innerHTML =" "
    if(nbViePokemon1<=0){
      alert(pokemonList[index2]["pokemon"]["nom"] + " à gagner!");
      location.reload()
      }
    setTimeout(attaqueD,3000);
  }

  
  function attaqueD(){
    let nbAbiliter = pokemonList[index2]["pokemon"]["abiliter"].length-1;
    let choixAbiliter = Math.round(Math.random()*nbAbiliter)
    nbViePokemon1 = nbViePokemon1 - pokemonList[index2]["pokemon"]["abiliter"][choixAbiliter][`attaque${choixAbiliter+1}`][0];
    document.querySelector(".hp.pokemon1").innerText =  nbViePokemon1 + "/" + nbVieMaxPokemon1 + "hp";
    document.querySelector(".boite.texte.coterD").innerHTML = pokemonList[index2]["pokemon"]["nom"] + " utilise " + pokemonList[index2]["pokemon"]["abiliter"][choixAbiliter][`attaque${choixAbiliter+1}`][1];
    document.querySelector(".boite.texte.coterG").innerHTML =" " 
    if(nbViePokemon2<=0){
      alert(pokemonList[index1]["pokemon"]["nom"] + " à gagner!");
      location.reload()
    }
    setTimeout(attaqueG,3000);
  }
  
  
  document.querySelector(".combat").addEventListener("click",function(){
    if(document.querySelector(".nom.pokemon1").innerText == "pokemon 1"){
        alert("veuillez selectionner les pokemons");
    }else{
      document.querySelector(".selection").classList.add("disabled");
      document.querySelector(".combat").classList.add("disabled");
      attaqueG();
    }
 });
 
 document.addEventListener("keydown", function(event) { 
  if(event.key==" "){
    selection()
  };
});
document.addEventListener("keydown", function(event) { 
  if(event.key=="Enter"){
    if(document.querySelector(".nom.pokemon1").innerText == "pokemon 1"){
      alert("veuillez selectionner les pokemons");
  }else{
    attaqueG()
  }
  }
});
