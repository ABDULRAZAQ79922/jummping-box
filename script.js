let myJumpingBox = document.getElementById('myJumpingBox');

function myJump() {
    if (myJumpingBox.style.transform === 'translateY(-150px)') {
        myJumpingBox.style.transform = 'translateY(0)';
    } else {
        myJumpingBox.style.transform = 'translateY(-150px)';
    }
}
