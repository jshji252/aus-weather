import React, { Component } from "react";
import { line } from "d3-shape";
import { scaleLinear, scaleTime } from "d3-scale";
import { extent, max } from "d3-array";
import { select } from "d3-selection";
import { axisLeft, axisBottom } from "d3-axis";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }
  createBarChart() {
    const node = this.node;
    node.innerHTML = "";
    select(node)
      .selectAll("path")
      .data(this.props.data, (d) => (d ? d.temp : "no data"))
      .enter()
      .append("path");

    const xMargin = 50;
    const yMargin = 30;
    const height = this.node.clientHeight;
    const width = this.node.clientWidth;
    const extents = extent(this.props.data, (d) => d.date);

    const x = scaleTime()
      .domain([new Date(extents[0]), new Date(30 * 60 * 1000 + extents[1])])
      .range([xMargin * 1.1, width - xMargin]);

    const y = scaleLinear()
      .domain([0, max(this.props.data, (d) => d.temp)])
      .nice()
      .range([height - yMargin, yMargin]);

    const xAxis = (g) =>
      g
        .attr("transform", `translate(0,${height - yMargin})`)
        .call(axisBottom(x).ticks(144 / 12));

    const yAxis = (g) =>
      g
        .attr("transform", `translate(${xMargin},0)`)
        .call(axisLeft(y))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .select(".tick:last-of-type text")
            .clone()
            .attr("x", 30)
            .text(this.props.data.temp)
        );

    select(node).append("g").call(xAxis);
    select(node).append("g").call(yAxis);

    const linee = line()
      .x((d) => x(d.date))
      .y((d) => y(d.temp));

    select(node)
      .selectAll("path")
      .datum(this.props.data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", linee);
  }

  render() {
    return (
      <svg
        style={{ backgroundColor: "beige" }}
        ref={(node) => (this.node = node)}
        width={"100%"}
        height={"100%"}
      ></svg>
    );
  }
}
export default Chart;
