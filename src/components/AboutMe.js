import devportfolio from '../devportfolio.jpg'

function AboutMe() {
    return (
        <div className="flex flex-col">
            <h1 className="font-serif font-bold text-2xl p-6">About Me</h1>
            <div className="flex flex-row">
                <div className="rounded-full p-6 w-2/5">
                    <img src={devportfolio} alt="me" className="h-52 w-52 rounded-full border-8 border-gray-800" />
                </div>
                <p className="p-6 text-xl w-3/5">
                    Aspiring Web Developer with a forever growing passion for web development and success in project development using varius computer languages and frameworks. Skilled in development, designing, and deploying software.

                    Dedicated to driving innovation with the ability to follow technological trends as well as abide by fast pace demands.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
