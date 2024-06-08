// ^ html variable
var btn = document.getElementById("btn");
  
// ^ app variable
var row = document.getElementById("textQuote");
var auth =document.getElementById("auther");

var quotes = [
   {'quote':"A room without books is like a body without a soul.",
    'auther':"― Marcus Tullius Cicero"
   },
   {'quote':"You only live once, but if you do it right, once is enough.",
    'auther':"― Mae West"
   },
   {'quote':"You know you're in love when you can't fall asleep because reality is finally better than your dreams",
    'auther':"― Dr. Seuss"
   },
   {'quote':"Be the change that you wish to see in the world.",
    'auther':"― Mahatma Gandhi"
   },
   {'quote':"If you tell the truth, you don't have to remember anything.",
    'auther':"― Mark Twain"
   },
   {'quote':"Always forgive your enemies; nothing annoys them so much.",
    'auther':"― Oscar Wilde"
   },
   {'quote':"Be yourself; everyone else is already taken.",
    'auther':"― Oscar Wilde"
   },
   {'quote':"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    'auther':"― Albert Einstein"
   },
   {'quote':"Human potential, though not always apparent, is there waiting to be discovered and invited forth.",
    'auther':"― William W. Purkey"
   },
   {'quote':"It is our choices, Harry, that show what we truly are, far more than our abilities.",
    'auther':"― J.K. Rowling"
   }
];


// ^ functions
function getQuotes(){
    var result = "";
    for(var i=0 ; i<quotes.length ; i++){
     result = Math.trunc(Math.random()*quotes.length)
    }
    row.innerHTML = quotes[result].quote;
    auth.innerHTML = quotes[result].auther;
}