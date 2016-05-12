/**
 * Created by Ali on 21/03/2016.
 */
 function start() {

//récupérer l'objet canvas
    var canvas = document.getElementById('canvas');
    canvas.style.visibility= 'visible';
    if (!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }
//récupérer le contenu
    var context = canvas.getContext('2d');
    if (!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }
//////////////////////////////////
    var Jerry = new Image();
    Jerry.src = 'jerry.gif';
    var xPos=40;
    var yPos=120;
    Jerry.onload = function() {
        context.drawImage(Jerry, xPos, yPos,20,20);
    }
    function move(e)
    {
        if (xPos!=xtom || yPos!=ytom) {
            if ((e.keyCode === 39 && map[Math.floor((yPos) / 20)][1 + Math.floor((xPos) / 20)] !== 0) && ((xPos != 120 && xPos!=20 && xPos!=80 && xPos!=200 && xPos!=240 && xPos!=280 && xPos!=320) || (yPos!=375 &&yPos!=370 &&yPos!=365 && yPos!=335 && yPos!=330 &&yPos!=325 &&yPos!=295 && yPos!=290 &&yPos!=285 &&yPos!=255 && yPos!=250 && yPos!=245  &&yPos!=215 &&yPos!=210 && yPos!=205 && yPos!=175 && yPos!=170 && yPos!=165 &&  yPos!=135 && yPos!=130 && yPos!=125 && yPos!=95 && yPos!=90 && yPos!=85 && yPos!=35 && yPos!=30 && yPos!=25))) {
                context.fillStyle = '#E0FFFF';
                context.fillRect(xPos, yPos, 20, 20);
                xPos += 5;
            }

            if ((e.keyCode == 37 && map[Math.floor((yPos) / 20)][Math.floor((xPos - 5) / 20)] !== 0) && ((xPos !=40 && xPos != 80 && xPos!=120 && xPos!=160 && xPos!=165 && xPos!=240 && xPos!=280 && xPos!=340) || (yPos!=375 &&yPos!=370 &&yPos!=365 && yPos!=335 && yPos!=330 &&yPos!=325 &&yPos!=295 && yPos!=290 &&yPos!=285 &&yPos!=255 && yPos!=250 && yPos!=245  &&yPos!=215 &&yPos!=210 && yPos!=205 && yPos!=175 && yPos!=170 && yPos!=165 && yPos!=135&& yPos!=130 && yPos!=125 && yPos!=95 && yPos!=90 && yPos!=85 && yPos!=35 && yPos!=30 && yPos!=25))) {
                context.fillStyle = '#E0FFFF';
                context.fillRect(xPos, yPos, 20, 20);
                xPos -= 5;

            }
            if ((e.keyCode === 38 && map[Math.floor((yPos - 4) / 20)][Math.floor((xPos) / 20)] !== 0)&& ((yPos !=40 && yPos != 80 && yPos!=120 && yPos!=160 && yPos!=165 &&yPos!=200&& yPos!=240 && yPos!=280 &&yPos!=320&& yPos!=360&& yPos!=340 && yPos!=400) || (xPos!=375 &&xPos!=370 &&xPos!=365 && xPos!=335 && xPos!=330 &&xPos!=325 &&xPos!=295 && xPos!=290 &&xPos!=285 &&xPos!=255 && xPos!=250 && xPos!=245  &&xPos!=215 &&xPos!=210 && xPos!=205 && xPos!=175 && xPos!=170 && xPos!=165 && xPos!=135&& xPos!=130 && xPos!=125 && xPos!=95 && xPos!=90 && xPos!=85 && xPos!=55 && xPos!=50 && xPos!=45&& xPos!=35 && xPos!=30 && xPos!=25))) {
                context.fillStyle = '#E0FFFF';
                context.fillRect(xPos, yPos, 20, 20);
                yPos -= 5;
            }
            if ((e.keyCode == 40 && map[1 + Math.floor((yPos) / 20)][Math.floor((xPos) / 20)] !== 0 && map[1 + Math.floor((yPos) / 20)][Math.floor((xPos) / 20)] !== 4) && ((yPos!=160 && yPos != 120 && yPos!=20 && yPos!=80 && yPos!=200 && yPos!=240 && yPos!=280 && yPos!=320) || (xPos!=375 &&xPos!=370 &&xPos!=365 && xPos!=335 && xPos!=330 &&xPos!=325 &&xPos!=295 && xPos!=290 &&xPos!=285 &&xPos!=255 && xPos!=250 && xPos!=245  &&xPos!=215 &&xPos!=210 && xPos!=205 && xPos!=175 && xPos!=170 && xPos!=165 &&  xPos!=135 && xPos!=130 && xPos!=125 && xPos!=95 && xPos!=90 && xPos!=85 && xPos!=35 && xPos!=30 && xPos!=25))) {
                context.fillStyle = '#E0FFFF';
                context.fillRect(xPos, yPos, 20, 20);
                yPos += 5;
            }
            context.drawImage(Jerry, xPos, yPos, 20, 20);
            if (xPos !== xtom || yPos !== ytom) {
                if ((xtom < xPos && map[Math.floor((ytom) / 20)][1 + Math.floor((xtom) / 20)] !== 0) && ((xtom != 120 && xtom!=20 && xtom!=80 && xtom!=200 && xtom!=240 && xtom!=280 && xtom!=320) || (ytom!=375 && ytom!=370 && ytom!=365 && ytom!=335 && ytom!=330 &&ytom!=325 &&ytom!=295 && ytom!=290 &&ytom!=285 &&ytom!=255 && ytom!=250 && ytom!=245  &&ytom!=215 &&ytom!=210 && ytom!=205 && ytom!=175 && ytom!=170 && ytom!=165 &&  ytom!=135 && ytom!=130 && ytom!=125 && ytom!=95 && ytom!=90 && ytom!=85 && ytom!=35 && ytom!=30 && ytom!=25)) ) {
                    context.clearRect(xtom, ytom, 17, 17);
                    xtom += 5;
                }
                else if ((xtom > xPos && map[Math.floor((ytom) / 20)][Math.floor((xtom - 5) / 20)] !== 0) && (( xtom != 40 && xtom != 120 && xtom!=160 && xtom!=80 && xtom!=165 && xtom!=180&& xtom!=240 && xtom!=280 && xtom!=340) || (ytom!=375 && ytom!=370 && ytom!=365 && ytom!=335 && ytom!=330 &&ytom!=325 &&ytom!=295 && ytom!=290 &&ytom!=285 &&ytom!=255 && ytom!=250 && ytom!=245  &&ytom!=215 &&ytom!=210 && ytom!=205 && ytom!=175 && ytom!=170 && ytom!=165 &&  ytom!=135 && ytom!=130 && ytom!=125 && ytom!=95 && ytom!=90 && ytom!=85 && ytom!=35 && ytom!=30 && ytom!=25))) {
                    context.clearRect(xtom, ytom, 17, 17);
                    xtom -= 5;
                }
                else if ((ytom < yPos && map[1 + Math.floor((ytom) / 20)][Math.floor((xtom) / 20)] !== 0) && ((ytom !=40 && ytom != 80 && ytom!=120 && ytom!=160 && ytom!=165 &&ytom!=200&& ytom!=240 && ytom!=280 &&ytom!=320&& ytom!=360&& ytom!=340 && ytom!=400) || (xtom!=375 &&xtom!=370 &&xtom!=365 && xtom!=335 && xtom!=330 &&xtom!=325 &&xtom!=295 && xtom!=290 &&xtom!=285 &&xtom!=255 && xtom!=250 && xtom!=245  &&xtom!=215 &&xtom!=210 && xtom!=205 && xtom!=175 && xtom!=170 && xtom!=165 && xtom!=135&& xtom!=130 && xtom!=125 && xtom!=95 && xtom!=90 && xtom!=85 && xtom!=55 && xtom!=50 && xtom!=45&& xtom!=35 && xtom!=30 && xtom!=25))) {
                    context.clearRect(xtom, ytom, 17, 17);
                    ytom += 5;
                }
                else if ((ytom > yPos && map[Math.floor((ytom - 4) / 20)][Math.floor((xtom) / 20)] !== 0) && ((ytom!=160 && ytom != 120 && ytom!=20 && ytom!=80 && ytom!=200 && ytom!=240 && ytom!=280 && ytom!=320) || (xtom!=375 &&xtom!=370 &&xtom!=365 && xtom!=335 && xtom!=330 &&xtom!=325 &&xtom!=295 && xtom!=290 &&xtom!=285 &&xtom!=255 && xtom!=250 && xtom!=245  &&xtom!=215 &&xtom!=210 && xtom!=205 && xtom!=175 && xtom!=170 && xtom!=165 &&  xtom!=135 && xtom!=130 && xtom!=125 && xtom!=95 && xtom!=90 && xtom!=85 && xtom!=35 && xtom!=30 && xtom!=25)) ){
                    context.clearRect(xtom, ytom, 17, 17);

                    ytom -= 5;
                }

                context.drawImage(tom, xtom, ytom, 17, 17);
            }
            console.log(xtom+" "+xPos+" "+ytom+" "+yPos);
        }
        else {

            canvas.style.visibility = "hidden";
            aud.pause();
            document.onload(Over());
        }
    }
    document.onkeydown=move;
    ///////////////////////////////
    var tom = new Image();
    tom.src = 'tom.gif';
     var xtom=180;
     var ytom=165;
    tom.onload = function() {
        context.drawImage(tom, xtom, ytom,17,17);
    };
//////////////////////////////////
    var aud = new Audio();
    aud.src = 'tom.mp3';
    aud.play();

    /////////////////////////////
    var map = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
            [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
            [1, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 1],
            [0, 0, 0, 0, 2, 0, 2, 0, 0, 4, 0, 0, 2, 0, 2, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
            [1, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 1],
            [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
            [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0],
            [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0],
            [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
            [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];


    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {

            if (map[i][j] === 0) {

                context.fillStyle = '#1E90FF';
                context.fillRect(j * 20, i * 20, 20, 20);
            }
            if (map[i][j] === 2) {
                context.fillStyle = '#FFD700';
                context.fillRect(j * 20+7, i * 20+7, 5, 5);

            }

        }
    }
	
        document.getElementById('loadingImage').style.visibility='hidden';
   

}
function Over() {
    var canvas = document.getElementById('canvas');
    canvas.style.visibility= 'visible';
    var context = canvas.getContext('2d');
    var over=new Image();
    over.src='game-over.jpg';
    var aud1 = new Audio();
    aud1.src = 'Game Over sound effect.mp3';
    aud1.play();
    context.drawImage(over,0,0,380,440);

}
