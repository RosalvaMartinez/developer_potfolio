import doggydaze from '../Assets/doggydaze.png'
import onlyflix from '../Assets/onlyflix.png'
import githubkit from '../githubkit.svg'

function Portfolio() {
    return (
        <div className="flex flex-col">
            <h1 className="font-serif font-bold text-2xl p-6">Portfolio </h1>
            <ul className="flex flex-row flex-wrap">
                <li className="h-[200px] w-[400px] m-4"> <a href="https://github.com/RosalvaMartinez/doggydaze"><img src={githubkit} alt="github kitty" className="text-center my-1 h-20 w-20 pb-4" /></a><a href="https://ancient-plains-63296.herokuapp.com"><img src={doggydaze} alt="doggydaze" className="object-fill h-48 w-96 border-8 border-black" /></a></li>
                <li className="h-[200px] w-[400px] m-4"><a href="https://github.com/RosalvaMartinez/OnlyFlix"><a href="https://github.com/RosalvaMartinez"><img src={githubkit} alt="github kitty" className="text-center my-1 h-20 w-20 pb-4" /></a><img src={onlyflix} alt="onlyflix" className="object-fill h-48 w-96 border-8 border-black" /></a></li>
                {/* <li className="h-[200px] w-[400px] bg-black m-4"></li>
                <li className="h-[200px] w-[400px] bg-black m-4"></li>
                <li className="h-[200px] w-[400px] bg-black m-4"></li>
                <li className="h-[200px] w-[400px] bg-black m-4"></li>
                <li className="h-[200px] w-[400px] bg-black m-4"></li> */}
            </ul>

        </div>
    );
}

export default Portfolio;
