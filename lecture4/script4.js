var col=3;
var ro = 50;
function addCell(tr, val) {
    var td = document.createElement('td');

    td.innerHTML = val;

    tr.appendChild(td)
  }


  function addRow(tbl, val_1, val_2, val_3) {
    var tr = document.createElement('tr');
    addCell(tr, val_1);
    addCell(tr, val_2);
    addCell(tr, val_3);
    tbl.appendChild(tr)
  }


  function main1() {
for(var i = 0; i < ro;i++){      
  tbl = document.getElementById('tbl-4');
   
var num = (i+151)*1.6;
    var n = num.toFixed(2);
    addRow(tbl,i+151,i+151,n);
     var rows = tbl.getElementsByTagName('tr');
for(var j = 0; j< ro;j++){
   
   if(i % 2 == 0 && 
      rows[i].getElementsByTagName('td').length){
      rows[i].style.backgroundColor = '#001b3a';
       rows[i].style.color ='white';
    
        
   }
}
}
      
}