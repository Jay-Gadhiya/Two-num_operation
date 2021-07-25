// input frome user


// function add()
// {
//     let num1 = parseInt(document.getElementById('num1').value);
//     let num2 = parseInt(document.getElementById('num2').value);
//     var c = num1 + num2;
//     document.getElementById('answer').innerText = c;
// }


function addNum(){

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    var c = num1 + num2;
    document.getElementById('answer').innerText = c;
}
function subNum(){

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    var c = num1 - num2;
    document.getElementById('answer').innerText = c;
}
function mulNum(){

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    var c = num1 * num2;
    document.getElementById('answer').innerText = c;
}
function divNum(){

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    var c = num1 / num2;
    document.getElementById('answer').innerText = c;
}

document.getElementById('plus').addEventListener("click", addNum);
document.getElementById('mins').addEventListener("click", subNum);
document.getElementById('mul').addEventListener("click", mulNum);
document.getElementById('devide').addEventListener("click", divNum);




