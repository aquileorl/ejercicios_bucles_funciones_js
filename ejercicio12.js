

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  // insert code
  let found = false;
  let mutantByPower = [];

  for(const mutant of mutants){
    if(mutant["power"] == power){
        found = true;
        mutantByPower.push(mutant);
    } 
  }

  if(found == false){
    return "Poder no encontrado";
  } else {
    console.log("Poder encontrado");
    return mutantByPower;
  }
}

console.log(findMutantByPower(mutants, "magnetism"));
