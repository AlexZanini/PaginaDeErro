# PaginaDeErro

Este é um exemplo de animação em JavaScript usando a biblioteca GreenSock Animation Platform (GSAP). O código cria três instâncias da classe Timeline do GSAP, cada uma para controlar uma animação diferente.

A primeira animação gira uma roda dentada com a classe "cog1" em sentido horário em um loop infinito, utilizando as propriedades rotation e transform-origin. A segunda animação gira outra roda dentada com a classe "cog2" em sentido anti-horário em um loop infinito, também utilizando as propriedades rotation e transform-origin.

A terceira animação faz com que um parágrafo com a classe "wrong-para" desapareça e reapareça repetidamente, utilizando a propriedade opacity e a opção stagger do GSAP.

O CSS estiliza os elementos da página, incluindo as rodas dentadas, que têm uma borda, cor de fundo e pinos para criar uma aparência de roda dentada. Os números são estilizados com as propriedades font-size e position para criar um layout simétrico.

A animação é acionada quando a página é carregada e o arquivo GSAP é carregado. É importante notar que essa animação não é interativa, ou seja, não é possível interagir com a animação usando o mouse ou o teclado.
