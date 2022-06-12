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


            <div id="task-1" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="subtask-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="subtask-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="subtask-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="subtask-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="subtask-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="task-2" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="subtask-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="subtask-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="subtask-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="subtask-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="subtask-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="task-3" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="subtask-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="subtask-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="subtask-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="subtask-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="subtask-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="task-4" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="subtask-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="subtask-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="subtask-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="subtask-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="subtask-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>

            
            <div id="task-5" className="orbit">
                <div className="pos">
                    <div className="orbit-1">
                        <div className="pos">
                        <div className="subtask-1"></div>
                        </div>
                    </div>
                    <div className="orbit-2">
                        <div className="pos">
                        <div className="subtask-2"></div>
                        </div>
                    </div>
                    <div className="orbit-3">
                        <div className="pos">
                        <div className="subtask-3"></div>
                        </div>
                    </div>
                    <div className="orbit-4">
                        <div className="pos">
                        <div className="subtask-4"></div>
                        </div>
                    </div>
                    <div className="orbit-5">
                        <div className="pos">
                        <div className="subtask-5"></div>
                        </div>
                    </div>
                    <div className="planet"></div>
                </div>
            </div>


            <div id="project">
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