$(document).ready(function() {

    updateSeasonalJoke();
    //swingAnimation();

    $('.seasonal-joke > a').click(function() {
        event.preventDefault();
        updateSeasonalJoke();
    });
    
});

function updateSeasonalJoke() {

    var index = Math.floor(Math.random() * seasonalJokes.length);
    $('.data-seasonal-joke').html(function() {
        var joke = seasonalJokes[index];
        var content = "<p>" + joke.q + "<br>\n";
        content += "<em>" + joke.a + "</em>\n";
        return content;
    });

}

function swingAnimation() {
    
    $(".seasonal-joke").animate({
        "left": "-10px"
    }, 1000, function() {
        $(this).animate({
            "left": "10px"
        }, 1000);
    });
    setTimeout(swingAnimation, 1500);
}


var seasonalJokes = new Array(

{
    q: "What does Santa suffer from if he gets stuck in a chimney?",
    a: "Claustrophobia!"
},

{
    q: "Why does Santa have three gardens?",
    a: "So he can 'ho ho ho'!"
},

{
    q: "Why did Santa's helper see the doctor?",
    a: "Because he had a low \"elf\" esteem!"
},

{
    q: "What kind of motorbike does Santa ride?",
    a: "A Holly Davidson!"
},

{
    q: "What do you call Father Christmas in the beach?",
    a: "Sandy Clause!"
},


{
    q: "What did the sea Say to Santa?",
    a: "Nothing! It just waved!"
},

{
    q: "What do you call Father Christmas in the beach?",
    a: "Sandy Clause!"
},

{
    q: "What did the sea Say to Santa?",
    a: "Nothing! It just waved!"
},

{
    q: "What do Santa's little helpers learn at school?",
    a: "The elf-abet!"
},

{
    q: "How long do a reindeers legs have to be?",
    a: "Long enough so they can touch the ground!"
},


{
    q: "What do reindeer hang on their Christmas trees?",
    a: "Horn-aments!"
},


{
    q: "Did Rudolph go to school?",
    a: "No. He was Elf-taught!"
},


{
    q: "What is the best xmas present in the world?",
    a: "A broken drum, you just can't beat it!"
},


{
    q: "How do sheep in Mexico say Merry Christmas?",
    a: "Fleece Navidad!"
},


{
    q: "What do you get if you eat Christmas decorations?",
    a: "Tinsilitis!"
},


{
    q: "What did the beaver say to the Christmas Tree?",
    a: "Nice gnawing you!"
}









)