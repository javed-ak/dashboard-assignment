import Announcements from './Announcements'
import Schedule from './Schedule'

export default function BottomGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Announcements />
            <Schedule />
        </div>
    )
}
