import './styles/App.scss';
import {Component} from 'react';
import AboutMe from './components/AboutMe';
import ProfessionalHistory from './components/ProfessionalHistory';
import NavigationBar from './components/NavigationBar';
import ImageHeader from './components/ImageHeader';
import EmailForm from './components/EmailForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = { aboutDivHeight: ''}

    resizeDivs = (height) => { 
        this.setState({aboutDivHeight: height});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavigationBar />
                    <ImageHeader />
                    <AboutMe onGetAboutDivHeight={this.resizeDivs}/>
                    <ProfessionalHistory height={this.state.aboutDivHeight}/>
                    <EmailForm />
                </header>
            </div>
        )
    }
}

export default App;
