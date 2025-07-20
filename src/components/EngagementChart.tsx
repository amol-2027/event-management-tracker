import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function EngagementChart() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Engagement Score',
        data: [720, 750, 780, 820, 847, 865, 847],
        borderColor: 'hsl(142, 76%, 36%)',
        backgroundColor: 'hsla(142, 76%, 36%, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'hsl(142, 76%, 36%)',
        pointBorderColor: 'hsl(142, 76%, 50%)',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'hsl(224, 71%, 4%)',
        titleColor: 'hsl(210, 40%, 98%)',
        bodyColor: 'hsl(210, 40%, 98%)',
        borderColor: 'hsl(142, 76%, 36%)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
      }
    },
    scales: {
      x: {
        grid: {
          color: 'hsla(217, 32.6%, 17.5%, 0.5)',
          drawBorder: false,
        },
        ticks: {
          color: 'hsl(215, 20.2%, 65.1%)',
          font: {
            family: 'Inter',
            size: 12,
          }
        }
      },
      y: {
        grid: {
          color: 'hsla(217, 32.6%, 17.5%, 0.5)',
          drawBorder: false,
        },
        ticks: {
          color: 'hsl(215, 20.2%, 65.1%)',
          font: {
            family: 'Inter',
            size: 12,
          }
        },
        min: 600,
        max: 900,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <div style={{ height: '300px' }}>
      <Line data={data} options={options} />
    </div>
  );
}