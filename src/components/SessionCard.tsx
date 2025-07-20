import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, User, CheckCircle, Circle, ExternalLink } from 'lucide-react';

interface Session {
  id: number;
  title: string;
  speaker: string;
  time: string;
  attended: boolean;
  engagement: number;
}

interface SessionCardProps {
  session: Session;
}

export function SessionCard({ session }: SessionCardProps) {
  const getEngagementColor = (score: number) => {
    if (score >= 80) return 'text-primary';
    if (score >= 60) return 'text-accent-orange';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-400';
  };

  const getEngagementBadge = (score: number) => {
    if (score >= 80) return { label: 'High', color: 'bg-primary' };
    if (score >= 60) return { label: 'Medium', color: 'bg-accent-orange' };
    if (score >= 40) return { label: 'Low', color: 'bg-yellow-500' };
    return { label: 'None', color: 'bg-red-500' };
  };

  const engagementBadge = getEngagementBadge(session.engagement);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-4 rounded-lg border border-white/10 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{session.title}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {session.speaker}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {session.time}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {session.attended ? (
            <CheckCircle className="w-5 h-5 text-primary" />
          ) : (
            <Circle className="w-5 h-5 text-muted-foreground" />
          )}
        </div>
      </div>

      {session.attended && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Engagement Level</span>
            <Badge className={engagementBadge.color} variant="secondary">
              {engagementBadge.label}
            </Badge>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Score</span>
              <span className={`font-semibold ${getEngagementColor(session.engagement)}`}>
                {session.engagement}%
              </span>
            </div>
            <Progress value={session.engagement} className="h-2" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-4">
        <Badge variant={session.attended ? "default" : "secondary"}>
          {session.attended ? "Attended" : "Missed"}
        </Badge>
        
        {!session.attended && (
          <Button size="sm" variant="outline" className="gap-2">
            View Recording
            <ExternalLink className="w-4 h-4" />
          </Button>
        )}
      </div>
    </motion.div>
  );
}