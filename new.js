// const cards = document.querySelectorAll(".card");
// let cardOne = null;
// let cardTwo = null;

// function flipCard(e) {
//     let clickCard = e.target;
//     if (clickCard !== cardOne && clickCard !== cardTwo) {
//         console.log(clickCard);
//         clickCard.classList.add("flip");
//         if (!cardOne && !cardTwo) {
//             cardOne = clickCard;
//             cardTwo = clickCard;
//             let cardOneImg = cardOne.querySelector("img").src;
//             let cardTwoImg = cardTwo.querySelector("img").src;
//             matchCards(cardOneImg, cardTwoImg);
//         } else {
//             cardOne = null;
//             cardTwo = null;
//         }   
//     } else {
//         clickCard.classList.remove("flip");
//     }
// }

// function matchCards(img1, img2) {
//     if (img1 === img2) {
//         console.log("Card matched");
//         cardOne.removeEventListener("click", flipCard);
//         cardTwo.removeEventListener("click", flipCard);
//         setTimeout(() => {
//             //removing both shake & flip classes from the both card after 1.2 seconds 
//             cardOne.classList.remove("shake", "flip");
//             cardTwo.classList.remove("shake", "flip");
//             cardOne = cardTwo = ""; // Resetting both card values
//         }, 1200);
//     } else {
//         // Adding shake class to both cards after 400ms
//         setTimeout(() => {
//             cardOne.classList.add("shake");
//             cardTwo.classList.add("shake");
//             setTimeout(() => {
//                 //removing both shake & flip classes from the both card after 1.2 seconds 
//                 cardOne.classList.remove("shake", "flip");
//                 cardTwo.classList.remove("shake", "flip");
//                 cardOne = cardTwo = ""; // Resetting both card values
//             }, 1200);
//         }, 400);
//     }
// }

// cards.forEach(card => {
//     card.addEventListener("click", flipCard);
// });



const Flips_Data = [
    {
        img: './Assets/1 (1).png',
        inner: '?'
    },
    {
        img: './Assets/1 (2).png',
        inner: '?'
    },
    {
        img: './Assets/1 (3).png',
        inner: '?'
    },
    {
        img: './Assets/1 (4).png',
        inner: '?'
    },
    {
        img: './Assets/1 (5).png',
        inner: '?'
    },
    {
        img: './Assets/1 (6).png',
        inner: '?'
    },
    {
        img: './Assets/1 (5).png',
        inner: '?'
    },
    {
        img: './Assets/1 (3).png',
        inner: '?'
    },
    {
        img: './Assets/1 (1).png',
        inner: '?'
    },
    {
        img: './Assets/1 (6).png',
        inner: '?'
    },
    {
        img: './Assets/1 (4).png',
        inner: '?'
    },
    {
        img: './Assets/1 (2).png',
        inner: '?'
    }
]
let firstCard = null;
let secondCard = null;
let lockBoard = false;

const reset = () => {
    [firstCard, secondCard, lockBoard] = [null, null, false]
}

Flips_Data.map((e) => {
    const FlipCard = document.createElement('li');
    FlipCard.setAttribute('class', 'card');
    var view_front_view = document.createElement('div');
    view_front_view.setAttribute('class', 'view front-view');
    view_front_view.innerHTML = e.inner;
    var view_back_view = document.createElement('div');
    view_back_view.setAttribute('class', 'view back-view')
    view_back_view.innerHTML = `
    <img src="${e.img}" data-src="${e.img}"/>
    `
    FlipCard.append(view_front_view, view_back_view);

    FlipCard.addEventListener('click', () => {
        if (lockBoard) return;
        if (FlipCard === firstCard) return;
        FlipCard.classList.add('flipped');
        if (!firstCard) {
            firstCard = FlipCard;
            return;
        }
        secondCard = FlipCard;
        lockBoard = true;
        function shake(item) {
            item.style.animation = 'shake 0.2s 5 linear forwards'

            setTimeout(() => {
                item.style.animation = ''
            }, 400)
        }
        //...................

        if (firstCard.querySelector('img').getAttribute('data-src') === secondCard.querySelector('img').getAttribute('data-src')) {
            firstCard.classList.add('matched');
            secondCard.classList.add('matched');
            reset();
        } else {
            setTimeout(() => {
                shake(firstCard);
                shake(secondCard)
                firstCard.classList.remove('flipped')
                secondCard.classList.remove('flipped')
                reset();
            }, 1000);
        }
    })
    document.querySelector('.cards').append(FlipCard);
})

