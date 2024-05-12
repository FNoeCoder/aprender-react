import './ContenedorSeguirPerfil.css';
import datos from './assets/datos.js';
import { useState } from 'react';

function ContenedorSeguirPerfil(){
    const [mostrarTodos, setMostrarTodos] = useState(false);
    const [perfiles, setPerfiles] = useState(datos);
    const [textoMostrar, setTextoMostrar] = useState('Mostrar más');
    function MostrarTodos(){
        setMostrarTodos(!mostrarTodos);
        if (mostrarTodos){
            setTextoMostrar('Mostrar más');
        }
        else{
            setTextoMostrar('Mostrar menos');
        }
    }
    return (
        <section className="contenedor-seguir-perfil">
            <p className='a-quien'>A quién seguir</p>
            {
                perfiles.map((perfil) => {
                    if((perfil.id < 4 || mostrarTodos) && !perfil.loSigo){
                        return <SeguirPerfil key={perfil.id} nombre={perfil.nombre} usuario={perfil.usuario} foto={perfil.foto} verificado={perfil.verificado} loSigo={perfil.loSigo} teSigue={perfil.teSigue}/>
                    }
                })
            }
            <p onClick={MostrarTodos} className='mostrar-mas'>{textoMostrar}</p>
        </section>
    )
}

function SeguirPerfil({nombre, usuario, foto, verificado, key, loSigo, teSigue}){
    const [siguiendo, setSiguiendo] = useState(loSigo);
    const [textoSiguiendo, setTextoSiguiendo] = useState('Siguiendo');
    function DejarDeSeguir(){
        setSiguiendo(!siguiendo);
    }
    function putSiguiendo(){
        setTextoSiguiendo('Siguiendo');
    }
    function putDejarDeSeguir(){
        setTextoSiguiendo('Dejar de seguir');
    }

    return (
        <div className='seguir' id={{key}}>
            <div className='contenedorIMG'>
                <img src={foto} />
            </div>
            
            <div className='datos'>
                <p className='nombre'>{nombre}{verificado ? "✅" : ""}</p>
                <p className='usuario'>@{usuario} {teSigue ? <p className='teSigue'>Te sigue</p> : ""} </p>
            </div>
            <div className="contenedorBoton">
                <button onMouseEnter={putDejarDeSeguir} onMouseLeave={putSiguiendo} onClick={DejarDeSeguir} id={key} className={siguiendo ? "botonSiguiendo" : "botonSeguir"}>{siguiendo ? textoSiguiendo : "Seguir"}</button>
            </div>
            
        </div>
    )
}

export default ContenedorSeguirPerfil;