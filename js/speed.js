(function(){
var speedForm = document.querySelector("#speeds");

function loadTier(event){
  event.preventDefault();
  var it = event.currentTarget;
  var tierSelect = it.querySelector('#tier');
  var monSelect = it.querySelector("#mons");
  var tier;
  switch(tierSelect){
    case "ou":
      tier = ou.sort(function(a,b){
        return ( (a.baseStats.spe < b.baseStats.spe) ? 1: ( (a.baseStats.spe == b.baseStats.spe) ? 0 : -1) );
      });
      for(var i=0;i<tier.length;i++){
        var toption = document.createElement('option');
        toption.innerHTML = tier[i].species;
        monSelect.appendChild(toption);
      }
      break;
    case "uu":
      break;
    case "ru":
      break;
    case "nu":
      break;
    case "lc":
     break;
  }

speedForm.addEventListener('submit',loadTier,false);
})();
