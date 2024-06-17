import style from './nav.module.css'

 
export function NavBar() {
    return (
        <header>
            <nav>
            <div className={style.n1}>
                <div className={style.n2}><a className ={style.formatar}href="#">Valerio  <span className={style.spanAnalise}> |ANALISTA </span></a></div>
               
            </div>

        </nav>
        </header>
    )
}