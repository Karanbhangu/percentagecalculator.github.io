function calculate() {
  let inputone = parseFloat(document.getElementById("inputone").value);
  let inputtwo = parseFloat(document.getElementById("inputtwo").value);
  let inputthree = parseFloat(document.getElementById("inputthree").value);
  let inputfour = parseFloat(document.getElementById("inputfour").value);
  let inputfive = parseFloat(document.getElementById("inputfive").value);
  let pararesult = document.getElementById('pararesult');
  let buttonone = document.getElementById('buttonone');
  let buttontwo = document.getElementById('buttontwo');
  if (buttonone.className=="active" && buttontwo.className=="decos") {
      if(isNaN(inputone) || isNaN(inputtwo) || isNaN(inputthree) || isNaN(inputfour)){
          pararesult.innerHTML = `Please enter correct numbers in all fiels`
      }
      else{
        let total = inputone+inputtwo+inputthree+inputfour;
        let percentage = total*100/400;
        pararesult.innerHTML = `You scored ${total} out of 400. You got ${percentage} % in your exams(ISC)`
      }
  }
  else if (buttontwo.className=="active" && buttonone.className=="decos") {
    if(isNaN(inputone) || isNaN(inputtwo) || isNaN(inputthree) || isNaN(inputfour) || isNaN(inputfive)){
        pararesult.innerHTML = `Please enter correct numbers in all fiels`
    }
    else{
        let total = inputone+inputtwo+inputthree+inputfour+inputfive;
        let percentage = total*100/500;
        pararesult.innerHTML = `You scored ${total} out of 500. You got ${percentage} % in your exams(CBSE)`
    }
  }
}

function ISC() {
  document.getElementById("inputfive").style.display = "none";
  document.getElementById("buttonone").className = "active";
  document.getElementById("buttontwo").className = "decos";
}
function CBSE() {
  document.getElementById("inputfive").style.display = "block";
  document.getElementById("buttonone").className = "decos";
  document.getElementById("buttontwo").className = "active";
}
