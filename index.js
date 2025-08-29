let count = 0;
const historyData = [];
let balance = 100;
let copyCount = 0;
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

// coin section
document.getElementById("call-btn1").addEventListener("click", function(){
    cutCoin("call-btn1")
})
document.getElementById("call-btn2").addEventListener("click", function(){
    cutCoin("call-btn2")
})
document.getElementById("call-btn3").addEventListener("click", function(){
    cutCoin("call-btn3")
})
document.getElementById("call-btn4").addEventListener("click", function(){
    cutCoin("call-btn4")
})
document.getElementById("call-btn5").addEventListener("click", function(){
    cutCoin("call-btn5")
})
document.getElementById("call-btn6").addEventListener("click", function(){
    cutCoin("call-btn6")
})

// copy section

document.getElementById("copy-btn1").addEventListener("click", function(){
    copyCounts("copy-btn1")
})
document.getElementById("copy-btn2").addEventListener("click", function(){
    copyCounts("copy-btn2")
})
document.getElementById("copy-btn3").addEventListener("click", function(){
    copyCounts("copy-btn3")
})
document.getElementById("copy-btn4").addEventListener("click", function(){
    copyCounts("copy-btn4")
})
document.getElementById("copy-btn5").addEventListener("click", function(){
    copyCounts("copy-btn5")
})
document.getElementById("copy-btn6").addEventListener("click", function(){
    copyCounts("copy-btn6")
})






// function
function heartCount(id){
    count++;
    document.getElementById('heart-count').innerText = count;
}

function copyCounts(id){
         copyCount++;
    document.getElementById('copy-count').innerText = copyCount;
}
function cutCoin(id) {
    if (balance < 20) {
      alert("❌ You don’t have enough coins. To make a call, you need at least 20 coins.");
      return; // Stop the function if not enough balance
    }

    balance -= 20;
    document.getElementById("total-coin").innerText = balance;
  }

// call history 
document.getElementsByClassName("call-button").addEventListener("click", function(){
const transactionContainer = document.getElementById("history-container")

for(const data of historyData){
    const div = document.createElement("div")
    div.innerHTML = `
           <div class="flex justify-between items-center bg-[#FAFAFA]">
                <div>
                    <h3>>${data.name}</h3>
                    <p>999</p>
                </div>
                <p>${data.date}</p>
            </div>
`
    transactionContainer.appendChild(div)
}
})