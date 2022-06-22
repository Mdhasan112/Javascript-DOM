// document.getElementById('hk').style.fontSize= '30px';
// console.log(document.body);
// document.getElementsByTagName('h3');
document.body.style.backgroundColor="lightGray";

var author = document.getElementsByClassName('author');
for(i = 0; i < author.length; i++){
    var element = author[i];
    console.log(element.innerHTML)
    element.innerHTML = 'lekhok-'+ [i + 1];
    element.setAttribute('title', 'this is attribute')
    var color = element.style.color="red"
}

var queary = document.querySelectorAll('.special h3')
for(i = 0; i < queary.length; i++){
    var element = queary[i];
    element.innerHTML = 'hasan-' + [i + 1];
}

const article = document.getElementById('first');
const newP = document.createElement('p');
newP.innerHTML = "this is new ph"
article.appendChild(newP);