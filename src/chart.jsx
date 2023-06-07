import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/chart');
      if (!response.ok) {
        throw new Error('Error fetching chart data');
      }
      const jsonData = await response.json();
      setChartData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-lg">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4">
          {chartData ? (
            <Doughnut
              data={{
                labels: chartData.labels,
                datasets: [
                  {
                    label: '# of Votes',
                    data: chartData.data,
                    backgroundColor: chartData.backgroundColor,
                    borderColor: chartData.borderColor,
                    borderWidth: 1,
                  },
                ],
              }}
            />
          ) : (
            <p>Loading chart data...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chart;
