import './header.css'

function Header({titulo,subtitulo}){
    return (

        <>
        <div className="titulo">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        </div>
        </>
        
    )
}
export default Header 
//export sem precia estar no final para poder ser exportado