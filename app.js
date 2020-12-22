function calculate(){
    let inputone = parseFloat(document.getElementById('inputone').value);
    let inputtwo = parseFloat(document.getElementById('inputtwo').value);
    let inputthree = parseFloat(document.getElementById('inputthree').value);
    let inputfour = parseFloat(document.getElementById('inputfour').value);
    // Main Logic:
    let total = inputone+inputtwo+inputthree+inputfour;
    let percentage =  (total*100)/400;
    document.getElementById('pararesult').innerHTML = `Total marks scored out of 400 are ${total}. You scored ${percentage} % marks in your exams(ISC).`;
}