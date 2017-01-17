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

function calcIV(stat,statVal,nature,level,base,ev){
var iv = null;
var mod = natures[nature][stat];
// IV = ((Stat/Nature - 5) * 100) / Level - 2*Base - EV/4
iv = ((statVal/mod - 5)*100)/level - 2*base - ev/4;
return iv;
}

// (200/1.1 - 5)*100/23 - 2*100
console.log(calcIV(1,200,2,23,100,0));


})();
