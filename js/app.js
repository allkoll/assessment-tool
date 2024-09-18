function generateChart() {
    // Get the score inputs from the form
    const score4 = parseInt(document.getElementById('score4').value);
    const score3 = parseInt(document.getElementById('score3').value);
    const score2 = parseInt(document.getElementById('score2').value);
    const score1 = parseInt(document.getElementById('score1').value);

    // Calculate total students
    const totalStudents = score4 + score3 + score2 + score1;

    // Calculate percentages
    const percent4 = (score4 / totalStudents) * 100;
    const percent3 = (score3 / totalStudents) * 100;
    const percent2 = (score2 / totalStudents) * 100;
    const percent1 = (score1 / totalStudents) * 100;

    // Prepare data for Plotly chart
    const data = [{
        x: ['4', '3', '2', '1'],
        y: [percent4, percent3, percent2, percent1],
        type: 'bar'
    }];

    const layout = {
        title: 'Student Proficiency Distribution',
        xaxis: { title: 'Score' },
        yaxis: { title: 'Percentage (%)' }
    };

    // Render the chart
    Plotly.newPlot('chart', data, layout);
}
