using System;

namespace Curso_POO{

    public interface IRepositorioPersonas{
        void ObtenerPersonas();
    }

    public class RepositorioPersonasBD : IRepositorioPersonas{
        public void ObtenerPersonas() {
            Console.WriteLine("Obteniendo personas de la base de datos");
        }
    }

    public class RepositorioPersonasEnMemoria : IRepositorioPersonas
    {
        public void ObtenerPersonas()
        {
            Console.WriteLine("Obteniendo personas de la memoria");
        }
    }

}