import {React} from 'react';
import "./Galaxy.css";
import $ from 'jquery';

function GalaxyBuild() {

    var body = $("body")

    var init = function() {
        body.removeClass('view-3D opening').addClass("view-2D").delay(2000)
    };

    init();

    return (
        <div>
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
        </div>
    );
}

export default GalaxyBuild;