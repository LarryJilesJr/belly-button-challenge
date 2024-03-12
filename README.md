# belly-button-challenge

This project aims to provide an intuitive and informative interface for users to 
interact with microbiome data collected from human belly buttons. It includes 
visualizations such as bar charts, bubble charts, and a gauge chart to display various aspects of the data.

--
Analysis:
-Data Loading: The application loads microbiome data from a JSON file hosted on Amazon S3.
-Visualization: The application includes multiple visualizations:
--Bar Chart: Displays the top 10 operational taxonomic units (OTUs) found in each individual's belly button, based on sample values.
--Bubble Chart: Visualizes the relative abundance of different bacterial species in each sample.
--Gauge Chart: Represents the frequency of belly button washing per week for each individual.

-User Interaction: Users can interact with the dashboard by selecting a test subject ID number from a dropdown menu.
-Dynamic Updates: The visualizations are updated dynamically based on the selected test subject ID, allowing users to explore data for different individuals.

--
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
-Fork the repository.
-Create a new branch (git checkout -b feature/improvement).
-Make your changes.
-Commit your changes (git commit -am 'Add new feature').
-Push to the branch (git push origin feature/improvement).
-Create a new Pull Request.

--
**Source Data: 

Chat GPT Provider: OpenAI Model Version: GPT-3.5 Training Data: Diverse internet text Training Duration: Training duration was about 1-2 hours @article{openai2023, author = {OpenAI}, title = {ChatGPT: A Language Model by OpenAI}, year = {2023}, url = {https://www.openai.com}, }

Class Videos

Stackoverflow

BCS app within Slack app