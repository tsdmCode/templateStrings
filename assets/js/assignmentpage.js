hintScan();

function hintScan() {
    console.log('hint scan');
    const myHintButtons = Array.from(document.getElementsByClassName('hintbutton'));

    myHintButtons.map(element => {
        element.addEventListener('click', (e) => {

            e.currentTarget.nextElementSibling.classList.toggle('hint');
            console.log(e.currentTarget.nextElementSibling);
        });
    });

}