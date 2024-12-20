import { AnalyticsCard } from "./AnalyticsCard";

export default function AnalyticsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <AnalyticsCard
                title="Total Employees"
                value="216"
                menCount="120"
                womenCount="96"
                growth="2"
            />
            <AnalyticsCard
                title="Talent Request"
                value="16"
                menCount="6"
                womenCount="10"
                growth="5"
            />
        </div>
    )
}
