<script lang="ts">
    import InputType from '../../enums/InputType';

    export let label: string;
    export let type: InputType;

    const inputId = `${label.replace(' ', '-').toLowerCase()}-input`;
</script>

<div data-testid="label-input">
    <label for={inputId}>{label}</label>
    <input id={inputId} type={type} />
</div>
