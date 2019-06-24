const frameworks = [ 
    {name: "Rails", language: "Ruby"},
    {name: "Vue", language: "JavaScript"},
    {name: "Laravel", language: "PHP"},
    {name: "Express", language: "JavaScript"},
    {name: "Django", language: "Python"},
    {name: "React", language: "JavaScript"},
    {name: "Spring", language: "Java"}
];

const javaScript = frameworks.filter(item => item.language === "JavaScript"
);

console.log(javaScript);

