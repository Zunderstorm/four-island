(function(){
  var boxWindow = document.querySelector("#boxWindow");
  function StorageBox(name){
    this.name = name;
    this.rows = new Array(5);
    for(var i=0;i<this.rows.length;i++){
      this.rows[i] = new Array(6);
    }
    this.rows[0][0] = "+";
    this.initialize = function(){
      var box = document.createElement('table');
      box.classList.add("box");
      boxWindow.appendChild(box);
      var title = document.createElement('th');
      title.colSpan = this.rows[0].length;
      title.innerHTML = this.name;
      box.appendChild(title);
      for(var y=0;y<this.rows.length;y++){
        var row = document.createElement('tr');
        for(var x=0;x<this.rows[y].length;x++){
            var cell = document.createElement('td');
            var clink = document.createElement('a');
            var link = "pokeedit.html";
            clink.href = link;
            clink.classList.add('empty');
            clink.addEventListener('click',pageLoadClickEvent,false);
            clink.dataset.params = [y,x];
            cell.appendChild(clink);
            if(this.rows[y][x]!=null){
              clink.innerHTML = this.rows[y][x];
            }
            row.appendChild(cell);
        }
        box.appendChild(row);
      }
    }
  }

function Cell(y,x){
  this.y = y;
  this.x = x;
}


  var box1 = new StorageBox("BOX 1");
  box1.initialize();
  // box1 = JSON.stringify(box1);
  console.log(box1);
})();
