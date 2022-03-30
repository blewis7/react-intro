const Tweet = (props) => (
    <div>
        <h1>{props.name}</h1>
        <h3>{props.username}</h3>
        <small>{props.date}</small>
        <p>{props.message}</p>
    </div>
)