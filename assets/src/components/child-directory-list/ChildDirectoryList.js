import { 
    ChildDirectoryCard
} from "../components";


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