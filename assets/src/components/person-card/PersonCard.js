import { TextControl, Button } from '@wordpress/components';

import './_style.scss';

const PersonCard = ( props ) => {

    let {
        displayName = '',
        id = false,
        directoryID = false,
        removePerson,
    } = props;

    return (
        <li className="wsu-cpm-person-card">{ displayName }
            <Button onClick={ () => { removePerson( id ) } } >Remove</Button>
        </li>
    );

}

export default PersonCard;