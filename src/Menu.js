import React from "react";
import './App.css';
import { inject, observer } from "mobx-react";


class Menu extends React.Component {
    nombreRef = React.createRef();
    fotoRef = React.createRef();

    render() {
        const { ArepaStore } = this.props;

        return (
            <div>
                <header id="cabecera">Almacenamiento de imagenes</header>
                <h1 id="titulo">Inserta el nombre y la URL de la foto</h1>

                <form id="formulario"
                    onSubmit={e => {
                        e.preventDefault();
                        ArepaStore.agregarArepa({
                            nombre: this.nombreRef.current.value,
                            foto: this.fotoRef.current.value
                        });
                        e.target.reset();
                    }}
                >
                    <input
                        type="text"
                        placeholder="Nombre de la foto"
                        required ref={this.nombreRef} />
                    <input
                        type="text"
                        placeholder="URL de la foto "
                        required ref={this.fotoRef}
                    />
                    <button type="submit" class="botonAgregar">Agregar foto</button>
                    <button onClick={() => ArepaStore.borrar()} class="botonBorrar">Borrar fotos</button>
                </form>
                <ul id="listaFotos">
                    {ArepaStore.arepas.map(arepa => (
                        <li key={arepa.nombre}>
                            <h2>{arepa.nombre}</h2>
                            <img id="imagen"
                                src={arepa.foto}
                                alt={arepa.nombre}
                                style={{ maxWidth: "150px" }}
                            />
                        </li>
                    ))}
                </ul>
                <footer class="footer"> Práctica React-Mobx</footer>
            </div>
        );
    }
}

export default inject("ArepaStore")(observer(Menu));