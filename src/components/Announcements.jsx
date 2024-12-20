import { ChevronDown } from 'lucide-react'
import { AnnouncementCard } from './AnnouncementCard'

export default function Announcements() {
    return (
        <div className="bg-white rounded-lg">
            <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-semibold text-navy">Announcement</h3>
                <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-sm">Today, 13 Sep 2021</span>
                    <ChevronDown size={16} />
                </div>
            </div>
            <div>
                <AnnouncementCard
                    title="Outing schedule for every department"
                    time="5 Minutes ago"
                />
                <AnnouncementCard
                    title="Meeting HR Department"
                    time="Yesterday, 12:30 PM"
                />
                <AnnouncementCard
                    title="IT Department need two more talents for UX/UI Designer position"
                    time="Yesterday, 09:15 AM"
                />
            </div>
            <div className="p-4 border-t">
                <button className="text-red-500 w-full text-center">
                    See All Announcement
                </button>
            </div>
        </div>
    )
}
