const App = () => (
    <div>
        <Person name="Brock" age={27} hobbies={["basketball", "watching tv", "playing video games"]} />
        <Person name="Jon" age={17} hobbies={["styling hair", "playing video games"]} />
        <Person name="Carson" age={21} hobbies={["guns"]} />
    </div>
);


ReactDOM.render(<App/>, document.getElementById("root"));