
import './Login.css'
function Login() {
  return (
    <div className="Contenedor">
 
    <form className="form_iniciar">
    <h1 className="titulo_1" >Login</h1>  
    <label className="title_label">Usuario: </label>
    <input className="input_style" type="text" placeholder="Usuario" 
    />
    <label className="title_label" >Email: </label>
    <input className="input_style"  type="email" name="email" placeholder="Correo electronico"
    />
    <label className="title_label">Contraseña: </label>
    <input className="input_style" type="password" name="password" placeholder="******" 
    />
    <button className="btn_iniciar" >Iniciar Sesión</button>
    <p>¿Todavia no tienes cuenta? ¡Registrate ya!</p>
    </form>
  </div>
  )
}
export default Login;