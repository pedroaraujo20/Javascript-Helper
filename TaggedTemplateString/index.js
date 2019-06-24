const $root = document.querySelector('#root');

function h1(styles, ... values) {
    const $h1 = document.createElement('h1');
    console.log(styles.toString().replace(/,/g, ""));
    $h1.style = styles.toString().replace(/,/g, "");
    $h1.innerHTML = values.join('<br>');

    return $h1;
}

const content ='Impulso Agile';

const Title = h1`
    ${'Impulso Network'}
    font-size: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #ef3d26;
    text-align: center;
    ${'CollabCode'}
    ${'Pedro Araujo'}
`;

$root.insertBefore(Title, null);