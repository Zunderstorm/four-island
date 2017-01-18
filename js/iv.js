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
  console.log(mon + "\n stats:" + stats + "\n level: " + level + "\n EVs: " + EVs + "\n Nature: " + nature);
  var IVs = [];
  // var IVmin = [];
  // var IVmax =[];
  var s = ["hp","atk","def","spa","spd","spe"];
  var bases = pokedex[mon].baseStats;
  // for(var i=0;i<6;i++){
        // IVmin[i]=Math.ceil((Math.ceil(stats[i]/natures[nature][i])-5)*(100/level)-2*bases[s[i]]-(EVs[i]/4));
    // IVmax[i]=Math.floor((Math.ceil((stats[i]+0.99999)/natures[nature][i])-5)*(100/level)-2*bases[s[i]]-(EVs[i]/4));
    // IVs[i] = ((stats[i]/natures[nature][i])*100)/level - 2*bases[s[i]] - (EVs[i]/4);
    // console.log(IVmin[i] + " min");
    // console.log(IVmax[i] + " max");
  // }

  IVs[0] =[];
  for(var x=0;x<32;x++){
    var tempStat = Math.floor((2*bases["hp"] + x + Math.floor(EVs[0]/4)+100)*level/100 + 10);
    if(tempStat == stats[0]){
      IVs[0].push(x);
    }
  }
  for(var i=1;i<6;i++){
    IVs[i] =[];
    for(var x=0;x<32;x++){
      var tempStat = Math.floor((2*bases[s[i]] + x + Math.floor(EVs[i]/4))*level/100 + 5);
      if(tempStat==stats[i]){
        IVs[i].push(x);
      }
    }
  }

  // console.log(bases);
  // return [IVmin,"______",IVmax];
  for(var i=0;i<6;i++){
    console.log(s[i] + " " + IVs[i]+"\n");
  }
  return IVs;
}

console.log("IVS: 10, 31,31,31,31,0");
calcIVs("bulbasaur",[20,11,11,13,13,9],5,[0,0,0,0,0,0],12) + " IVs"


var pokeslist = document.querySelector('#pokes');

// console.log(pokedex);

var temptemp =0;
    for (var key in pokedex){
        var newPoke = document.createElement('option');
            newPoke.value = key;
            newPoke.innerHTML = key.charAt(0).toUpperCase() + key.slice(1);
            pokeslist.appendChild(newPoke);
    }

})();
