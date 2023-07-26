let n = 5;
let string= "";
//start the print start
for (let i=1; i<=n; i++){
    //print 5 lines from left side
    for (let j=n; j>i; j--){
        string +=" ";
    }
// at this time print every star is first 1,11,111,1111 and add two values and subriction for one value.    console.log(string)
    for (let k=0; k<i*2-1; k++){
        string +="*";
    }
    string +="\n";
}
// this time print the 4 row and left hand star is printing console.log(string)
// at this step girst part is complete.
for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
    string += " ";
 //this console shown the diamond pattran for down side   console.log(string)
}
for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
}
// this console shown the line by line how the dimand patran is complete console.log(string)
string += "\n";
}
console.log(string);