
function Contact() {
    return (
        <div className="flex flex-col">
            <h1 className="font-serif font-bold text-2xl p-6">Contact Me</h1>
            <p>Dont be shy, reach me here!</p>
        <ul>
            <li><a className={`underline`} href="https://github.com/RosalvaMartinez"> My github</a></li>
            <li><a className={`underline`} href="mailto:rosalvahmartinez@gmail.com">My email</a></li>
        </ul>
        </div>
    );
}

export default Contact;
