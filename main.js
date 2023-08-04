
let cantidad = prompt("¿cuantas personas son?");
let personasTotales = [];

for (i = 0; i < cantidad; i++) {
	personasTotales[i] = [prompt("Nombre de la persona - hábito " + (i+1)),0];
}

alert("A continuación use S o s para indicar que cumplió con su hábito. Caso contrario, indique N,n o deje vacío")

const chequeoHabito = (nombre,p)=>{
	let habito = prompt(`${personasTotales[p][0]} cumpliste tu habito el día de hoy - DIA ${(i+1)}?`);
	if (habito == "s" || habito == "S") {
	    personasTotales[p][1]++;
	}
}


for (i = 0; i < 30; i++) {
	for (persona in personasTotales) {
	chequeoHabito(personasTotales[persona][0],persona);
	}
}


for (persona in personasTotales) {
	let resultado = `${personasTotales[persona][0]}:<br>
    ________Días con hábitos cumplidos: <b>${personasTotales[persona][1]}</b> <br>
    ________Días con hábitos NO cumplidos: <b>${30 - personasTotales[persona][1]} </b>`;
	if (30 - personasTotales[persona][1] > 22) {
	resultado+= "<b style='color:red'>NO AFLOJES, LA PROXIMA SALDRA MEJOR!</b><br><br>";
	} else {
	resultado+= "<br><br>"
	}
	document.write(resultado)

    let resultadoAlert = `${personasTotales[persona][0]}:\n
    ________Días con hábitos cumplidos: ${personasTotales[persona][1]} \n
    ________Días con hábitos NO cumplidos: ${30 - personasTotales[persona][1]}`;
    if (30 - personasTotales[persona][1] > 22) {
        resultadoAlert += "...NO AFLOJES, LA PROXIMA SALDRA MEJOR!\n\n";
    } else {
        resultadoAlert += "\n\n";
    }
    alert(resultadoAlert);
}







