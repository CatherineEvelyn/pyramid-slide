
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

/*
function drawPyramid(resp) {

    function printPyramid(height) {
        for (var row = 0; row < height; row++) {
            string = "";
            for (var i = 0; i < height - row - 1; i++) {
                string += " "
            }
            for (var x = 0; x < row + 2; x++) {
            string += "#";
            }
            console.log(string);
        };
    };
}
*/

printPyramid(5);
function printPyramid(height) {
        for (var row = 0; row < height; row++) {
            string = "";
            for (var i = 0; i < height - row - 1; i++) {
                string += '\u00A0'
            }
            for (var x = 0; x < row + 2; x++) {
                string += "#";
            }
            var a = document.createElement('p');
            var b = document.createTextNode(string);
            a.appendChild(b);
            document.getElementById('pyramid').appendChild(a);
        }
}
