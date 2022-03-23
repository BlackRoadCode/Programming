using System;

namespace Curso_POO{

    public static class UtilidadesDeFechas{

        public static int CalcularEdad( DateTime fechaNacimiento ){

            var edad = DateTime.Today.Year - fechaNacimiento.Year;
            var temp = new DateTime( DateTime.Today.Year, fechaNacimiento.Month, fechaNacimiento.Day );

            if ( temp > DateTime.Today ){
                edad--;
            }

            return edad;

        }

    }

}