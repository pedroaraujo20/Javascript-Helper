const $root = document.querySelector("#root");

const event = {
    id: 1,
    name: "JSDay Rio de Janeiro",
    url: "http://rio.jsday.com.br",
    date: "09/07/2018",
    location: "Oito - Espaço Oi Futuros"
};

const EventCollab = ({name, url, date, location}) => `
    <dl>
        <dt>${name}</dt>
        <dd>${url}</dd>
        <dd>${date}</dd>
        <dd>${location}</dd>
    </dl>
`;

const jsday = EventCollab(event);

$root.innerHTML = jsday;