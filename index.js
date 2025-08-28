let count = 0;
// heart count
document.getElementById("heart-btn1").addEventListener("click", function(){
    heartCount('heart-btn1')
})
document.getElementById("heart-btn2").addEventListener("click", function(){
    heartCount('heart-btn2')
})
document.getElementById("heart-btn3").addEventListener("click", function(){
    heartCount('heart-btn3')
})
document.getElementById("heart-btn4").addEventListener("click", function(){
    heartCount('heart-btn4')
})
document.getElementById("heart-btn5").addEventListener("click", function(){
    heartCount('heart-btn5')
})
document.getElementById("heart-btn6").addEventListener("click", function(){
    heartCount('heart-btn6')
})

// function
function heartCount(id){
    count++;
    document.getElementById('heart-count').innerText = count;
}