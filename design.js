
//set the variables to get canvas element,height,width
const c = document.getElementById('pixel_canvas');
let temph = $("#input_height");
let tempw = $("#input_weight");



//An event listener that comes into action when Submit button is clicked .
$('#input_submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

// set color variable
let color = $("#colorPicker");


// When size is submitted by the user, call makeGrid()
function makeGrid() {


// select size input
    c.innerHTML = '';
    let height = temph.val();
    let width = tempw.val();



    //A function which fills color in the cell that was clicked and changes the color.
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }



    //An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.
    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
