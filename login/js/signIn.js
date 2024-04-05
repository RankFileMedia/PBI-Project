function previewProfilePhoto(event) {
        const input = event.target;
        const preview = document.getElementById('profilePhotoPreview');
    
        if (input.files && input.files[0]) {
          const reader = new FileReader();
    
          reader.onload = function(e) {
            preview.src = e.target.result;
            preview.classList.remove('hidden');
          }
    
          reader.readAsDataURL(input.files[0]);
        } else {
          preview.src = '';
          preview.classList.add('hidden');
        }
      }


function moveContinue(){
        console.log("continue");
        location.href = "./signInReporterContact.html";
}
