using System;
using System.Collections.Generic;

namespace Curso_POO
{
    class Program {

        static void Main(string[] args){

            // ProcesarRepositorio( new RepositorioPersonasBD() );
            // ProcesarRepositorio( new RepositorioPersonasEnMemoria() );

            // var repositorio = ObtenerRepositorio( TipoRepositorio.Memoria );
            // ProcesarRepositorio( repositorio );

            var persona1 = new Persona() { FechaNacimiento = new DateTime(1982, 12, 24) };
            Console.WriteLine($"La edad de la persona es: { persona1.Edad }");

        }

        public static void ProcesarRepositorio(IRepositorioPersonas repositorio){
            repositorio.ObtenerPersonas();
        }

        enum TipoRepositorio { Memoria = 1, BD = 2 };

        static IRepositorioPersonas ObtenerRepositorio( TipoRepositorio tipoRepositorio ) {

            switch (tipoRepositorio) {
                case TipoRepositorio.Memoria:
                    return new RepositorioPersonasEnMemoria();
                case TipoRepositorio.BD:
                    return new RepositorioPersonasBD();
                default:
                    throw new NotImplementedException();
            }

        }

    }

    class Persona
    {

        public Persona(){
            Console.WriteLine("Constructor Persona");
            Telefonos = new List<string>();
        }
        
        public Persona( string nombre, decimal salarioMensual ):this(){
            Nombre = nombre;
        }

        public string Nombre{ get; set; }
        public DateTime FechaNacimiento{ get; set; }
        public int Edad{
            get{
                return UtilidadesDeFechas.CalcularEdad(FechaNacimiento);
            }
        }
        public decimal SalarioMensual{ get; set; }
        public decimal SalarioAnual{ get{ return SalarioMensual*12; } }

        public List<string> Telefonos { get; set; }

        public void CambiarNombre( Persona persona ){
            persona.Nombre = "Nombre Cambiado";
        }
        
    }
}
