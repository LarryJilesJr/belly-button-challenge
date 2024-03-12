// URL of the JSON file
const bonusUrl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Function to build the gauge chart
function buildGaugeChart(sample) {
    // Fetch JSON data
    d3.json(bonusUrl).then((jsonData) => {
        // Extracting metadata
        let metadata = jsonData.metadata;
        // Finding metadata for the selected sample
        let result = metadata.find(sampleObj => sampleObj.id == sample);
        // Extracting washing frequency data
        let wfreq = result.wfreq;

        // Gauge chart data
        let gaugeData = [{
            type: "indicator",
            mode: "gauge+number",
            value: wfreq,
            title: '<b>Belly Button Washing Frequency</b> <br> Scrubs per Week',
            gauge: {
                axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
                bar: { color: "darkblue" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                    { range: [0, 1], color: "rgba(255,0,0,0.3)" },
                    { range: [1, 2], color: "rgba(255,51,0,0.3)" },
                    { range: [2, 3], color: "rgba(255,102,0,0.3)" },
                    { range: [3, 4], color: "rgba(255,153,0,0.3)" },
                    { range: [4, 5], color: "rgba(255,204,0,0.3)" },
                    { range: [5, 6], color: "rgba(255,255,0,0.3)" },
                    { range: [6, 7], color: "rgba(204,255,0,0.3)" },
                    { range: [7, 8], color: "rgba(102,255,0,0.3)" },
                    { range: [8, 9], color: "rgba(0,255,0,0.3)" }
                ]
            }
        }];

        // Gauge chart layout
        let layout = {
            width: 500,
            height: 400,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            paper_bgcolor: "white",
            font: { color: "darkblue", family: "Arial" }
        };

        // Plotting the gauge chart
        Plotly.newPlot('gauge', gaugeData, layout);
    });
}

// Function called when a new sample is selected
function optionChanged(newSample) {
    buildGaugeChart(newSample);
}
