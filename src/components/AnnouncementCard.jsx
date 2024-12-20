import { Star, MoreVertical } from 'lucide-react';

export const AnnouncementCard = ({ title, time }) => (
    <div className="p-4 hover:bg-gray-50 cursor-pointer">
        <div className="flex justify-between">
            <div>
                <h4 className="font-medium text-navy mb-1">{title}</h4>
                <p className="text-sm text-gray-500">{time}</p>
            </div>
            <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                    <Star size={16} />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical size={16} />
                </button>
            </div>
        </div>
    </div>
);