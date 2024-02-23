import { CardPersonaje } from "./components/CardPersonaje"
import { Navbar } from "./components/Navbar"
import { personajes } from "./utils/personajesData"

export const Principal = () => {

    const nombre = "Martin"
    console.log("personajes", personajes)

    return (
        <section>
            <Navbar />
            <article className="container">
                <h1>Primer Aplicativo en React: Martin Rios Tineo</h1>
                <div className="contenedor-personajes">
                    {
                        personajes.map((personaje) => (
                            <CardPersonaje key={personaje.nombre} {...personaje} />
                        ))

                    }
                </div>
                {
                    /**
                     * <CardPersonaje
                            nombre={personaje.nombre}
                            edad={personaje.edad}
                            aldea={personaje.aldea}
                            rango={personaje.rango}
                            afiliación={personaje.afiliación}
                            jutsu_destacado={personaje.jutsu_destacado}
                            estado={personaje.estado}
                            imagen={personaje.imagen}
                        />
                     */
                }
            </article>
        </section>
    )
}