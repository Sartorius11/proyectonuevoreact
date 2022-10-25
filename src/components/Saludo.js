function Saludo(props) {
    var dato ="Manana sera miercoles";
    var nombre =props.nombre;
    var edad = props.edad;
    

  return (
    <div>
      <h1>Mi primer martes React,{nombre}, con edad {edad}</h1>
      <h2>{dato}</h2>
    </div>
  );
}

export default Saludo;
