let box = document.querySelector(".box");
let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");

let data = [
    {
        id: 1,
        name: "Nastulloev Muhammadullo",
        img: "img1.jpg",
        course: "React",
    },
    {
        id: 2,
        name: "Surush Qalandarsho",
        img: "img3.jpg",
        course: "Java script",
    },
    {
        id: 3,
        name: "Hasan Husenov",
        img: "img5.jpg",
        course: "Java script",
    },
    {
        id: 4,
        name: "Faridun Saidov",
        img: "img6.jpg",
        course: "Курс: Разработчик на Html&&Css",
    },
    
];

let cnt = 0;
function getFirst() {
    data.find((elem) => {
        if (data[cnt].id == elem.id) {
            let img = document.createElement("img");
            img.src = elem.img;
            img.classList.add("profile");

            let name = document.createElement("h2");
            name.innerHTML = elem.name;
            name.classList.add("name");

            let course = document.createElement("h3");
            course.innerHTML = elem.course;
            course.classList.add("course");

            box.append(img, name, course);
        }
    });
}
getFirst();

let cntres = 0;
btnRight.onclick = () => {
    cntres++;
    function getRight() {
        data.find((elem) => {
            if (data[cntres].id == elem.id) {
                let div = document.createElement("div");
                div.classList.add("div");

                let img = document.createElement("img");
                img.src = elem.img;
                img.classList.add("profile");

                let name = document.createElement("h2");
                (name.innerHTML = elem.name), "Hello";
                name.classList.add("name");

                let course = document.createElement("h3");
                course.innerHTML = elem.course;
                course.classList.add("course");

                div.append(img, name, course);
                box.innerHTML = div.innerHTML;
            }
        });
    }
    getRight();
};

btnLeft.onclick = () => {
    cntres--;
    if (cntres >= 0) {
        function getRight() {
            data.find((elem) => {
                if (data[cntres].id == elem.id) {
                    let div = document.createElement("div");
                    div.classList.add("div");

                    let img = document.createElement("img");
                    img.src = elem.img;
                    img.classList.add("profile");

                    let name = document.createElement("h2");
                    (name.innerHTML = elem.name), "Hello";
                    name.classList.add("name");

                    let course = document.createElement("h3");
                    course.innerHTML = elem.course;
                    course.classList.add("course");

                    div.append(img, name, course);
                    box.innerHTML = div.innerHTML;
                }
            });
        }
        getRight();
    }
};