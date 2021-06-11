import './App.css';
import {Component} from 'react';
import AboutMe from './AboutMe';
import ProfessionalHistory from './ProfessionalHistory';
import NavigationBar from './NavigationBar';
import ImageHeader from './ImageHeader';
import EmailForm from './EmailForm';
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
