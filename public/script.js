document.getElementById('custom-container').addEventListener('click', function() {
    document.getElementById('pdf-upload').click();
});
document.getElementById('pdf-upload').addEventListener('change', function(event) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        if(i == 0){
            document.getElementById('row1').innerHTML = files[i].name ;
        }
        else if(i == 1){
            document.getElementById('row2').innerHTML = files[i].name ;
        }
    }
    
});
function merge(){
    // alert("Merge");
    document.getElementById('submitBtn').click();
}