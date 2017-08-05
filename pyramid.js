var bar = document.getElementById("bar");
var barValue = parseInt(bar.value);

var yourSelect = document.getElementById("selectedBrick");
var selected = parseInt(yourSelect.options[yourSelect.selectedIndex].value)

renderPyramid(barValue, selected);
function renderPyramid(height, picNumber) {

    let selectedBrick = "";
    if (picNumber == 1) {
        selectedBrick = "#";
    } else if (picNumber == 2) {
        selectedBrick = "@";
    } else if (picNumber == 3) {
        selectedBrick = "$";
    } else {
        selectedBrick = "X";
    }

    for (let row = 0; row < height; row++) {
        string = "";
        for (let i = 0; i < height - row - 1; i++) {
            string += '\u00A0'
        }
        for (let x = 0; x < row + 2; x++) {
            string += selectedBrick;
        }
        let a = document.createElement('p');
        a.className='symbol';
        let b = document.createTextNode(string);
        a.appendChild(b);
        document.getElementById('pyramid').appendChild(a);
    }
    
}

//changeSymbol();
/*function changeSymbol() {

    const x = document.getElementsByClassName('symb');
    for (let row = 0; row < 5; row++) {
        var testing = x[row];
        var oldSymbol = testing.innerText;
        var newSymbol = "";
        for (xyz=0; xyz<6; xyz++) {
            if (oldSymbol[xyz] == '#') {
                newSymbol = newSymbol + '@';
            } else {
                newSymbol = newSymbol + '\u00A0';
            }
        }  
        let a = document.createElement('p');
        a.className='symb';
        let b = document.createTextNode(newSymbol);
        a.appendChild(b);
        document.getElementById('pyramid').appendChild(a);
    }
}
*/
