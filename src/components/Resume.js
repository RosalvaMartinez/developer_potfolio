function Resume() {
    return (
        <div className="flex flex-col">
            <h1 className="font-serif font-bold text-3xl p-6">
                Resume
            </h1>
            <div className="m-6">
                <h2 className="text-2xl">
                    Front-end Proficiencies
                </h2>
                <ul className="list-disc p-2">
                    <li className="text-xl">HTML</li>
                    <li className="text-xl">CSS</li>
                    <li className="text-xl">JavaScript</li>
                    <li className="text-xl">JQuery</li>
                    <li className="text-xl">responsive design</li>
                    <li className="text-xl">React</li>
                    <li className="text-xl">Bootstrap</li>
                </ul>
                <h2 className="text-2xl">
                    Back-end Proficiencies
                </h2>
                <ul className="list-disc p-2">
                    <li className="text-xl">APIs</li>
                    <li className="text-xl">Node</li>
                    <li className="text-xl">Express</li>
                    <li className="text-xl">MySQL, Sequelize</li>
                    <li className="text-xl">MongoDB, Mongoose</li>
                    <li className="text-xl">REST</li>
                    <li className="text-xl">GraphQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;
