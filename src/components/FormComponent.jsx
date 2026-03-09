
export default function FormComponent(){
    const [nombre, setnombre] = useState('');
    const [correo, setcorreo] = useState('');
    const [edad, setedad] = useState('');
    const [pelicula, setpelicula] = useState('');
    const [personaje, setpersonaje] = useState('');


    return(
        <>
            <div>
                <div>
                    <h1>Tu Nombre</h1>
                    <intput
                    value={nombre}
                    onChange={e => setnombre(e.targer.value)} />
                </div>

                <div>
                    <h1>Tu Correo</h1>
                    <intput
                    value={correo}
                    onChange={e => setcorreo(e.targer.value)} />
                </div>

                <div>
                    <h1>Tu Edad</h1>
                    <intput
                    value={edad}
                    onChange={e => setedad(e.targer.value)} />
                </div>

                <div>
                    <h1>Tu Pelicula Favorita</h1>
                    <intput
                    value={pelicula}
                    onChange={e => setpelicula(e.targer.value)} />
                </div>

                <div>
                    <h1>Tu Personaje Favorito</h1>
                    <intput
                    value={personaje}
                    onChange={e => setpersonaje(e.targer.value)} />
                </div>
            </div>
        </>
    )
}