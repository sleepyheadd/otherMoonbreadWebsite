scrollTextRandomizer();

function scrollTextRandomizer() {
    var scrollText = document.getElementById("scrollText");

    const currentDate = new Date();
    const currentText = currentDate.getSeconds();
    var outputString = "";

    switch (currentText % 10) {
        case 0:
            outputString = "Welcome to my website :D I hope you have a wonderful time here and if you don't then that sucks, I'm sorry :(";
            break;
        case 1:
            outputString = "Did you know that a Whale Shark is neither a whale nor shark? I learned that from the back of a bookmark I got from the Georgia Aquarium as a kid. Whale Sharks are so cool.";
            break;
        case 2:
            //Unfortunately seeing this text does not mean you are today's big winner, I made that up I'm sorry :(
            outputString = "Congratulations!!! You're today's big winner!!!! What do you win, you might be wondering??? Um... uh... I'll get back to you on that. I'm all out of prizes at the moment.";
            break;
        case 4:
            outputString = "I think Owen is a really cool name. I once read a book series with a cool guy named Owen and now I'm really into that name. If your name is Owen, that's awesome :)";
            break;
        case 5:
            outputString = "If you click this text 10,000 times, something might happen... something like your hand cramping up from clicking that much... I didn't actually make a reward for clicking that many times please don't do that.";
            break;
        case 6:
            outputString = "WEATHER REPORT: Today's weather calls for cloudy skies with a 75% chance of rain! Just kidding I have no idea what the weather's like where you are. That'd be pretty cool though if I did.";
            break;
        case 7:
            outputString = "Why is a bee's hair sticky???    Because they brush it with a honeycomb!!    I found that online I can't take credit for it.";
            break;
        case 8:
            outputString = "\\(O.O\\) (/O.O)/ DANCE PARTY WOOOOOOO \\(O.O\\) (/O.O)/ THIS PARTY IS SO AWESOME \\(O.O\\) (/O.O)/ WOOOOOOOOOO";
            break;
        case 9:
            outputString = "You should be more careful when visiting websites. For all you know, I'm hacking into your computer right now... I'm looking at your files... wow, that's a lot of horse pictures, why do you have so many horse pictures??? It's not even your horse!!"
            break;
    }

    scrollText.textContent = outputString;
}