function makeGrid() {
    // Get your rows and columns
    var h = document.getElementById('inputHeight').value;
    var w = document.getElementById('inputWidth').value;   
    // get the table
    var t = document.getElementById('pixelTable');
    // create each row
    for(i = 0; i < w; i++){
        var row = t.insertRow(i);
        for (a = 0; a < h; a++){
           var cell = row.insertCell(a);
           cell.className = 'cl';
           //document.getElementsByTagName('td');
           cell.addEventListener('click', function(){
              this.style.backgroundColor = document.getElementById('colorPicker').value;
           });
        }
    }
}

