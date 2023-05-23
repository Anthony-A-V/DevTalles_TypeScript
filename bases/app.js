"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const batman1 = 'Bruce';
    const superman1 = 'Clark';
    const existe = false;
    const existe1 = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const parejaHeroes1 = [batman1, superman1];
    const villano1 = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    const aliados1 = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza.acuaman;
    const fuerzaSuperman = fuerza.batman;
    const fuerzaBatman = fuerza.flash;
    const fuerzaAcuaman = fuerza.superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function activar_batiseñal1() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    function pedir_ayuda1() {
        console.log('Auxilio!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    const poder1 = '100';
    const largoDelPoder1 = poder1.length;
    console.log(largoDelPoder1);
})();
