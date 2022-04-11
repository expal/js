var table = document.createElement('table');
var thead = document.createElement('thead');
var tr = document.createElement('tr');
var tfoot = document.createElement('tfoot');
var td = document.createElement('td');
var th = document.createElement('th');

var letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

for (var i = 0; i<letters.length; i++){
    th.innerHTML=letters[i];
    
    th.style.transform='rotate(0deg)';
    tfoot.appendChild(th);
    
    th.style.transform='rotate(180deg)';
    thead.appendChild(th);
}
table.appendChild(thead);
document.body.appendChild(table);
