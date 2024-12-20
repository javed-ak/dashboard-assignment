import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsGrid from '../components/StatsGrid';
import AnalyticsCards from '../components/AnalyticsCards';
import BottomGrid from '../components/BottomGrid';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-6">
                    <h1 className="text-2xl font-bold text-navy mb-6">Dashboard</h1>
                    <StatsGrid />
                    <AnalyticsCards />
                    <BottomGrid />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;