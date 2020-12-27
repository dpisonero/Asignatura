import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const Automatricular = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Automatricularse</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr === drizzleState.accounts[0]) {
                          return <p>EL PROFESOR NO PUEDE AUTOMATRICULARSE</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="automatricula"
                                           labels={["Nombre del Alumno", "Correo del Alumno"]}
                      />
                  }}
    />
</article>

export default Automatricular;