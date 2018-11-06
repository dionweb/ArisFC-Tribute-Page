var detailsBtn = document.getElementsByClassName('details-btn');

for (var i=0; i<detailsBtn.length; i++){
    detailsBtn[i].onclick = function(){
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}