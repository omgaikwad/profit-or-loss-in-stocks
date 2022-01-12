const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");

const clickHandler = () => {
  let ip = Number(initialPrice.value);
  let qty = Number(quantityOfStocks.value);
  let curr = Number(currentPrice.value);

  if (initialPrice.value && quantityOfStocks.value && currentPrice.value) {
    if (curr > ip) {
      // Profit
      let profitPerStock = curr - ip;
      let totalProfit = profitPerStock * qty;
      let profitPercent = (profitPerStock / ip) * 100;

      outputDiv.style.color = "green";
      outputDiv.innerText = `Your Total Profit is Rs. ${totalProfit}. Your Profit Percent is ${profitPercent}%`;
    } else if (ip > curr) {
      // Loss
      let lossPerStock = ip - curr;
      let totalLoss = lossPerStock * qty;
      let lossPercent = (lossPerStock / ip) * 100;

      outputDiv.style.color = "red";
      outputDiv.innerText = `Your Total Loss is Rs. ${totalLoss}. Your Loss Percent is ${lossPercent}%`;
    } else {
      // No Gain No Pain
      outputDiv.style.color = "yellow";
      outputDiv.innerText = `No Profit, No Loss`;
    }
  } else {
    outputDiv.innerHTML = "😡Enter all the fields!";
  }
};

checkBtn.addEventListener("click", clickHandler);
