import { TextControl, Button } from '@wordpress/components';

const ChildDirectoryCard = ( props ) => {

    let {
        title = '',
        id = false,
        peopleIDs = [],
    } = props;

    return (
        <div>{ title }
        </div>
    );

}

export default ChildDirectoryCard;