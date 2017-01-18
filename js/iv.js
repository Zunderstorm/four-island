(function(){
  // HP = ((2*Base + IV + EV/4 + 100) * Level) / 100 + 10
  // IV = ((HP - 10) * 100) / Level - 2*Base - EV/4 - 100
  // EV = (((HP - 10) * 100) / Level - 2*Base - IV - 100) * 4


  // Stat = (((2*Base + IV + EV/4) * Level) / 100 + 5) * Nature
  // IV = ((Stat/Nature - 5) * 100) / Level - 2*Base - EV/4
  // EV = (((Stat/Nature - 5) * 100) / Level - 2*Base - IV) * 4

  //IF nature is +ve, 1.10, if -ve, 0.9, if neutral, 1.0

var hp = 0;
var atk = 1;
var def = 2;
var spa = 3;
var spd = 4;
var spe = 5;

var natures = [
  [1,1,1,1,1,1],//hardy - 0
  [1,1.1,0.9,1,1,1],//lonely - 1
  [1,1.1,1,1,1,0.9],//brave - 2
  [1,1.1,1,0.9,1,1],//adamant - 3
  [1,1.1,1,1,0.9,1],//naughty - 4
  [1,0.9,1.1,1,1,1],//bold - 5
  [1,1,1,1,1,1],//docile - 6
  [1,1,1.1,1,1,0.9],//relaxed - 7
  [1,1,1.1,0.9,1,1],//impish - 8
  [1,1,1.1,1,0.9,1],//lax - 9
  [1,0.9,1,1,1,1.1],//timid - 10
  [1,1,0.9,1,1,1.1],//hasty - 11
  [1,1,1,1,1,1],//serious - 12
  [1,1,1,0.9,1,1.1],//jolly - 13
  [1,1,1,1,0.9,1.1],//naive - 14
  [1,0.9,1,1.1,1,1],//modest - 15
  [1,1,0.9,1.1,1,1],//mild - 16
  [1,1,1,1.1,1,0.9],//quiet - 17
  [1,1,1,1,1,1],//bashful - 18
  [1,1,1,1.1,0.9,1],//rash - 19
  [1,0.9,1,1,1.1,1],//calm - 20
  [1,1,0.9,1,1.1,1],//gentle - 21
  [1,1,1,1,1.1,0.9],//sassy - 22
  [1,1,1,0.9,1.1,1],//careful - 23
  [1,1,1,1,1,1]//quirky - 24
];

// var mod = natures[nature][stat];
// IV = ((Stat/Nature - 5) * 100) / Level - 2*Base - EV/4
// iv = ((statVal/mod - 5)*100)/level - 2*base - ev/4;

function calcIVs(mon,stats,level, EVs,nature){
  var IVs = [];
  var s = ["hp","atk","def","spa","spd","spe"];
  var bases = pokedex[mon].baseStats;
  for(var i=0;i<6;i++){
    console.log(IVs[i]);
    // console.log(stats[i]);
    // console.log(natures[nature][i]);
    // console.log(level);
    IVs[i] = ((stats[i]/natures[nature][i])*100)/level - 2*bases[s[i]] - (EVs[i]/4);
  }
  console.log(bases);
  return IVs;
}

console.log(
  calcIVs("bulbasaur",[21,11,11,13,13,9],5,[0,0,0,0,0,0],12) + " IVs"
);

var pokeslist = document.querySelector('#pokes');

// console.log(pokedex);

  // for(var i=1;i<3;i++){
  //     var newPoke = document.createElement('option');
  //     newPoke.value = pokedex["bulbasaur"].species;
  //     pokeslist.appendChild(newPoke);
  //   }
})();
