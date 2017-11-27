import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import App from './App';
import './index.css';
import schema from './schema.json';
import uischema from './uischema.json';
import { initJsonFormsStore } from 'jsonforms-inferno/dist/ts-build/store'
import { registerRenderer } from 'jsonforms-inferno/dist/ts-build/actions'
import RatingControl, { ratingControlTester } from "./rating.control"
import { materialize } from 'jsonforms-inferno/dist/ts-build/renderers/materialized'
import SliderControl, { sliderControlTester } from "./slider.control";

const store = initJsonFormsStore({
  firstName: "Max",
  personalData: {}
}, schema, uischema);

materialize();

// Custom control registration
store.dispatch(registerRenderer(ratingControlTester, RatingControl));
store.dispatch(registerRenderer(sliderControlTester, SliderControl));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
