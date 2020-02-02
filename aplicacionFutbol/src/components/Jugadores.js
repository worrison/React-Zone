import React from "react"
import { connect } from "react-redux"


const Jugadores =({jugadores}) =>(
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                    jugadores.map( j =>(

                        <article>
                        <img src="{j.foto}"  alt="{j.nombre}"></img>   
                        <h3>{j.nombre}</h3>
                            <button>Titular</button>
                            <button>Suplente</button>

                        </article>   

                    ))
             }
                 
        </div>



    </section>
)

const mapStateToProps= state =>({
    jugadores:state.jugadores
})

const mapDispatchToProps = dispatch =>({})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)