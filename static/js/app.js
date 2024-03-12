// URL of the JSON file
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then((data) => {
    // Populating the dropdown menu
    let select = d3.select("#selDataset");
    data.names.forEach((name) => {
        select.append("option").text(name).property("value", name);
    });

    // Initializing the page with the first sample
    let firstSample = data.names[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
});

// Function to build the bar chart and bubble chart
function buildCharts(sample) {
    d3.json(url).then((data) => {
        let samples = data.samples;
        let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // Build a Bar Chart
        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [{
            y: yticks,
            x: sample_values.slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
        }];

        let barLayout = {
            title: "Top 10 operational taxonomic units, or OTUs",
            margin: { t: 30, l: 150 },
            height: 400, 
            width: 700,  
        };

        Plotly.newPlot("bar", barData, barLayout);

        // Building a Bubble Chart
        let bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        }];

        let bubbleLayout = {
            title: 'Operational taxonomic units, or OTUs per sample',
            showlegend: false,
            height: 600,
            width: 1200,
            xaxis: { title: 'OTU ID' },
            hovermode: 'closest'
        };

        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    });
}

function optionChanged(newSample) {
    // Fetching new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
}

// Function to build the metadata panel
function buildMetadata(sample) {
    d3.json(url).then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        let PANEL = d3.select("#sample-metadata");

        // Clearing any existing metadata
        PANEL.html("");

        // Adding each key-value pair to the panel
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}