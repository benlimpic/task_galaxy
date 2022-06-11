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
            <div id="mercury" className="orbit">
                <div className="pos">
                <div className="planet">
                    <dl className="infos">
                    <dt>Mercury</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="venus" className="orbit">
                <div className="pos">
                <div className="planet">
                    <dl className="infos">
                    <dt>Venus</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="earth" className="orbit">
                <div className="pos">
                <div className="orbit">
                    <div className="pos">
                    <div className="moon"></div>
                    </div>
                </div>
                <div className="planet">
                    <dl className="infos">
                    <dt>Earth</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="mars" className="orbit">
                <div className="pos">
                <div className="planet">
                    <dl className="infos">
                    <dt>Mars</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="jupiter" className="orbit">
                <div className="pos">
                <div className="planet">
                    <dl className="infos">
                    <dt>Jupiter</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="saturn" className="orbit">
                <div className="pos">
                <div className="planet">
                    <div className="ring"></div>
                    <dl className="infos">
                    <dt>Saturn</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="uranus" className="orbit">
                <div className="pos">
                <div className="planet">
                    <dl className="infos">
                    <dt>Uranus</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
                </div>
            </div>
            <div id="neptune" className="orbit">
                <div className="pos">
                <div className="planet">
                    <dl className="infos">
                    <dt>Neptune</dt>
                    <dd><span></span></dd>
                    </dl>
                </div>
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