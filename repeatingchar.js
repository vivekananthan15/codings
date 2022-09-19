function repeatChar(str){
    let inputChar = str
    let objectStr = {}
    for(let i=0; i < inputChar.length; i++){
        let char = inputChar[i];
        objectStr[char] = objectStr[char] ? objectStr[char] + 1 : 1        
    }
    let keys = Object.keys(objectStr)
    for(let i=0; i<keys.length;i++){
        let key = keys[i];
        if(objectStr[key]>=2){
            console.log('First repeating character:', key)
            return
        }
    }
     console.log('no character repeated');

}
repeatChar('malayalm');
