function matchCards(img1, img2) {
    if (img1 === img2) {
        console.log("Card matched");
    } else {
        console.log("Card not matched");
    }
    //if two card not matched
    setTimeout(() => {
        //adding shake class to both card after 400ms
        cardOne.classlist.add("shake");
        cardTwo.classlist.add("shake");
    }, 400);
}
