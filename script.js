ReactDOM.render(
    <div>
        <h1>Hello from <mark>React</mark> and <mark>JAVASCRIPT</mark></h1>
    </div>

    , document.getElementById('index'))

ReactDOM.render(
    <div>
        <h1>
            Understanding DOM[querySelector || querySelectorAll].
            <code>
                <p>
                    document.querySelector('section') ||
                    document.querySelectorAll('section')[0]
                </p>
            </code>
        </h1>
        {/* </div>, document.querySelectorAll('section')[0] */}
    </div>, document.querySelector('section')
)

ReactDOM.render(<div>
    <h1>
        Understanding DOM [class]
        <code>
            <p>
                document.getElementsByClassName('class')[0]
            </p>
        </code>
    </h1>
</div>, document.getElementsByClassName('class')[0])