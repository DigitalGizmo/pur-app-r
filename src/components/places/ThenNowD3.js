import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import {event} from 'd3-selection';

const ThenNowD3 = () => {
  const svgRef = useRef(null);
  const width = 1200;
  const height = 900;
  const baseImagePath = "http://dev.picturingurbanrenewal.org/prod-assets/places/then-now/E-Strand-Hasbrouck-after.jpg"
  const revealedImagePath = "http://dev.picturingurbanrenewal.org/prod-assets/places/then-now/E-Strand-Hasbrouck-before.jpg"

  useEffect(() => {

    const lensW = 1400, lensH = 835;
    var startX = 400, startY = 25; 
    const yMovement = false;

    // drag border and clip with it
    let drag = d3.drag()
        .on("drag", function() {
            console.log('got to drag');
            // var clippy = d3.select('#clip rect');
            // clippy.attr('x', +clippy.attr('x') + event.dx);
            // if (yMovement) { clippy.attr('y', +clippy.attr('y') + event.dy); }
            
            // var border = d3.select('#lens-border');
            // border.attr('x', +border.attr('x') + event.dx);
            // if (yMovement) { border.attr('y', +border.attr('y') + event.dy); }
            
        });

    // add padding to container and append svg
    // adding padding bottom here, dynamically, is critical
    // var lensSvg = d3.select("#" + containerID)
    const lensSvg = d3.select(svgRef.current)
            .attr(
                "style",
                "padding-bottom: " + Math.ceil(height * 100 / width) + "%"
            )
            // .append("svg")
            .attr("viewBox", "0 0 " + width + " " + height);

    // append g and foreground image
    // lensSvg.append("svg:g")
    // lensSvg
    //     // .attr("transform","translate(50,50)")
    //     .append("svg:image")
    //     .attr("x", 0)
    //     .attr("y", 0)
    //     .attr("xlink:href", baseImagePath)
    //     .attr("width", width)
    //     .attr("height", height)
    //     ;

    // append background image to existing g
    // d3.select("svg g").append("svg:image")
    lensSvg.append("svg:image")
        .attr("id", "lens-image")
        .attr("x", 0)
        .attr("y", 0)
        .attr("xlink:href", revealedImagePath)
        .attr("width", width)
        .attr("height", height)
        ;

    // add border 
    // d3.select("svg g").append("svg:rect")
    // lensSvg.append("svg:rect")
    //     .attr("id", "lens-border")
    //     .attr('x', startX)
    //     .attr('y', startY)
    //     .attr('width', lensW)
    //     .attr('height', lensH)
    //     .attr('rx', 15)
    //     .attr('ry', 15)
    //     .style("fill-opacity", 0)
    //     .style("stroke", "#7d7664")
    //     .style("stroke-width", 3)
    //     .style('cursor', 'move')
    //     .call(drag);
    //     ;

    // // add lens clip
    // // var clip = d3.select("svg g").append("svg:clipPath")
    // lensSvg.append("svg:clipPath")
    //     .attr("id", "clip")
    //     .append("svg:rect")
    //     .attr('x', startX)
    //     .attr('y', startY)
    //     .attr('rx', 15)
    //     .attr('ry', 15)
    //     .attr('width', lensW)
    //     .attr('height', lensH)
    //     ;

    // add lens and drag to foreground image
    d3.select("#lens-image")
        .attr("clip-path", function(d,i) { return "url(#clip)"; });

  }, []);

  return <svg ref={svgRef} width={width} height={height} />;

}

export default ThenNowD3;