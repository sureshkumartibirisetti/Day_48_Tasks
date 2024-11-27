//Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).
var s="";
for(var i=1;i<=20;i++){
    if(i%2==0){
        s=(i+" ")+s;
    }
}
console.log(s);