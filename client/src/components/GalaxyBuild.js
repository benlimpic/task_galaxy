import {React} from 'react';
import "./Galaxy.css";
import $ from 'jquery';

function GalaxyBuild() {

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");

    var init = function() {
        body.removeClass('view-3D opening').addClass("view-2D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
        });
    };

    $("#toggle-data").click(function(e) {
        body.toggleClass("data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-close");
        e.preventDefault();
    });

    $("#data a").click(function(e) {
        var ref = $(this).attr("class");
        solarsys.removeClass().addClass(ref);
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    init();


    return (
        <div>
        <div id="navbar">
        <a id="toggle-data" href="#data"><i className="icon-data"></i></a>
        <a id="toggle-controls" href="#controls"><i className="icon-controls"></i></a>
        </div>
        <div >
        {/* <div id="data">
        <a className="sun" title="sun" href="#sunspeed">Sun</a>
        <a className="mercury" title="mercury" href="#mercuryspeed">Mercury</a>
        <a className="venus" title="venus" href="#venusspeed">Venus</a>
        <a className="earth active" title="earth" href="#earthspeed">Earth</a>
        <a className="mars" title="mars" href="#marsspeed">Mars</a>
        <a className="jupiter" title="jupiter" href="#jupiterspeed">Jupiter</a>
        <a className="saturn" title="saturn" href="#saturnspeed">Saturn</a>
        <a className="uranus" title="uranus" href="#uranusspeed">Uranus</a>
        <a className="neptune" title="neptune" href="#neptunespeed">Neptune</a>
        </div> */}

        {/* <div id="controls">
        <label className="set-view" onClick={(e) => body.toggleClass("view-3D view-2D")}>
            <input type="checkbox" />
        </label> */}
        {/* <label className="set-zoom" onClick={(e) => body.toggleClass("zoom-large zoom-close")
        }>
            <input type="checkbox" />
        </label>  */}
        </div>
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