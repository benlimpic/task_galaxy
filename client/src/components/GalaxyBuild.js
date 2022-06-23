import {useEffect, useState} from 'react';
import "./Galaxy.css";



function GalaxyBuild(project) {

// const [projectGalaxy, setProjectGalaxy] = useState([])
// const [projectGalaxys, setProjectGalaxys] = useState([])

    
//     useEffect(() => {
//         fetch(`/projects/`)
//         .then(r => r.json())
//         .then(data => {
//         setProjectGalaxys(data)})
//     }, [setProjectGalaxys, projects])

//         projectGalaxys.filter(galaxy => {
//             return (galaxy.project_id === project.id) ? setProjectGalaxy(galaxy) : null})

    const init = () => {
        document.body.classList.add("view-2D")
    };
    init();

    return (
        <>
            {project.status === 500 ?
                    <div className="galaxy">
                        <h1>{"I cannot believe this worked"}</h1>
                    </div>
                :   
                <div className="galaxy">
                <div id="universe" className="scale-stretched">
                <div id="galaxy">
                    <div id="solar-system" className="earth">


                        <div id="sun">
                        </div>


                        <div id="earth-1" className="orbit">
                            <div className="pos">

                                
                                    <div className="orbit-1a">
                                        <div className="pos">
                                        <div className="moon-1"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-2b">
                                        <div className="pos">
                                        <div className="moon-2"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-3c">
                                        <div className="pos">
                                        <div className="moon-3"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-4d">
                                        <div className="pos">
                                        <div className="moon-4"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-5f">
                                        <div className="pos">
                                        <div className="moon-5"></div>
                                        </div>
                                    </div>

                                <div className="planet"></div>
                            </div>
                        </div>
                        


                        <div id="mars-1" className="orbit">
                            <div className="pos">


                            <div className="orbit-1a">
                                        <div className="pos">
                                        <div className="moon-1"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-2b">
                                        <div className="pos">
                                        <div className="moon-2"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-3c">
                                        <div className="pos">
                                        <div className="moon-3"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-4d">
                                        <div className="pos">
                                        <div className="moon-4"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-5f">
                                        <div className="pos">
                                        <div className="moon-5"></div>
                                        </div>
                                    </div>

                                <div className="planet"></div>
                            </div>
                        </div> 


                        <div id="jupiter-1" className="orbit">
                            <div className="pos">


                            <div className="orbit-1a">
                                        <div className="pos">
                                        <div className="moon-1"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-2b">
                                        <div className="pos">
                                        <div className="moon-2"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-3c">
                                        <div className="pos">
                                        <div className="moon-3"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-4d">
                                        <div className="pos">
                                        <div className="moon-4"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-5f">
                                        <div className="pos">
                                        <div className="moon-5"></div>
                                        </div>
                                    </div>

                                <div className="planet"></div>
                            </div>
                        </div> 


                        <div id="saturn-1" className="orbit">
                            <div className="pos">

                            <div className="orbit-1a">
                                        <div className="pos">
                                        <div className="moon-1"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-2b">
                                        <div className="pos">
                                        <div className="moon-2"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-3c">
                                        <div className="pos">
                                        <div className="moon-3"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-4d">
                                        <div className="pos">
                                        <div className="moon-4"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-5f">
                                        <div className="pos">
                                        <div className="moon-5"></div>
                                        </div>
                                    </div>

                                <div className="planet"></div>
                            </div>
                        </div> 
                        

                        <div id="uranus-1" className="orbit">
                            <div className="pos">

                            <div className="orbit-1a">
                                        <div className="pos">
                                        <div className="moon-1"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-2b">
                                        <div className="pos">
                                        <div className="moon-2"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-3c">
                                        <div className="pos">
                                        <div className="moon-3"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-4d">
                                        <div className="pos">
                                        <div className="moon-4"></div>
                                        </div>
                                    </div>

                                    <div className="orbit-5f">
                                        <div className="pos">
                                        <div className="moon-5"></div>
                                        </div>
                                    </div>

                                <div className="planet"></div>
                            </div>
                        </div> 
                        

                    </div>
                </div>
                </div>
                </div>
            }
        </>
        );
    }

export default GalaxyBuild;