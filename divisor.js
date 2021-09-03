/* 10'un altında 3 veya 5'in katı olan tüm doğal sayıları listelersek 3, 5, 6 ve 9 elde ederiz. 
Bu katların toplamı 23'tür. 1000'in altındaki 3 veya 5'in tüm katlarının toplamını bulun. */

var total = 0;
function divisor(){
    
    for (i = 3; i<1000; i++){
        
        if (i % 3 === 0 || i % 5 === 0){
            total += i;
        }
    }
    
}
divisor();
let start = Date.now();

console.log(total);

let end = Date.now();
console.log ("Hesaplama Süresi :" + (end - start)/1000);