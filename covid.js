let btn = document.querySelector('.submit-btn');
let name = document.querySelector('#countryname');
let conres =document.querySelector('#conres');
let deathres =document.querySelector('#deathres');
let recovres =document.querySelector('#recovres');
let inputfield = document.querySelector('#input-field');
 let mychart = document.getElementById('mychart').getContext('2d');

function myfunction(){
   
    
    
    fetch('https://api.covid19api.com/summary')
     .then(response => response.json())
    .then(data =>{
        
        console.log(data);
        
        let con = data.Global.TotalConfirmed;
        let death = data.Global.TotalDeaths;
        let rec = data.Global.TotalRecovered;
        
        
        conres.innerHTML = con;
        deathres.innerHTML = death;
        recovres.innerHTML = rec;
        
       
let obj = new Chart(mychart,{
   type: 'bar',
    data:{
        labels : ['confirmed','death','recovered'],
        datasets:[{
                label: 'Covid-19 tracker',
                data :[
                    conres.textContent,
                    deathres.textContent,
                    recovres.textContent
                ],
               backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
            }]
    },
   options:{} 
 });   
});
                     
    



}
