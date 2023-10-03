import { TextControl, Button } from '@wordpress/components';

const PersonSearchResult = ( props ) => {

    let {
        displayName = '',
        id = false,
        addPerson,
    } = props;

    return (
        <li><Button onClick={ () => { addPerson( id ) } } >{ displayName }</Button></li>
    );

}

export default PersonSearchResult;