document.getElementById('custom-container').addEventListener('click', function() {
    document.getElementById('pdf-upload').click();
});
var filesAdded = false;
document.getElementById('pdf-upload').addEventListener('change', function(event) {
    const files = event.target.files;
    if(files){
        filesAdded = true;
    }
    for (let i = 0; i < files.length; i++) {
        if(i == 0){
            document.getElementById('row1').textContent = files[i].name;
        }
        else if(i == 1){
            document.getElementById('row2').textContent = files[i].name;
        }
    }
});

function merge(){
    if(!filesAdded){
        alert("Please Add Files first");
    }
    else{
        document.getElementById('submitBtn').click();
    }
}