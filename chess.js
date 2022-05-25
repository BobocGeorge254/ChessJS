const Colors = [
['Black','White','Black','White','Black','White','Black','White'],
['White','Black','White','Black','White','Black','White','Black'],
['Black','White','Black','White','Black','White','Black','White'],
['White','Black','White','Black','White','Black','White','Black'],
['Black','White','Black','White','Black','White','Black','White'],
['White','Black','White','Black','White','Black','White','Black'],
['Black','White','Black','White','Black','White','Black','White'],
['White','Black','White','Black','White','Black','White','Black']
]

var WhitePawnA = document.createElement("img") ;
WhitePawnA.src = "WhitePawn.png" ;
var WhitePawnB = document.createElement("img") ;
WhitePawnB.src = "WhitePawn.png" ;
var WhitePawnC = document.createElement("img") ;
WhitePawnC.src = "WhitePawn.png" ;
var WhitePawnD = document.createElement("img") ;
WhitePawnD.src = "WhitePawn.png" ;
var WhitePawnE = document.createElement("img") ;
WhitePawnE.src = "WhitePawn.png" ;
var WhitePawnF = document.createElement("img") ;
WhitePawnF.src = "WhitePawn.png" ;
var WhitePawnG = document.createElement("img") ;
WhitePawnG.src = "WhitePawn.png" ;
var WhitePawnH = document.createElement("img") ;
WhitePawnH.src = "WhitePawn.png" ;

var WhiteRookA = document.createElement("img") ;
WhiteRookA.src = "WhiteRook.png" ;
var WhiteRookH = document.createElement("img") ;
WhiteRookH.src = "WhiteRook.png" ;

var WhiteKnightB = document.createElement("img") ;
WhiteKnightB.src = "WhiteKnight.png" ;
var WhiteKnightG = document.createElement("img") ;
WhiteKnightG.src = "WhiteKnight.png" ;

var WhiteBishopC = document.createElement("img") ;
WhiteBishopC.src = "WhiteBishop.png" ;
var WhiteBishopF = document.createElement("img") ;
WhiteBishopF.src = "WhiteBishop.png" ;

var WhiteKing = document.createElement("img") ;
WhiteKing.src = "WhiteKing.png" ;
var WhiteQueen = document.createElement("img") ;
WhiteQueen.src = "WhiteQueen.png" ;


var BlackPawnA = document.createElement("img") ;
BlackPawnA.src = "BlackPawn.png" ;
var BlackPawnB = document.createElement("img") ;
BlackPawnB.src = "BlackPawn.png" ;
var BlackPawnC = document.createElement("img") ;
BlackPawnC.src = "BlackPawn.png" ;
var BlackPawnD = document.createElement("img") ;
BlackPawnD.src = "BlackPawn.png" ;
var BlackPawnE = document.createElement("img") ;
BlackPawnE.src = "BlackPawn.png" ;
var BlackPawnF = document.createElement("img") ;
BlackPawnF.src = "BlackPawn.png" ;
var BlackPawnG = document.createElement("img") ;
BlackPawnG.src = "BlackPawn.png" ;
var BlackPawnH = document.createElement("img") ;
BlackPawnH.src = "BlackPawn.png" ;



var BlackRookA = document.createElement("img") ;
BlackRookA.src = "BlackRook.png" ;
var BlackRookH = document.createElement("img") ;
BlackRookH.src = "BlackRook.png" ;

var BlackKnightB = document.createElement("img") ;
BlackKnightB.src = "BlackKnight.png" ;
var BlackKnightG = document.createElement("img") ;
BlackKnightG.src = "BlackKnight.png" ;

var BlackBishopC = document.createElement("img") ;
BlackBishopC.src = "BlackBishop.png" ;
var BlackBishopF = document.createElement("img") ;
BlackBishopF.src = "BlackBishop.png" ;

var BlackKing = document.createElement("img") ;
BlackKing.src = "BlackKing.png" ;
var BlackQueen = document.createElement("img") ;
BlackQueen.src = "BlackQueen.png" ;


var Tabla1 = {
    a1 : WhiteRookA , b1 : WhiteKnightB , c1 : WhiteBishopC , d1 : WhiteKing ,
    e1 : WhiteQueen , f1 : WhiteBishopF , g1 : WhiteKnightG , h1 : WhiteRookH ,
    a2 : WhitePawnA, b2 : WhitePawnB , c2 : WhitePawnC , d2 : WhitePawnD , 
    e2 : WhitePawnE , f2 : WhitePawnF , g2 : WhitePawnG , h2 : WhitePawnH ,
    a8 : BlackRookA , b8 : BlackKnightB , c8 : BlackBishopC , d8 : BlackKing ,
    e8 : BlackQueen , f8 : BlackBishopF , g8 : BlackKnightG , h8 : BlackRookH ,
    a7 : BlackPawnA, b7 : BlackPawnB , c7 : BlackPawnC , d7 : BlackPawnD , 
    e7 : BlackPawnE , f7 : BlackPawnF , g7 : BlackPawnG , h7 : BlackPawnH 
};

function getColumn(j) {
    if ( j == 1 ) return 'a' ;
    if ( j == 2 ) return 'b' ;
    if ( j == 3 ) return 'c' ;
    if ( j == 4 ) return 'd' ;
    if ( j == 5 ) return 'e' ;
    if ( j == 6 ) return 'f' ;
    if ( j == 7 ) return 'g' ;
    if ( j == 8 ) return 'h' ;
}

window.onload = function() {
    var chessContainer = document.getElementById('chessContainer') ;
    for (let i = 1 ; i <= 8 ; ++i)
    {
        var row = document.createElement('div') ;
        row.classList.add('row') ;
        for (let j = 1 ; j <= 8 ; ++j) 
        {
            var square = document.createElement('div') ;
            var position = document.createElement('p') ;
            let dx = getColumn(i) ;
            let dy = 9 - j ;
            position = dx + dy;
            square.classList.add('square') ;
            square.innerHTML = position;
            if ( (i + j) % 2 == 1 ){
                square.style.backgroundColor = 'white' ;
            } 
            else {
                square.style.backgroundColor = '#8B6742' ;
            }
            row.appendChild(square) ;
            if ( position in Tabla1 ) {
                square.appendChild(Tabla1[position]) ;
            }
            square.onmousedown = function () {
                let initalPosition = square.innerHTML ;
                console.log(initalPosition);
            }
            square.onmouseup = function() {
                square.appendChild(Tabla1[initalPosition]) ;
            }
        }
        chessContainer.appendChild(row) ;
    }
}
