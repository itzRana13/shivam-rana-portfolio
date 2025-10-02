import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Sun, Leaf, Crown } from 'lucide-react';

const ThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = useState<'default' | 'warm' | 'nature' | 'vintage'>('default');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    const themes = [
        {
            name: 'default',
            label: 'Tech',
            icon: <Palette className="h-4 w-4" />,
            description: 'Blue/Purple'
        },
        {
            name: 'warm',
            label: 'Warm',
            icon: <Sun className="h-4 w-4" />,
            description: 'Orange/Red'
        },
        {
            name: 'nature',
            label: 'Nature',
            icon: <Leaf className="h-4 w-4" />,
            description: 'Green'
        },
        {
            name: 'vintage',
            label: 'Vintage',
            icon: <Crown className="h-4 w-4" />,
            description: 'Gold/Brown'
        }
    ];

    const currentThemeData = themes.find(theme => theme.name === currentTheme);

    const handleThemeChange = (theme: 'default' | 'warm' | 'nature' | 'vintage') => {
        setCurrentTheme(theme);
        setIsOpen(false);
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <div
                className="relative group"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {/* Main Button - Shows only icon */}
                <Button
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0 bg-card/80 backdrop-blur-sm border border-border hover:bg-secondary transition-all duration-200"
                >
                    {currentThemeData?.icon}
                </Button>

                {/* Tooltip on hover */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-card/90 backdrop-blur-sm border border-border rounded-md px-3 py-2 text-sm whitespace-nowrap shadow-lg">
                        <div className="font-medium">{currentThemeData?.label}</div>
                        <div className="text-xs text-muted-foreground">{currentThemeData?.description}</div>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-card/90 border-r border-b border-border rotate-45"></div>
                </div>

                {/* Dropdown Menu */}
                <div className={`absolute right-0 top-12 w-48 bg-card/90 backdrop-blur-sm border border-border rounded-lg shadow-lg transition-all duration-200 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                    <div className="p-2">
                        <div className="text-xs text-muted-foreground mb-2 px-2">Choose Theme</div>
                        {themes.map((theme) => (
                            <Button
                                key={theme.name}
                                variant="ghost"
                                size="sm"
                                onClick={() => handleThemeChange(theme.name as 'default' | 'warm' | 'nature' | 'vintage')}
                                className={`w-full justify-start gap-3 text-sm transition-all duration-200 ${currentTheme === theme.name
                                    ? 'bg-primary/20 text-primary border border-primary/30'
                                    : 'hover:bg-secondary/50'
                                    }`}
                            >
                                {theme.icon}
                                <div className="flex flex-col items-start">
                                    <span className="font-medium">{theme.label}</span>
                                    <span className="text-xs text-muted-foreground">{theme.description}</span>
                                </div>
                                {currentTheme === theme.name && (
                                    <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                                )}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeSwitcher;