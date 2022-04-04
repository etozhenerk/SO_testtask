import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import { usePersons } from "./hooks/usePersons";

function App() {
    const persons = usePersons();

    return (
        <Layout>
            <Header genderFilter={persons.genderFilter} nameFilter={persons.nameFilter} />
            {persons.persons && <Main persons={persons.persons} />}
        </Layout>
    );
}

export default App;
