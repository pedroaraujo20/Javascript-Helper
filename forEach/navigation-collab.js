const $navigationCollab = document.querySelector('.navigation-collab');
const $list = document.querySelector('.list');
const $items = $navigationCollab.querySelectorAll('.item');


//Evitando o loop do forEach pelo browser : bubble -> borbulhar
$list.addEventListener("click", event => {
    event.preventDefault();
    const $target = event.target;
    if($target.tagName === 'A') {
        console.log("Foi", $target.textContent);
    }
    
})

/* for (let index = 0; index < $items.length; index++) {
$items[index].addEventListener("click", event => {
    event.preventDefault();
    console.log('Foi');
});
} */

/* $items.forEach($item => {
    $item.addEventListener("click", event => {
        event.preventDefault();
        console.log("Foi", $item.textContent);
    });
}) */