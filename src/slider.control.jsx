import {
  Control,
} from 'jsonforms-inferno/dist/ts-build/renderers/controls/Control';
import { JSX } from 'jsonforms-inferno/dist/ts-build/renderers/JSX';
import { connect } from 'inferno-redux';
import {
  RankedTester,
  rankWith,
  refEndsWith
} from 'jsonforms-inferno/dist/ts-build/core/testers';
import { Slider } from './Slider';
import { mapStateToControlProps } from 'jsonforms-inferno/dist/ts-build/renderers/renderer.util'

/**
 * Default tester for integer controls.
 * @type {RankedTester}
 */
export const sliderControlTester = rankWith(100, refEndsWith('slider'));

export class SliderControl extends Control {

  /**
   * @inheritDoc
   */
  render() {
    return (
      <Slider/>
    );
  }
}

export default connect(
  mapStateToControlProps,
  null
)(SliderControl)
