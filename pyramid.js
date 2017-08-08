window.onload = mySize();

function mySize() {
    var bar = document.getElementById("bar");
    var barValue = parseInt(bar.value);
    return renderPyramid(barValue);
}

function myBrick() {
    var yourSelect = document.getElementById("selectedBrick");
    var selected = parseInt(yourSelect.options[yourSelect.selectedIndex].value);
    //to select the brick type of the pyramid
    var theBrick = "";
    if (selected == 1) {
        theBrick = "#";
    } else if (selected == 2) {
        theBrick = "@";
    } else if (selected == 3) {
        theBrick = "$";
    } else {
        theBrick = "X";
    }
    return theBrick;
}

//renderPyramid(barValue, selected);
function renderPyramid(height) {
    //to clear the previous pyramid
    let clearPyramid = document.getElementById('pyramid');
    let p = pyramid.getElementsByClassName('symbol');
    while (p[0]) {p[0].parentNode.removeChild(p[0]);}

    let brick = myBrick();
    //to render the pyramid to browser's screen
    for (let row = 0; row < height; row++) {
        string = "";
        for (let i = 0; i < height - row - 1; i++) {
            string += '\u00A0'
        }
        for (let x = 0; x < row + 2; x++) {
            string += brick;
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

var yourSelectA = document.getElementById("selectedBrick");
var selectedA = parseInt(yourSelectA.options[yourSelectA.selectedIndex].value); console.log(selectedA)

//to make the slider dynamic
var rng = document.getElementById("bar");
var listener = function() {
  window.requestAnimationFrame(function() {
    renderPyramid(parseInt(rng.value), selectedA);
  });
};
rng.addEventListener("mousedown", function() {
  listener();
  rng.addEventListener("mousemove", listener);
});
rng.addEventListener("mouseup", function() {
  rng.removeEventListener("mousemove", listener);
});


yourSelectA.addEventListener('click', mySize);
