(function(){
  var counters = [];
  var countersRear=0;
  var localStore = false;
  if (typeof(Storage) !== "undefined") {
    localStore = true;
  }
  var addCounterButton = document.querySelector("#counterCont .add");

  function Counter(id,pokemon,value){
    this.id = id;
    this.pokemon = pokemon;
    this.value = value;
    var counter = document.createElement('div');
    var img = document.createElement('img');
    var num = document.createElement('div');
    var pm = document.createElement('div');
    var plus = document.createElement('a');
    var minus = document.createElement('a');
    var del = document.createElement('a');
    // var pokeForm = document.createElement('form');
    // var poke = document.createElement('input');
    // var sub = document.createElement('input');
    this.setPokemon = function(input){
      this.pokemon = input;
      img.src = "img/sprites/"+input+".jpg";
    }
    this.setValue = function(input){
      this.value = input;
    }
    this.setID = function(newID){
      this.id = newID;
    }
    counter.classList.add('counter');
    counter.id = this.id;
    img.src = "img/sprites/"+pokemon+".png";
    img.classList.add('sprite');
    // pokeForm.classList.add('pokeForm');
    // pokeForm.classList.add('clearfix');
    num.classList.add('num');
    pm.classList.add('plusminus');
    pm.classList.add('clearfix');
    plus.classList.add('plus');
    minus.classList.add('minus');
    del.classList.add('del');
    plus.href = "#";
    minus.href = "#";
    del.href="#";
    num.innerHTML = this.value;

    plus.innerHTML="+";
    minus.innerHTML="-";
    del.innerHTML = "X";
    // sub.type = "submit";
    // sub.value = "Submit";
    // pokeForm.appendChild(poke);
    // pokeForm.appendChild(sub);
    counter.appendChild(img);
    // counter.appendChild(pokeForm);
    counter.appendChild(num);
    pm.appendChild(plus);
    pm.appendChild(minus);
    counter.appendChild(pm);
    counter.appendChild(del);

    this.store = function(){
      if(localStore){
        localStorage.setItem(this.id, JSON.stringify(this));
      }
    }

    var obj = this;
    //Addition, subtraction
      this.addition = function(event){
        event.preventDefault();
        var it = event.currentTarget;
        var num = it.parentNode.parentNode.querySelector('.num');
        num.innerHTML = parseInt(num.innerHTML)+1;
        counters[it.parentNode.parentNode.id].setValue(num.innerHTML);
        obj.store();
      }
      this.update =function(){
        num.innerHTML = this.value;
        return;
      }
      this.subtract = function(event){
        event.preventDefault();
        var it = event.currentTarget;
        var num = it.parentNode.parentNode.querySelector('.num');
        if(parseInt(num.innerHTML)!=0){
          num.innerHTML = parseInt(num.innerHTML)-1;
          counters[it.parentNode.parentNode.id].setValue(num.innerHTML);
        }else{
          //do nothing
        }
        obj.store();
      }
      this.bust = function(event){
        event.preventDefault();
        var it = event.currentTarget;//it references the button that is clicked
        // counters[counters.length-1].setID(obj.id);
        if(countID>0){
          console.log(countersRear-1);
          console.log("countersRear ^ ");
          console.log(counters);
          console.log("counters ^ ");
          counters[countersRear-1].setID(obj.id);
          //figure out something with a rear variable
        }
        console.log(counters);
        if(localStore){
          localStorage.setItem(obj.id,JSON.stringify(counters[countersRear-1]));
        }
        obj.update();
        counters[obj.id] = counters[countersRear-1];
        counters[countersRear-1] = null;
        countID--;
        if(localStore){
          localStorage.setItem("countID",countID);
          localStorage.removeItem(countersRear-1);
        }
        countersRear--;
        it.parentNode.parentNode.removeChild(it.parentNode);
        // obj.update();
        // return;
        console.log(counters);

      }
      this.add = function(){
        document.querySelector("#counterCont").appendChild(counter);
        plus.addEventListener('click',this.addition,false);
        minus.addEventListener('click',this.subtract,false);
        del.addEventListener('click',this.bust,false);
        this.store();
      }
  }



  if(localStore && localStorage.getItem("countID")!=null){
    countID = parseInt(localStorage.getItem("countID"));
  }else if(localStore && localStorage.getItem("countID")==null){
    countID = 0;
    localStorage.setItem("countID", countID);
  }




function  createAddIncrease(){
  var temp = new Counter(countID,"default",0);
  countID++;
  temp.add();
  if(localStore){
    temp.store();
    localStorage.setItem("countID",countID);
  }
  counters.push(temp);
  countersRear++;
  console.log(countersRear);
}


function loadCounters(){
  if(countID!=0){
    for(var i=0;i<countID;i++){
      console.log(i);
        var temp = JSON.parse(localStorage.getItem(i));
        console.log(temp.value + " isValue");
        counters[i] = new Counter(temp.id,temp.pokemon,temp.value);
        console.log(counters[i]);
        counters[i].add();
        countersRear++;
      }
  }
}

loadCounters();
addCounterButton.addEventListener('click',createAddIncrease,false);
})();
