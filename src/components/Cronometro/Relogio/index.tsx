import { ITarefa } from '../../../types/tarefa';
import style from './Relogio.module.scss'

interface Props{
    tempo : number | undefined;
}

function Relogio ({tempo = 0}: Props){

    const minutos = Math.floor(tempo/60);
    const segundos = tempo % 60;
    const [minutosFormatado, minutosRestantes] = String(minutos).padStart(2, '0');
    const [segundosFormatado, segundosRestantes] = String(segundos).padStart(2, '0');
    

    return(
        <>
        <span className={style.relogioNumero}>{minutosFormatado}</span>
        <span className={style.relogioNumero}>{minutosRestantes}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundosFormatado}</span>
        <span className={style.relogioNumero}>{segundosRestantes}</span>
        </>
    )
}

export default Relogio;