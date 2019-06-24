const $root = document.querySelector('#root');

const createList = (... items) => {
    const $wrap = document.createElement('ul');
    const content = items.map(item => `<li>${item}</li>`);
    $wrap.innerHTML = content.join(" ");
    return $wrap;
}

const lista = createList("Feijao", "Macarrao", "Arroz", "Frango");

$root.insertBefore(lista, null);

