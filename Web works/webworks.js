function big(){
    /* for(var i=0;i<=3000000000000;i++){
        var j=i;
    }
    alert('Number of iterations: '+j+'iterations'); */
    const worker=new Worker('iterate.js');
    worker.onmessage=function(event){
        console.log('Number of iterations: '+event.data+'iterations');
    }

}
function small(){
    console.log('This is small function');
}