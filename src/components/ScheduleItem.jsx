import { MoreVertical } from 'lucide-react';

export const ScheduleItem = ({ title, time, priority }) => (
    <div className="p-4 hover:bg-gray-50">
        <div className="flex justify-between">
            <div>
                <p className="text-sm text-gray-500">{priority}</p>
                <h4 className="font-medium text-navy">{title}</h4>
                <p className="text-sm text-gray-500">{time}</p>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
                <MoreVertical size={16} />
            </button>
        </div>
    </div>
);