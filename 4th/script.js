let cardImageElement = null;

function main() {
    const mainResultElement = document.getElementById('mainResult');
    const resultElement = document.getElementById('result');
    const btnResElement = document.getElementById('btn-res');
    const bodyElement = document.body;

    let confirm = mainResultElement.innerHTML;
    if(confirm == "You are lost..!"){
        alert('Game over! Please restart the game');
    }else{
    let x;
    x = Math.floor(Math.random() * 13) + 1;

    let currentTT = parseInt  (document.getElementById('result').innerHTML);
    let total = currentTT + x;
    document.getElementById('result').innerHTML = total;

    if(total < 22){
        document.getElementById('mainResult').innerHTML = "Generate another card?"
    }else if (total == 22){
        document.getElementById('mainResult').innerHTML = "You are won..!"
        alert('Congratulatins..!');
        document.getElementById('btn-res').style.display = "block"
    }else if (total>22){
        document.getElementById('mainResult').innerHTML = "You are lost..!"
        alert("Lost:(Click restart to play again");
        document.getElementById('btn-res').style.display = "block"
    }
        
    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 300;

    document.body.appendChild(img);
    
}
   
}

function restart() {
    location.reload();
}
