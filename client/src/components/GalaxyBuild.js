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



            <div id="earth" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="moon-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="moon-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="moon-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="moon-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="moon-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="mars" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="moon-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="moon-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="moon-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="moon-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="moon-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="jupiter" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="moon-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="moon-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="moon-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="moon-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="moon-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="saturn" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="moon-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="moon-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="moon-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="moon-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="moon-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>

            
            <div id="uranus" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="moon-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="moon-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="moon-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="moon-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="moon-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="sun">
                <dl className="infos">
                <dt>Sun</dt>
                <dd><span></span></dd>
                </dl>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default GalaxyBuild;