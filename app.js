const catresult = document.getElementById('cat-result');
const dogresult = document.getElementById('dog_result');
const catbtn = document.getElementById('cat_btn');
const dogbtn = document.getElementById('dog_btn');

catbtn.addEventListener('click',getRandomcat);
dogbtn.addEventListener('click',getRandomdog);


function getRandomcat(){
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        catresult.innerHTML= ` <img src="${data.file}"/>`
    })
}

function getRandomdog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        if(data.url.includes('.mp4')){
            getRandomdog()
        }
        else{

       
        console.log(data);
        dogresult.innerHTML= ` <img src="${data.url}"/>` 
        }
    })
}


