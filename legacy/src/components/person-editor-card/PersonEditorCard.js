import './_style.scss';
import { TextControl, Button } from '@wordpress/components';


const PersonEditorCard = ( props ) => {

    let {
        displayName = '',
    } = props;

    return (
        <li>{ displayName }</li>
    );
}

export default PersonEditorCard;