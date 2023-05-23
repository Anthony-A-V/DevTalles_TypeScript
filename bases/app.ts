(() => {

  // Tipos
  const batman = 'Bruce';
  const superman = 'Clark';

  const batman1: string = 'Bruce'
  const superman1: string = 'Clark'

  const existe = false;
  const existe1: boolean = false;

  // Tuplas
  const parejaHeroes = [batman, superman];
  const villano = ['Lex Lutor', 5, true];

  const parejaHeroes1: [string, string] = [batman1, superman1]
  const villano1: [string, number, boolean] = ['Lex Lutor', 5, true]

  // Arreglos
  const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
  const aliados1: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones

  enum fuerza {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }

  const fuerzaFlash: fuerza = fuerza.acuaman;
  const fuerzaSuperman: fuerza = fuerza.batman;
  const fuerzaBatman: fuerza = fuerza.flash;
  const fuerzaAcuaman: fuerza = fuerza.superman;

  // Retorno de funciones
  function activar_batiseñal() {
    return 'activada';
  }

  function activar_batiseñal1(): string {
    return 'activada';
  }

  function pedir_ayuda() {
    console.log('Auxilio!!!');
  }

  function pedir_ayuda1(): void {
    console.log('Auxilio!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = poder.length;
  console.log(largoDelPoder);

  const poder1: any = '100';
  const largoDelPoder1: number = (poder1 as string).length;
  console.log(largoDelPoder1);

})()

