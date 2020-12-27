import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const CrearEvaluacion = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Crear Evaluación</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>SOLO EL PROFESOR PUEDE CREAR UNA EVALUACIÓN</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="creaEvaluacion"
                                           labels={["Nombre de evaluación", "Fecha de evaluación",
                                           "Puntos de la evaluación (x10)"]}
                      />
                  }}
    />
</article>

export default CrearEvaluacion;