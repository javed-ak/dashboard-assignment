import { useState } from "react";
import { LayoutDashboard, Users, Calendar, UserCircle, Building2, HeadphonesIcon, Settings, ChevronLeft, Menu } from 'lucide-react';

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className={`fixed md:relative left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 z-50 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
            <div className="p-4 flex items-center justify-between border-b">
                <div className={`flex items-center gap-2 ${sidebarOpen ? 'block' : 'hidden'}`}>
                    <div className="text-blue-600 font-bold text-xl">Vasitum</div>
                </div>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    {sidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <div className="p-4">
                <div className={`text-xs text-gray-400 mb-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
                    MAIN MENU
                </div>
                <nav className="space-y-2">
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-red-500 bg-red-50 rounded-lg">
                        <LayoutDashboard size={20} />
                        <span className={sidebarOpen ? 'block' : 'hidden'}>Dashboard</span>
                    </button>
                    {[
                        { icon: Users, label: 'Recruitment' },
                        { icon: Calendar, label: 'Schedule' },
                        { icon: UserCircle, label: 'Employee' },
                        { icon: Building2, label: 'Department' },
                    ].map((item, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                            <item.icon size={20} />
                            <span className={sidebarOpen ? 'block' : 'hidden'}>{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className={`text-xs text-gray-400 mt-8 mb-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
                    OTHER
                </div>
                <nav className="space-y-2">
                    {[
                        { icon: HeadphonesIcon, label: 'Support' },
                        { icon: Settings, label: 'Settings' },
                    ].map((item, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                            <item.icon size={20} />
                            <span className={sidebarOpen ? 'block' : 'hidden'}>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    )
}