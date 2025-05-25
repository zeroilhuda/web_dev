var list = document.querySelectorAll("img");

const first = Math.floor(Math.random() * 6) + 1;
const imageFirst = 'assets/dice' + first + '.png';
list[0].setAttribute("src", imageFirst);

const second = Math.floor(Math.random() * 6) + 1;
const imageSecond = 'assets/dice' + second + '.png';
list[1].setAttribute("src", imageSecond);

if (first > second) {
    document.querySelector("h1").innerHTML = " User 1 Wins!";
    }
     else if (first < second) {
    document.querySelector("h1").innerHTML = " User 2 Wins!";
    }
     else {
    document.querySelector("h1").innerHTML = " It's a Draw!";
}