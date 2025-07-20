import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Calendar,
  MessageSquare,
  Download,
  Trophy,
  Users,
  Settings,
  Bell,
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: "sessions",
      label: "Sessions",
      icon: Calendar,
      badge: "3",
    },
    {
      id: "polls",
      label: "Polls & Q&A",
      icon: MessageSquare,
      badge: "2",
    },
    {
      id: "resources",
      label: "Resources",
      icon: Download,
      badge: null,
    },
    {
      id: "leaderboard",
      label: "Leaderboard",
      icon: Trophy,
      badge: null,
    },
    {
      id: "community",
      label: "Community",
      icon: Users,
      badge: null,
    },
  ];

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-full w-72 glass-card border-r border-white/10 p-6 z-50"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="text-2xl font-bold text-gradient-primary">
            EngageMeter
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Event Engagement Tracker
        </p>
      </motion.div>

      {/* Navigation Items */}
      <div className="space-y-2 mb-8">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Button
                variant={isActive ? "default" : "ghost"}
                onClick={() => onTabChange(item.id)}
                className={`w-full justify-start gap-3 h-12 ${
                  isActive
                    ? "gradient-primary text-white shadow-lg glow-primary"
                    : "hover:bg-card/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge
                    variant="secondary"
                    className="bg-accent-orange text-white text-xs h-5 w-5 rounded-full p-0 flex items-center justify-center"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Button>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="p-4 rounded-lg glass-card border border-primary/20 space-y-3"
      >
        <h3 className="font-semibold text-sm text-primary">Quick Stats</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Today's Score</span>
            <span className="text-primary font-semibold">+127</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Current Rank</span>
            <span className="text-accent-orange font-semibold">#12</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Live Sessions</span>
            <span className="text-accent-blue font-semibold">2</span>
          </div>
        </div>
      </motion.div>

      {/* Settings & Notifications */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-6 left-6 right-6 flex gap-2"
      >
        <Button variant="ghost" size="icon" className="flex-1">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="flex-1">
          <Settings className="w-5 h-5" />
        </Button>
      </motion.div>
    </motion.nav>
  );
}
