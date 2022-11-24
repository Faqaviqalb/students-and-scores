
let name = document.querySelector("#names");
let score = document.querySelector("#scores");
let btn = document.querySelector("#btn");
let inputs = document.querySelector('#put');
let result = document.getElementById('result')
let com = document.querySelector('.comparison');

let maximum= document.querySelector('#max');
let least= document.querySelector('#least')



btn.addEventListener('click' , ()=>{
    let input = inputs.value;
    
    let arr = [];

    let text = [];
    while(input>0){
        let rand = Math.floor(Math.random()*20);
        if(!arr.includes(rand)){
            arr.push(rand);
        } else{
            continue;
        }
        score.innerHTML = arr.join("<br>");


        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let rand = Math.floor((Math.random()*6)+2)
            for (var i = 0; i < rand; i++)
            text += possible. charAt(Math. floor(Math. random() * possible. length));
            return text;
        }
        
        text.push(makeid());


        name.innerHTML = text.join("<br>");


        input--;
    }

    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let maxValue = arr.indexOf(max);
    let minValue = arr.indexOf(min);


    com.innerHTML = ' بالاترین نمره: ' + max +' '+  " نام دانش آموز :  "  + text[maxValue] +"<br>"  + ' پایین ترین نمره: '+ min + " نام دانش آموز : "+ text[minValue] +"<br>"  ;
 

    
    const ascending = [];
    for(i=0 ; i<arr.length ; i++){
        ascending.push(arr[i]);
    }
    ascending.sort((a, b) => { return a - b});

    let best = [];
    let worst = [];
    for(i=0 ; i<3 ;i++){
        worst.push(ascending[i]);
    }
    for(j=ascending.length-1 ; j>ascending.length-4 ;j--){
        best.push(ascending[j]);
    }




    let worstIndexes = [];
    const resultBest = []
    for(i=0 ; i<worst.length ; i++){
        worstIndexes.push(arr.indexOf(worst[i]));
        resultBest.push(text[worstIndexes[i]])
    }
    
    let bestIndexes = [];
    const resultWorst = [];
    for(i=0 ; i<best.length ; i++){
        bestIndexes.push(arr.indexOf(best[i]));
        resultWorst.push(text[bestIndexes[i]])
    }
    maximum.innerHTML = resultWorst.join("<br>");
    least.innerHTML = resultBest.join("<br>");


})