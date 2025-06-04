
const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
    // insert code
    let found = false;
    let capital = "";

    for(const key in capitals){
      if( key == country){
        found = true;
        capital = capitals[key];
      }
    }

    if(found == false){
      capital = "This country isn't in the list. Therefore not capital found."
    } else {
      return capital;
    }
  }

  console.log(getCapital("Ireland"));

  
  