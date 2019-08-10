function executar(){
	
	var numero = parseInt(document.getElementById('num').value);
	var soma = document.getElementById('soma');
	var subtracao = document.getElementById('subtracao');
	var multiplicacao = document.getElementById('multiplicacao');
	var divisao = document.getElementById('divisao');
	var tabuadaSom = '';
	var tabuadaSub = '';
	var tabuadaMult = '';
	var tabuadaDiv = '';
	
	for (let index = 0; index < 10; index++) {
		
		tabuadaSom += `${numero} + ${index} = ${numero + index}<br>`;
  		soma.innerHTML = tabuadaSom;
		
	}
	for (let index = 0; index < 10; index++) {
		
		tabuadaSub += `${numero} - ${index} = ${numero - index}<br>`;
  		subtracao.innerHTML = tabuadaSub;
		
	}
	for (let index = 0; index < 10; index++) {
		
		tabuadaMult += `${numero} x ${index} = ${numero * index}<br>`;
  		multiplicacao.innerHTML = tabuadaMult;
		
	}
	for (let index = 0; index < 10; index++) {
		
		tabuadaDiv += `${numero} / ${index} = ${numero / index}<br>`;
  		divisao.innerHTML = tabuadaDiv;
		
	}
	
}