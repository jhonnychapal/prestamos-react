import React from 'react'

const Resultado = ({cantidad, total, plazo}) => (
        <div className="u-full-width resultado">
            <h2>resumen</h2>
            <p>La cantidad solicitada es: $ {cantidad}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de: {(total/plazo).toFixed(2)}</p>
            <p>Total a pagar es: $ {(total).toFixed(2)}</p>

        </div>
    );
 
export default Resultado;