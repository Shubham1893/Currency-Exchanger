document.addEventListener('DOMContentLoaded',function(){
    const form = document.querySelector('form');
    const button = document.querySelector('#button');
    const results = document.querySelector('#results');
    const select1 = document.querySelector('#select1');
    const select2 = document.querySelector('#select2');



    button.addEventListener('click',function(e){
        e.preventDefault();

        const input1 = parseFloat(document.querySelector('#input1').value);
        const INR = document.querySelector('#INR');
        const USD = document.querySelector('#USD');
        const DIRHAM = document.querySelector('#DIRHAM');
        
        // case 1 for Indian to USD , DIRHAM
        if(select1.value ==="INR"){
            if(select2.value ==="USD"){
                const output1 = (input1 / 82.88).toFixed(2);
                results.innerHTML = `<span>${output1}</span>`;
            }
            else if(select2.value === "DIRHAM"){
                const output2 = (input1 / 22.57).toFixed(2);
                results.innerHTML = `<span>${output2}</span>`;
            }
            else{
                results.innerHTML = `<span>${input1}</span>`;
            }
        }
        
        //  case 2 for USD to Indian and Dirham
        else if(select1.value ==="USD"){
            if(select2.value==="INR"){
                const output3 = (input1*82.88).toFixed(2);
                results.innerHTML =`<span>${output3}</span>`;
            }
            else if(select2.value==="DIRHAM"){
                  const output4 = (input1* 3.67 ).toFixed(2);
                  results.innerHTML = `<span>${output4}</span>`               
            }
            else{
                results.innerHTML = `<span>${input1}<span>`;
            }
        }

        // case 3 for Dirham to other 
       else if(select1.value==="DIRHAM"){
            if(select2.value ==="INR"){
                const output5 = (input1*22.88).toFixed(2)
                results.innerHTML = `<span>${output5}</span>`;
            }
            else if(select2.value ==="USD"){
                const output6 = (input1* 0.27).toFixed(2);
                results.innerHTML = `<span>${output6}</span>`;
            }
            else{
                results.innerHTML = `<span>${input1}</span>`;
            }
        }

        
    });
});
