
function randomQuotes(){
    var quote = [    "“Be yourself; everyone else is already taken.”"  ,
                     "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" ,
                     "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
                     "“A room without books is like a body without a soul.”" ,
                     "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
                    
     
    ];


    var author = [    "― Oscar Wilde " , "― Marilyn Monroe"  ,  "― Albert Einstein"  ,  "― Marcus Tullius Cicero"  ,  "― Dr. Seuss" ];

    var num = Math.floor ( Math.random() * quote.length    ,    Math.random() * author.length );

    document.getElementById("quote").innerHTML= quote[num];
    document.getElementById("author").innerHTML= author[num];
}