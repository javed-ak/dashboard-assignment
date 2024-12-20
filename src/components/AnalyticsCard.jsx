export const AnalyticsCard = ({ title, value, menCount, womenCount, growth }) => (
    <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-navy mb-4">{title}</h3>
        <div className="flex justify-between items-start">
            <div>
                <p className="text-3xl font-bold text-navy mb-4">{value}</p>
                <div className="space-y-1">
                    <p className="text-gray-500">{menCount} Men</p>
                    <p className="text-gray-500">{womenCount} Women</p>
                </div>
            </div>
            <div className="text-red-500">
                <p>+{growth}% Past month</p>
                <svg className="w-24 h-8" viewBox="0 0 100 30">
                    <path
                        d="M0 20 C20 20, 40 10, 60 15 S80 25, 100 15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    </div>
);