const $root = document.querySelector('#root');

const forest = [
    {animal: "Dog", anomapopoeia: "woof"},
    {animal: "Cat", anomapopoeia: "meow"},
    {animal: "Bird", anomapopoeia: "tweet"},
    {animal: "Fox", anomapopoeia: "ring-ding-ding"},
];

const List = document.createElement('ul');

const content = forest.map(item => `<li>${item.animal} goes ${item.anomapopoeia}</li>`
);

List.innerHTML = content.join(" ");

$root.insertBefore(List, null);







