import { Bell, MessageSquare, ChevronDown } from 'lucide-react';

export default function Header() {
    return (
        <div>
            <header className="bg-white p-4 flex justify-between items-center">
                <input
                    type="search"
                    placeholder="Search"
                    className="px-4 py-2 border rounded-lg w-64"
                />
                <div className="flex items-center gap-4">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                    <div className="flex items-center gap-2">
                        <img
                            src="/api/placeholder/32/32"
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">John Duo</span>
                        <ChevronDown size={16} />
                    </div>
                </div>
            </header>
        </div>
    )
}