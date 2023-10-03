import { 
    ChildDirectoryCard
} from "../components";

import './_style.scss';


const ChildDirectoryList = ( props ) => {

    let {
        childDirectories,
    } = props;

    let peopleArray = Array.isArray( childDirectories ) ? childDirectories : [];


    return (
        <ul className="wsu-cmp-child-directory-list">
            { childDirectories.map( ( directory ) => { return( <ChildDirectoryCard {...directory} />) } )}
        </ul>
    );

}

export default ChildDirectoryList;