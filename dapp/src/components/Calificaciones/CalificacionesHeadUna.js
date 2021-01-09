const CalificacionesHeadUna = () => {

    let thead = [];

    thead.push(<th key={"chae"}>A-E</th>);

    thead.push(<th key={"chn"}>Nombre</th>);

    thead.push(<th key={"chev-" + 0}>E<sub>{0}</sub></th>);

    return <thead>{thead}</thead>;
};

export default CalificacionesHeadUna;