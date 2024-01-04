/** @format */

import React, { Component } from "react";
import * as d3 from "d3";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.createGraph = this.createGraph.bind(this);
  }

  componentDidMount() {
    this.createGraph();
  }
  componentDidUpdate() {
    this.createGraph();
  }

  createGraph() {
    const _self = this;
    // const domNode = this.node;
    // const svg = d3.select(domNode);
    const data = _self.props.data;
    console.log(data[0].id);

    // Specify the dimensions of the chart.
    const width = 928;
    const height = width;
    const margin = 1; // to avoid clipping the root circle stroke
    const name = (d) => d.id.split(".").pop(); // "Strings" of "flare.util.Strings"
    const group = (d) => d.id.split(".")[1]; // "util" of "flare.util.Strings"
    const names = (d) => name(d).split(/(?=[A-Z][a-z])|\s+/g); // ["Legend", "Item"] of "flare.vis.legend.LegendItems"

    // Specify the number format for values.
    const format = d3.format(",d");

    // Create a categorical color scale.
    const color = d3.scaleOrdinal(d3.schemeTableau10);

    // Create the pack layout.
    const pack = d3
      .pack()
      .size([width - margin * 2, height - margin * 2])
      .padding(3);

    // Compute the hierarchy from the (flat) data; expose the values
    // for each node; lastly apply the pack layout.
    const root = pack(d3.hierarchy({ children: data }).sum((d) => d.value));

    // Create the SVG container.
    const svg = d3
      .create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-margin, -margin, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;")
      .attr("text-anchor", "middle");

    // // Place each (leaf) node according to the layout’s x and y values.
    const node = svg
      .append("g")
      .selectAll()
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    // Add a title.
    node.append("title").text((d) => `${d.id}\n${format(d.value)}`);

    // Add a filled circle.
    node
      .append("circle")
      .attr("fill-opacity", 0.7)
      .attr("fill", (d) => color(group(d.data)))
      .attr("r", (d) => d.r);

    // Add a label.
    const text = node.append("text").attr("clip-path", (d) => `circle(${d.r})`);

    // Add a tspan for each CamelCase-separated word.
    text
      .selectAll()
      .data((d) => names(d.data))
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.35}em`)
      .text((d) => d);

    // Add a tspan for the node’s value.
    text
      .append("tspan")
      .attr("x", 0)
      .attr("y", (d) => `${names(d.data).length / 2 + 0.35}em`)
      .attr("fill-opacity", 0.7)
      .text((d) => format(d.value));

    return svg;
  }

  render() {
    return this.createGraph();
  }
}

export default Graph;