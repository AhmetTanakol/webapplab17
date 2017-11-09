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
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
        <h1>{`Welcome to JSON Forms 2`}</h1>
        <p className="App-intro">
          More Forms. Less Code.
        </p>
        Bound data:
        <pre>{this.props.dataAsString}</pre>
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
