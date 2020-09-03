import { render } from '@testing-library/svelte';
import Chance from 'chance';

import LabelInput from '../../../components/label-input/LabelInput.svelte';
import InputType from '../../../enums/InputType';

const chance = new Chance();

describe('LabelInput', () => {
    const defaultProps = {
        label: chance.word(),
        type: chance.pickone([InputType.PASSWORD, InputType.TEXT])
    };

    it('should render', () => {
        const { getByTestId } = render(LabelInput, defaultProps);
        const labelInput = getByTestId('label-input');

        expect(labelInput).toBeInTheDocument();
    });

    it('has the label specified in props for the input', () => {
        const props = {
            ...defaultProps,
            label: chance.word()
        };
        const { getByLabelText } = render(LabelInput, props);
        const input = getByLabelText(props.label);

        expect(input).toBeInTheDocument();
    });

    it('sets the input type to the value passed in props', () => {
        const props = {
            ...defaultProps,
            type: chance.pickone([InputType.PASSWORD, InputType.TEXT])
        };
        const { getByLabelText } = render(LabelInput, props);
        const input = getByLabelText(props.label);

        expect(input).toHaveAttribute('type', props.type);
    });
});
