import './_style.scss';

const DirectoryPathItem = ( props ) => {

    let {
        title ='',
        post_id = '',
    } = props;

    let adminUrl = window.wsuPeopleData.adminUrl ?? '#';

    return (
        <li>
            <a href={`${adminUrl}/post.php?post=${post_id}&action=edit`}>{title}</a></li>
    )
}

const DirectoryPath = ( props ) => {

    let {
        directoryPath = [],
        directory,
    } = props;

    let hasDirectory = directoryPath.length ? true : false;

    return (
        <>
            { hasDirectory && <ul className="wsu-gbe-people__directory-path">
                { directoryPath.map( ( directory ) => { return( <DirectoryPathItem {...directory} /> ) } ) }
                <li>{ directory.directoryTitle }</li>
            </ul>}
        </>
    );

}

export default DirectoryPath;