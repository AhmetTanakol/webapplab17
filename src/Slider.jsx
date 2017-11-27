import { JSX } from 'jsonforms-inferno/dist/ts-build/renderers/JSX';
import 'jsonforms-inferno/dist/ts-build/renderers/JSX';
import Component from 'inferno-component';

export class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <p class="range-field">
          <input type="range" id="test5" min="0" max="100" />
        </p>
      </div>
    );
  }
}
