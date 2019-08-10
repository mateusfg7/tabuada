function executar(){
	
	var numero = parseInt(document.getElementById('num').value);
	
	var soma = document.getElementById('soma');
	var subtracao = document.getElementById('subtracao');
	var multiplicacao = document.getElementById('multiplicacao');
	var divisao = document.getElementById('divisao');
	var potencia = document.getElementById('potencia');
	var raiz = document.getElementById('raiz');
	
	var tabuadaSoma = '';
	var tabuadaSubtracao = '';
	var tabuadaMultiplicacao = '';
	var tabuadaDivisao = '';
	var tabuadaPotencia = '';
	var tabuadaRaiz = '';
	

	//soma
	for (let index = 0; index < 10; index++) {
		
		tabuadaSoma += `${numero} + ${index} = ${numero + index}<br>`;
  		soma.innerHTML = tabuadaSoma;
		
	}
	//subtração
	for (let index = 0; index < 10; index++) {
		
		tabuadaSubtracao += `${numero} - ${index} = ${numero - index}<br>`;
  		subtracao.innerHTML = tabuadaSubtracao;
		
	}
	//multiplicação
	for (let index = 0; index < 10; index++) {
		
		tabuadaMultiplicacao += `${numero} x ${index} = ${numero * index}<br>`;
  		multiplicacao.innerHTML = tabuadaMultiplicacao;
		
	}
	//divisão
	for (let index = 0; index < 10; index++) {
		
		tabuadaDivisao += `${numero} / ${index} = ${numero / index}<br>`;
  		divisao.innerHTML = tabuadaDivisao;
		
	}
	//potencia
	for (let index = 0; index < 10; index++) {
		
		tabuadaPotencia += `${numero} ^ ${index} = ${Math.pow(numero, index)}<br>`;
  		potencia.innerHTML = tabuadaPotencia;
		
	}
	//raiz
	for (let index = 0; index < 10; index++) {
		
		tabuadaRaiz += `raiz ${index} de ${numero} = ${Math.pow(numero, 1.0 / index)}<br>`;
  		raiz.innerHTML = tabuadaRaiz;
		Math.sqrt()
	}
	
}