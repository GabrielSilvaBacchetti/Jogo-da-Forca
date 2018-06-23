var word = new Array();
word[0] = "CHOCOLATE";
word[1] = "ABACAXI";
word[2] = "COELHO";
word[3] = "TIGRE";
word[4] = "LOBO";
var i;
var sorteio = Math.floor(Math.random() * 5);
var palavra = word[sorteio];
var letra;
var acertos = 0;
var erros = 0;
window.onload = function teste() {
	for(i = 0; i < palavra.length; i++) {
	document.getElementById("block" + i).style.display = "";
	}
}

function letterChange(letra) {
    if(palavra.indexOf(letra) == -1) {
    	document.getElementById("erro" + erros).src = "Imagens/" + letra + ".png";
    	erros++;
    	document.getElementById("Forca").src = "Imagens/Forca" + erros + ".png";
    	document.getElementById(letra).style.backgroundColor = "#B22222";
    }
    else {
		for(i = 0; i < palavra.length; i++) {
			var localLetra = palavra.indexOf(letra);
			if(localLetra > -1) {
				document.getElementById("block" + localLetra).src = "Imagens/" + letra + ".png";
				palavra  = palavra.replace(letra, "0");
				acertos++;
			}
		}
		document.getElementById(letra).style.backgroundColor = "#008000";
    }
    document.getElementById(letra).disabled = true;
    if(acertos == palavra.length) {
    	alert("Você venceu, parabens");
    	document.getElementById("jgoardenovo").style.display = "";
    	document.getElementById("Keyboard").style.display = "none";
    }
    else if(erros == 6) {
    	alert("Você perdeu, a palavra era: " + word[sorteio]);
    	document.getElementById("jogardenovo").style.display = "";
    	document.getElementById("Keyboard").style.display = "none";
    }

    return false;
}
