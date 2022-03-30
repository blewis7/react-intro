const App = () => (
    <div>
        <Tweet name="Brock" username="blewis7" date={new Date().toDateString()} message="Hello everyone!" />
        <Tweet name="Neal" username="hoggey" date={new Date().toDateString()} message="Wazzup!!!!" />
        <Tweet name="Bradford" username="hoggeboy" date={new Date().toDateString()} message="YASSSSS!!!!" />
    </div>
);


ReactDOM.render(<App/>, document.getElementById("root"));