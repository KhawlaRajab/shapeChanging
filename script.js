let shape = document.querySelector('.shape');
let btn = document.querySelector('button');
let selectColor = document.querySelector('.color');
let options = document.querySelector('#options');
let color, chosenShape;

btn.addEventListener('click', function () {
    color = selectColor.value;
    chosenShape = options.value;
    shape.className = 'shape';
    shape.style.borderBottomColor = color;
    shape.style.backgroundColor = color;
    shape.classList.add(chosenShape);
});


