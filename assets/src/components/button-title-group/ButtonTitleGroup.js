import './_style.scss';

const ButtonTitleGroup = ( props ) => {

    let {
        title = '',
        level = '2',
    } = props;


    const HeadingTag = `h${level}`;

    return (
        <div className="wsu-gbe-people__button-title-group">
            <HeadingTag>{ title }</HeadingTag>
            <div className="wsu-gbe-people__button-title-group__buttons">
                {props.children}
            </div>
        </div>
    );

}

export default ButtonTitleGroup;