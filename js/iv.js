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

var natures = {
  hardy:[1,1,1,1,1,1],//1
  lonely:[1,1.1,0.9,1,1,1],//2
  brave:[1,1.1,1,1,1,0.9],//3
  adamant:[1,1.1,1,0.9,1,1],//4
  naughty:[1,1.1,1,1,0.9,1],//5
  bold:[1,0.9,1.1,1,1,1],//6
  docile:[1,1,1,1,1,1],//9
  relaxed:[1,1,1.1,1,1,0.9],//7
  impish:[1,1,1.1,0.9,1,1],//8
  lax:[1,1,1.1,1,0.9,1],//10
  timid:[1,0.9,1,1,1,1.1],//11
  hasty:[1,1,0.9,1,1,1.1],//12
  serious:[1,1,1,1,1,1],//13
  jolly:[1,1,1,0.9,1,1.1],//14
  naive:[1,1,1,1,0.9,1.1],//15
  modest:[1,0.9,1,1.1,1,1],//16
  mild:[1,1,0.9,1.1,1,1],//17
  quiet:[1,1,1,1.1,1,0.9],//18
  bashful:[1,1,1,1,1,1],//19
  rash:[1,1,1,1.1,0.9,1],//20
  calm:[1,0.9,1,1,1.1,1],//21
  gentle:[1,1,0.9,1,1.1,1],//22
  sassy:[1,1,1,1,1.1,0.9],//23
  careful:[1,1,1,0.9,1.1,1],//24
  quirky:[1,1,1,1,1,1]//25
}

function calcIV(stat,statVal,nature,level,base,ev){
var iv = null;
var nat = natures[nature];
var natVal = nat[stat];
return iv;
}

console.log(calcIV(2,100,2,10,100,0));

})();
