let count = 0;

function addCount(){
    count++;
    console.log(count);
    document.getElementById('itemCount').textContent = count;
}

function subtractCount(){
    if(count >= 1){
    count--;
    console.log(count);
    document.getElementById('itemCount').textContent = count;
    }
    else{
        alert("Cannot have negative number of items.");
    }
    
}

function clearCount(){
    count = 0;
    console.log(count);
    document.getElementById('itemCount').textContent = count;
}