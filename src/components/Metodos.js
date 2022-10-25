function Metodos() {
    var ejemplo ="soy una varible de ejemplo azul";

    var estilo ={
        color:"white",
        backgroundColor:"fuchsia"
    }


  //CREAMOS UN METODO/ACCIOn
  const mostrarMensaje = () => {
    console.log("Boton pulsado...");
    ejemplo="nuevo VALOR!!!";
    //hemos modificado el valor de mostrar mensaje
    console.log(ejemplo);
  };

  //CREAMOS UN METODO/ACCION
  const dobleNumero =(numero)=>{
    var doble = numero * 2;
    console.log(doble);
  }

  return (
    <div>
       
      <h1 style={estilo}> Ejemplo de métodos(Style)</h1>

        <h2 style={{color:"blue"}}>{ejemplo}</h2>

      <button onClick={()=>dobleNumero(7)}>
        El doble de 7
      </button>

      <button onClick={()=>dobleNumero(17)}>
        El doble de 17
      </button>

      <button onClick={()=>dobleNumero(3)}>
        El doble de 3
      </button>




      <button onClick={() => mostrarMensaje()}>Mostrar mensaje </button>{" "}
    </div>
  );
}

export default Metodos;
