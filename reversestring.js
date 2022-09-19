function stringReverse(str) {
    //let constStr = str.split(/[ ,]+/)
    let constStr = str.split(' ')
    //console.log(constStr);
    let finalStr = ''
    let cacheStr = ''
    for(let i=0; i<constStr.length;i++){
        for(let j=0;j<constStr[i].length;j++){
            cacheStr = constStr[i][j]+cacheStr
        }
        finalStr = `${finalStr} ${cacheStr}`
        cacheStr=''
    }
    return finalStr;

}

console.log(stringReverse('Hello Vivek'));
//Output =>  olleH dlroW