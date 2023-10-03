import { TextControl, Button } from '@wordpress/components';

const PersonCard = ( props ) => {

    let {
        displayName = '',
        id = false,
        directoryID = false,
        removePerson,
    } = props;

    return (
        <div>{ displayName }
            <Button onClick={ () => { removePerson( id ) } } >Remove</Button>
        </div>
    );

}

export default PersonCard;