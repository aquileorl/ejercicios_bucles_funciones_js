
const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    // insert code  
    let oldest = xMen[0].year;
    let superHero = [xMen[0]];

    for(const hero of xMen){
        if(hero["year"] < oldest){
            oldest = hero["year"];
            superHero = [hero];
        } else if (hero["year"] == oldest){
            superHero.push(hero);
        }
    }
    return superHero;
  }

  console.log(findOldestXMen(xMen));
  
  