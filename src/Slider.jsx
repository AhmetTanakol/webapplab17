import { JSX } from 'jsonforms-inferno/dist/ts-build/renderers/JSX';
import 'jsonforms-inferno/dist/ts-build/renderers/JSX';
import Component from 'inferno-component';

export class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rangeValue: props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      rangeValue: e.target.value
    })
  }

  render() {
    const { onChange } = this.props;

    return (
      <div>
        <p class="range-field">
          <input type="range" id="test5" min="0" max="100"
                 onChange={(e) => {
                   this.handleChange(e);
                   onChange(e);
                 }}
          />
        </p>
      </div>
    );
  }
}
