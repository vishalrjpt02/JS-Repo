const form =document.querySelector('form')

// this use-case will give us empty  as it  will fed when page loads
// const weight =parseInt(document.querySelector('#weight').value)
console.log(form.innerHTML)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    

    const height =parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const results =document.querySelector('#results');
   
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = `please provide valid height ${height}`;
    }
    if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = `please provide valid weight ${weight}`;
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // show  the result
        results.innerHTML = `<span>${bmi}<span>`;
        if(bmi<18.6){
            document.getElementById("01").style.display = 'block';
        }
        else if(bmi<24.9){
            document.getElementById("02").style.display = 'block';
        }
        else
            document.getElementById("03").style.display = 'block';

    }
         
});