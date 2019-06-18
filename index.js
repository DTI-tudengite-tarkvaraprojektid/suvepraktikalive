var nupuValue;

function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}


function foo(nupp){
    nupuValue = nupp.value;
    console.log(nupuValue); 
    }

export { nupuValue };

