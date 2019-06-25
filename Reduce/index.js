const $impulserData = document.querySelector('.impulser-data');
const $name = document.querySelector('.name');
const $point = document.querySelector('.point');
const user = {
    name: "Marco",
    points: [{
            action: "msg",
            point: 1
        },
        {
            action: "send-reaction",
            point: 1
        },
        {
            action: "receive-reaction",
            point: 2
        },
        {
            action: "receive-reply",
            point: 1
        },
        {
            action: "send-reply",
            point: 2
        },
    ]
};

const total = user.points.reduce(
    (accumulator, item) => accumulator + item.point,
    10
);
$name.textContent = user.name;
$point.textContent = total;