// ReactDOM.render(
//     <div>
//         <h1>Hello from <mark>React</mark> and <mark>JAVASCRIPT</mark></h1>
//     </div>

//     , document.getElementById('index'))

// ReactDOM.render(
//     <div>
//         <h1>
//             Understanding DOM[querySelector || querySelectorAll].
//             <code>
//                 <p>
//                     document.querySelector('section') ||
//                     document.querySelectorAll('section')[0]
//                 </p>
//             </code>
//         </h1>
//         {/* </div>, document.querySelectorAll('section')[0] */}
//     </div>, document.querySelector('section')
// )

// ReactDOM.render(<div>
//     <h1>
//         Understanding DOM [class]
//         <code>
//             <p>
//                 document.getElementsByClassName('class')[0]
//             </p>
//         </code>
//     </h1>
// </div>, document.getElementsByClassName('class')[0])


// let index = document.getElementById('index')
// let data = document.createElement('h1').innerText('Hello from React and Javascript')
// index.appendChild(data)
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello from React and Javascript';
// h1.className = 'h1'
// document.getElementById('index').append(h1)


// *******   Creating a navigation

const brandName = <h1>Brand Name</h1>
const items = <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
</ul>
ReactDOM.render(
    <nav>
        {brandName}
        {items}
    </nav>, document.getElementById('index')
)