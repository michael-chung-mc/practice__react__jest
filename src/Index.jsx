import {Link} from "react-router-dom";

const App = () => {
    return (
        <>
            <header>
                <h1>Hello World</h1>
            </header>
            <main>
                <nav>
                    <Link to="profile/">Profiles</Link>
                </nav>
                <nav>
                    <Link to="profile/popeye">Popeye</Link>
                </nav>
                <nav>
                    <Link to="profile/spinach">Spinach</Link>
                </nav>
            </main>
        </>
    )
};

export default App;