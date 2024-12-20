export const StatCard = ({ title, value, subtitle, bgColor, textColor }) => (
    <div className={`p-6 rounded-lg ${bgColor}`}>
        <h3 className="text-3xl font-bold text-navy mb-2">{value}</h3>
        <p className={`text-sm ${textColor}`}>{subtitle}</p>
    </div>
);