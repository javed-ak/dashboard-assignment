import { ChevronDown } from "lucide-react";
import { ScheduleItem } from "./ScheduleItem";

export default function Schedule() {
    return (
        <div className="bg-white rounded-lg">
            <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-semibold text-navy">Upcoming Schedule</h3>
                <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-sm">Today, 13 Sep 2021</span>
                    <ChevronDown size={16} />
                </div>
            </div>
            <div>
                <ScheduleItem
                    priority="Priority"
                    title="Review candidate applications"
                    time="Today - 11:30 AM"
                />
                <ScheduleItem
                    priority="Other"
                    title="Interview with candidates"
                    time="Today - 10:30 AM"
                />
                <ScheduleItem
                    priority="Other"
                    title="Short meeting with product designer from IT Department"
                    time="Today - 09:15 AM"
                />
            </div>
            <div className="p-4 border-t">
                <button className="text-red-500 w-full text-center">
                    Create a New Schedule
                </button>
            </div>
        </div>
    )
}
