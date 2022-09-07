const image=document.getElementById('img1');
const boxes=document.getElementsByClassName('box');
image.addEventListener('dragstart',dragStart);
image.addEventListener('dragend',dragEnd);

function dragStart() {
    setTimeout(()=>(this.className='invisible'));
    
}
function dragEnd() {
    this.className='image';    
}

for(const box of boxes)
{
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',Drop);
}
function dragOver(e) {
    e.preventDefault();
    
}
function dragEnter(e) {
    e.preventDefault();
    
}
function dragLeave(e) {
    e.preventDefault();
    
}
function Drop() {
    this.className='box';
    this.append(image);
}
/* const image=document.getElementById('img1');
const boxes=document.getElementsByClassName('box');

image.addEventListener('dragstart', dragStart);
image.addEventListener('dragend', dragEnd);

for(const box of boxes){
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',Drop);
}

function dragStart()
 {
    //console.log('Dragging');
    setTimeout(()=>(this.className='invisible'),0)
    
}
function dragEnd()
 {
    //console.log('Dragged');
    this.className='image';
}
function dragOver(e) {
    //console.log('over');
    e.preventDefault();
    
}
function dragEnter(e) {
    //console.log('enter');
    e.preventDefault();
    
}
function dragLeave(e) {
    //console.log('leave');
    e.preventDefault();
    
}
function Drop() {    
    //console.log('drop');
    this.className='box';
    this.append(image);
} */