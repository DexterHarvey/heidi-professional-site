import './styles/App.scss';
import {Component} from 'react';
import AboutMe from './components/AboutMe';
import ProfessionalHistory from './components/ProfessionalHistory';
import NavigationBar from './components/NavigationBar';
import ImageHeader from './components/ImageHeader';
import EmailForm from './components/EmailForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from './components/AppFooter';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavigationBar />
                    <ImageHeader />
                    <AboutMe/>
                    <ProfessionalHistory/>
                    <EmailForm />
                    <AppFooter />
                </header>
            </div>
        )
    }
}

export default App;
