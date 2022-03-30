const Person = (props) => {
    let voteText = props.age > 18 ? "please go vote!": "you must be 18";
    let limitName = props.name.length > 8 ? props.name.slice(0, 6): props.name;
    let hobbiesArr = props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {limitName}</li>
                <li>Age: {props.age}</li>
            </ul>
            <h3>{voteText}</h3>
            <ul>
                <b>Hobbies:</b>
                {hobbiesArr}
            </ul>
        </div>
    );
};