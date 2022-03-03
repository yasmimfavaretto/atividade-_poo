  class Retangulo{
  constructor(altura,largura){
    this.largura = largura;
    this.altura = altura;
  }
  
  calcularArea(){
    return this.largura * this.altura;

  
  }
  area(){
    return this.calcularArea();

  
  }
    
}

  let retangulo_01 = new Retangulo(21, 56)
  console.log(retangulo_01.calcularArea())

  let retangulo_02 = new Retangulo(15, 49)
  console.log(retangulo_02.calcularArea())

  let retangulo_03 = new Retangulo(46,90)
  console.log(retangulo_03.area())