import Component from 'inferno-component';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';
import schema from './schema.json';
import uischema from './uischema.json';
import JsonFormsRenderer from 'jsonforms-inferno/dist/ts-build/renderers/dispatch-renderer'
import 'jsonforms-inferno/dist/ts-build/renderers';
import { connect } from 'inferno-redux';
import {getData} from 'jsonforms-inferno/dist/ts-build/reducers';

class App extends Component {

    render() {
        const divStyle = {
            color: 'white'
        };
        return (
            <div className="App">
            <header className="App-header">
            <p style={divStyle}> Web App Lab 17</p>
        </header>
        <p className="App-intro">
            
        </p>
        <div className="demoform">
            <JsonFormsRenderer
        schema={schema}
        uischema={uischema}
        />
        </div>
        </div>
    );
    }
}

const mapStateToProps = state => ({
  dataAsString: JSON.stringify(getData(state))
});

export default connect(
  mapStateToProps,
  null
)(App)
