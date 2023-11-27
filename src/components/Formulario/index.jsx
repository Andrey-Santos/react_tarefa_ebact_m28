import { useState } from "react";
import styles from "./formulario.module.css";
import { useEffect } from "react";

export default () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let [imc, setImc] = useState(0);

    useEffect(() => { }, [peso, altura]);

    const calcularImc = () => {
        setImc(peso / (altura * altura));
    }

    return (
        <div>
            <form>
                <label htmlFor="peso">Peso KG</label>
                <input placeholder="60" type="number" id="peso" onKeyUp={evento => (
                    setPeso(evento.target.value),
                    calcularImc()
                )} />
                <label htmlFor="altura">Altura MT</label>
                <input type="number" id="altura" placeholder="1,80" onKeyUp={evento => (
                    setAltura(evento.target.value),
                    calcularImc()
                )} />
            </form>
            {peso && altura ? (
                <p id="resultado">{(
                    imc < 18.5 ? 'Abaixo do peso' : (
                        imc < 24.9 ? 'Peso normal' : (
                            imc < 29.9 ? 'Sobrepeso' : (
                                imc < 34.9 ? 'Obesidade grau 1' : (
                                    imc < 39.9 ? 'Obesidade grau 2' : (
                                        imc > 40 ? 'Obesidade grau 3' : ''
                                    )
                                )
                            )
                        )
                    )
                )}</p>
            ) : (
                <p id="resultado">0</p>
            )}

        </div>
    );
};
