import React from "react";
import style from "./Botao.module.scss";

const Botao = (props: any) => <button onClick={props.onClick} className={style.botao}>{props.children}</button>

export default Botao;
