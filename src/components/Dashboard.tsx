import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Users,
  MessageSquare,
  Download,
  Clock,
  Award,
  Target,
  Zap,
} from "lucide-react";
import { EngagementChart } from "./EngagementChart";
import { SessionCard } from "./SessionCard";
import { UserProfile } from "./UserProfile";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Dashboard() {
  // Mock data - in real app this would come from APIs
  const userStats = {
    engagementScore: 847,
    rank: 12,
    sessionsAttended: 8,
    pollsParticipated: 15,
    questionsAsked: 6,
    resourcesDownloaded: 23,
  };

  const recentSessions = [
    {
      id: 1,
      title: "Event Engagement in Web Development",
      speaker: "Sarah Chen",
      time: "10:00 AM",
      attended: true,
      engagement: 85,
    },
    {
      id: 2,
      title: "Building Scalable APIs",
      speaker: "Mike Rodriguez",
      time: "2:00 PM",
      attended: false,
      engagement: 0,
    },
    {
      id: 3,
      title: "React Performance Tips",
      speaker: "Alex Kim",
      time: "4:30 PM",
      attended: true,
      engagement: 92,
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 800) return "text-gradient-primary";
    if (score >= 600) return "text-primary";
    if (score >= 400) return "text-accent-orange";
    return "text-red-400";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 800) return { label: "Elite", color: "gradient-primary" };
    if (score >= 600) return { label: "Expert", color: "bg-primary" };
    if (score >= 400) return { label: "Active", color: "bg-accent-orange" };
    return { label: "Beginner", color: "bg-red-500" };
  };

  const scoreBadge = getScoreBadge(userStats.engagementScore);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background p-6 space-y-6"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-gradient-primary mb-2">
            EngageMeter Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your hackathon engagement and climb the leaderboard
          </p>
        </div>
        <UserProfile />
      </motion.div>

      {/* Engagement Score Hero Card */}
      <motion.div variants={itemVariants}>
        <Card className="glass-card-interactive relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary opacity-10" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">
                  Your Engagement Score
                </CardTitle>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-6xl font-bold ${getScoreColor(
                      userStats.engagementScore
                    )}`}
                  >
                    {userStats.engagementScore}
                  </span>
                  <div className="space-y-2">
                    <Badge className={scoreBadge.color} variant="secondary">
                      <Award className="w-4 h-4 mr-1" />
                      {scoreBadge.label}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Target className="w-4 h-4 mr-1" />
                      Rank #{userStats.rank} of 156
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-animation">
                <Zap className="w-16 h-16 text-primary" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {userStats.sessionsAttended}
                </div>
                <div className="text-sm text-muted-foreground">Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue">
                  {userStats.pollsParticipated}
                </div>
                <div className="text-sm text-muted-foreground">Polls</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-purple">
                  {userStats.questionsAsked}
                </div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-orange">
                  {userStats.resourcesDownloaded}
                </div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card className="glass-card-interactive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Session Attendance
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8/10</div>
            <Progress value={80} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +2 from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card-interactive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Poll Participation
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-accent-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +5 from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card-interactive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="h-4 w-4 text-accent-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <Progress value={90} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +8 from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card-interactive">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Time</CardTitle>
            <Clock className="h-4 w-4 text-accent-purple" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.5h</div>
            <Progress value={65} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">
              +2.1h from yesterday
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Charts and Sessions */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Engagement Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EngagementChart />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Today's Sessions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SessionCard session={session} />
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
