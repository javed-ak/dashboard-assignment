import { StatCard } from "./StatCard";

export default function StatsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatCard
                value="24"
                subtitle="4 Urgently needed"
                bgColor="bg-red-50"
                textColor="text-red-500"
            />
            <StatCard
                value="10"
                subtitle="4 Active hiring"
                bgColor="bg-blue-50"
                textColor="text-blue-500"
            />
            <StatCard
                value="24"
                subtitle="4 Department"
                bgColor="bg-purple-50"
                textColor="text-purple-500"
            />
        </div>

    )
}
