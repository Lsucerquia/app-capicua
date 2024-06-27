import React,{useState} from "react";

export default function InputHandler (){

   const [texto,setTexto]=useState("Bienvenido al ejercicio de React");

   const [limpiarBoton,setlimpiarBoton]= useState("");

   const [esCapicua,setEsCapicua] = useState(false);



    const handleChange = (event) => {
        setlimpiarBoton(event.target.value);
        verificarCapicua(event.target.value);
    }

    const handleClick =()=>{
        setTexto(limpiarBoton);
        setlimpiarBoton("");
        setEsCapicua(false);
    }

    const verificarCapicua =(palabra)=>{
        const palabraSinEspacios = palabra.toLowerCase().replace(/\s/g, '');
        const palabraInvertida = palabraSinEspacios.split('').reverse().join('');
         setEsCapicua(palabraSinEspacios === palabraInvertida);
         
    }

    return(
        <div>
            <h1> Ingresa una palabra </h1>
            <p>{texto}</p>
            <input

          value={limpiarBoton}
          onChange={handleChange}
          />
          <button onClick={handleClick}>Clear</button>
         <p>Ingresaste la palabra :{limpiarBoton}</p>
        <p>La palabra {limpiarBoton}{esCapicua ? " es ": " no es "} capicua</p>
        </div>
    )

}
