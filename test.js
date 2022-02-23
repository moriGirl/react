let arr=['杨幂','张柏芝','刘嘉玲','贾玲','贾玲','杨幂'];
let newobj={};
for (const item of arr) {
    if( newobj[item] ){
        newobj[item] ++
    } else {
        newobj[item] = 1
    }
}
console.log(newobj)
