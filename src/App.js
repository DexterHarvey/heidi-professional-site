import './App.css';
import AboutMe from './AboutMe';
import ProfessionalHistory from './ProfessionalHistory';
import NavigationBar from './NavigationBar';
import ImageHeader from './ImageHeader';
import EmailForm from './EmailForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar />
                <ImageHeader />
                <AboutMe />
                <ProfessionalHistory />
                <EmailForm />
            </header>
        </div>
    );
}

export default App;
