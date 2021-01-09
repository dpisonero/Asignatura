import {newContextComponents} from "@drizzle/react-components";
import Parciales from "./Parciales";
const {ContractData} = newContextComponents;

const CalificacionRow = (props) => {
    const {drizzle, drizzleState, alumnoIndex, alumnoAddr, evaluacionesLength} = props;

    let cells = [];
    let parciales = [];
    for (let ei = 0; ei < evaluacionesLength; ei++) {
        cells.push(
            <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={"Asignatura"}
                method={"calificaciones"}
                methodArgs={[alumnoAddr, ei]}
                render={nota => {
                    parciales.push(nota.calificacion / 10);
                    return <td key={"p2-" + alumnoIndex + "-" + ei}>
                        {nota.tipo === "0" ? "N.P." : ""}
                        {nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                        {nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}
                    </td>
                }}
            />)
    }

    cells.push(
        <Parciales
            parciales={parciales}
        />
    )

    return (
        <tr key={"d" + alumnoIndex}>
            <th>A<sub>{alumnoIndex}</sub></th>

            <td><ContractData drizzle={drizzle}
                              drizzleState={drizzleState}
                              contract={"Asignatura"}
                              method={"datosAlumno"}
                              methodArgs={[alumnoAddr]}
                              render={datos => <>
                                {datos.nombre}
                              </>}
            /></td>
            {cells}
        </tr>
    );
};

export default CalificacionRow;