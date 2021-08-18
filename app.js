const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");

function clickHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(quantityOfStocks.value);
    var curr = Number(currentPrice.value);

    if(initialPrice.value && quantityOfStocks.value && currentPrice.value){
        if(curr > ip){
            // Profit
            var profitPerStock = curr - ip;
            var totalProfit = profitPerStock * qty;
            var profitPercent = (profitPerStock/ip) * 100;
    
            outputDiv.style.color = "green";
            outputDiv.innerText = `Your Total Profit is Rs. ${totalProfit}. Your Profit Percent is ${profitPercent}%`;
        }
        else if(ip > curr){
            // Loss
            var lossPerStock = ip - curr;
            var totalLoss = lossPerStock * qty;
            var lossPercent = (lossPerStock/ip) * 100;
    
            outputDiv.style.color = "red";
            outputDiv.innerText = `Your Total Loss is Rs. ${totalLoss}. Your Loss Percent is ${lossPercent}%`;
        }
        else{
            // No Gain No Pain
            outputDiv.style.color = "yellow";
            outputDiv.innerText = `No Profit, No Loss`;
        }
    }
    else{
        outputDiv.innerHTML = "😡Enter all the fields!"
    }

    
}

checkBtn.addEventListener("click", clickHandler);