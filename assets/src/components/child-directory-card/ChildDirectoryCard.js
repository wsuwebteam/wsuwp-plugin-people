import { TextControl, Button } from '@wordpress/components';

import './_style.scss';

const ChildDirectoryCard = ( props ) => {

    let {
        title = '',
        id = false,
        peopleIDs = [],
    } = props;

    return (
        <li className="wsu-cpm-child-directory-card">{ title }
        </li>
    );

}

export default ChildDirectoryCard;