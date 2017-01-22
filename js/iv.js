(function() {
    var results = document.querySelector('#results');
    var ivcalc = document.querySelector("#ivcalc");
    var rowAdd = document.querySelector("#rowAdd");
    var currentRow = document.querySelector("li.row.current");
    var s = ["hp", "atk", "def", "spa", "spd", "spe"];
    var natures = [
        [1, 1, 1, 1, 1, 1], //hardy - 0
        [1, 1.1, 0.9, 1, 1, 1], //lonely - 1
        [1, 1.1, 1, 1, 1, 0.9], //brave - 2
        [1, 1.1, 1, 0.9, 1, 1], //adamant - 3
        [1, 1.1, 1, 1, 0.9, 1], //naughty - 4
        [1, 0.9, 1.1, 1, 1, 1], //bold - 5
        [1, 1, 1, 1, 1, 1], //docile - 6
        [1, 1, 1.1, 1, 1, 0.9], //relaxed - 7
        [1, 1, 1.1, 0.9, 1, 1], //impish - 8
        [1, 1, 1.1, 1, 0.9, 1], //lax - 9
        [1, 0.9, 1, 1, 1, 1.1], //timid - 10
        [1, 1, 0.9, 1, 1, 1.1], //hasty - 11
        [1, 1, 1, 1, 1, 1], //serious - 12
        [1, 1, 1, 0.9, 1, 1.1], //jolly - 13
        [1, 1, 1, 1, 0.9, 1.1], //naive - 14
        [1, 0.9, 1, 1.1, 1, 1], //modest - 15
        [1, 1, 0.9, 1.1, 1, 1], //mild - 16
        [1, 1, 1, 1.1, 1, 0.9], //quiet - 17
        [1, 1, 1, 1, 1, 1], //bashful - 18
        [1, 1, 1, 1.1, 0.9, 1], //rash - 19
        [1, 0.9, 1, 1, 1.1, 1], //calm - 20
        [1, 1, 0.9, 1, 1.1, 1], //gentle - 21
        [1, 1, 1, 1, 1.1, 0.9], //sassy - 22
        [1, 1, 1, 0.9, 1.1, 1], //careful - 23
        [1, 1, 1, 1, 1, 1] //quirky - 24
    ];

    // var mod = natures[nature][stat];
    // IV = ((Stat/Nature - 5) * 100) / Level - 2*Base - EV/4
    // iv = ((statVal/mod - 5)*100)/level - 2*base - ev/4;

    function calcIVs(mon, stats, level, EVs, nature) {
        console.log(mon + "\n stats:" + stats + "\n level: " + level + "\n EVs: " + EVs + "\n Nature: " + nature);
        var IVs = [];

        var bases = pokedex[mon].baseStats;

        IVs[0] = [];
        for (var x = 0; x < 32; x++) {
            var tempStat = Math.floor((2 * bases["hp"] + x + Math.floor(EVs[0] / 4) + 100) * level / 100 + 10);
            if (tempStat == stats[0]) {
                IVs[0].push(x);
            }
        }
        for (var i = 1; i < 6; i++) {
            IVs[i] = [];
            for (var x = 0; x < 32; x++) {
                var tempStat = Math.floor((2 * bases[s[i]] + x + Math.floor(EVs[i] / 4)) * level / 100 + 5);
                if (tempStat == stats[i]) {
                    IVs[i].push(x);
                }
            }
        }
        return IVs;
    }

    console.log("IVS: 10, 31,31,31,31,0");


    var pokeslist = document.querySelector('#pokemon');
    var temptemp = 0;
    

for(var i=0;i<pokemonsa.length;i++){
  var newPoke = document.createElement('option');
  newPoke.value = pokemonsa[i].key;
  newPoke.innerHTML = pokemonsa[i].pokeName;
  pokeslist.appendChild(newPoke);
}

    // console.log(pokemonsa);

    function findSimilar(arrA, arrB) {
        var arr = arrA.concat(arrB);
        arr = arr.sort();
        var empty = true;
        // console.log(arr);
        // console.log("^ arr");
        var sortedArray = arr.slice().sort();
        var res = [];
        for (var i = 0; i < arr.length - 1; i++) {
            if (sortedArray[i + 1] == sortedArray[i]) {
                res.push(sortedArray[i]);
                if (empty) {
                    empty = false;
                }
            }
        }
        if (empty) {
            res = arr;
        }
        return res;
    }

    function displayIVs(event) {
        event.preventDefault();
        var invalid = false;
        results.innerHTML = "";
        var resultsSpread = [
            [],
            [],
            [],
            [],
            [],
            []
        ];
        var rows = document.querySelectorAll("li.row");
        console.log(rows.length);
        var mon = ivcalc.querySelector('#pokemon').value;
        var nature = ivcalc.querySelector('#natures').value;
        var alerted = false;
        for (var f = 0; f < rows.length; f++) {
            var level = rows[f].querySelector('.lvl').value;
            var stats = [];
            var EVs = [];
            var statfields = rows[f].querySelectorAll('.stat');
            for (var i = 0; i < statfields.length; i++) {
                stats[i] = parseInt(statfields[i].value);
            }
            var evfields = rows[f].querySelectorAll('.ev');
            evfields = Array.prototype.slice.call(evfields);
            for (var i = 0; i < evfields.length; i++) {
                if (evfields[i].value === NaN || evfields[i].value === null || evfields[i].value === "") {
                    EVs[i] = 0;
                } else {
                    EVs[i] = parseInt(evfields[i].value);
                }
            }
            if (mon === "" || level === "" || stats[0] === "") {
                invalid = true;
            }
            if (!invalid) {
                var ivspread = calcIVs(mon, stats, level, EVs, nature);
                for (var i = 0; i < ivspread.length; i++) {
                    // console.log(ivspread[i]);
                    resultsSpread[i] = findSimilar(resultsSpread[i], ivspread[i]);
                  }
              for (var i = 0; i < 6; i++) {
                console.log(i);
                  var newResultRow = document.createElement('div');
                  newResultRow.innerHTML += s[i].toUpperCase() + ":<br>";
                  newResultRow.classList.add('result');
                  // console.log(resultsSpread.length + " length");
                    for(var j=resultsSpread[i].length-1; j>=0;j--){
                      newResultRow.innerHTML += resultsSpread[i][j] + "<br>";
                    }
                results.appendChild(newResultRow);
              }
                console.log(resultsSpread);
            } else {
                if (!alerted) {
                    alert("Invalid Input! Please try again.");
                }
            }
        } //end for rows
    }

    function insertAfter(el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }


    function toggleStats(event) {
        event.preventDefault();
        var it = event.currentTarget;
        it.parentNode.classList.toggle('closed');
        if (it.parentNode.classList.contains('closed')) {
            it.innerHTML = "+";
            it.parentNode.querySelector('.lvl').disabled = true;
        } else {
            it.innerHTML = "-";
            it.parentNode.querySelector('.lvl').disabled = false;
        }
    }

    function addRow(event) {
        event.preventDefault();
        var it = event.currentTarget;
        var newRow = document.createElement('li');
        var tempHTML = it.parentNode.querySelector('li.row').innerHTML;
        newRow.classList.add('row');
        newRow.classList.add('clearfix');
        newRow.innerHTML = tempHTML;
        currentRow = newRow;
        insertAfter(newRow, rowAdd);
        it.parentNode.querySelector('.expand').innerHTML = "-";
        it.parentNode.querySelector('.lvl').disabled = false;
        it.parentNode.querySelector('.expand').addEventListener('click', toggleStats, false);
    }



    document.querySelector('.expand').addEventListener('click', toggleStats, false);
    rowAdd.addEventListener('click', addRow, false);
    ivcalc.addEventListener('submit', displayIVs, false);
})();
