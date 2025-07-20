import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  Medal,
  Award,
  TrendingUp,
  Users,
  Target,
  Zap,
  Crown,
} from "lucide-react";

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

export function LeaderboardView() {
  const topUsers = [
    {
      rank: 1,
      name: "Priya Sharma",
      avatar: "/placeholder.svg",
      score: 1247,
      badge: "Elite",
      sessionsAttended: 12,
      pollsParticipated: 28,
      questionsAsked: 15,
      trend: "+127",
    },
    {
      rank: 2,
      name: "Rahul Verma",
      avatar: "/placeholder.svg",
      score: 1156,
      badge: "Elite",
      sessionsAttended: 11,
      pollsParticipated: 24,
      questionsAsked: 12,
      trend: "+89",
    },
    {
      rank: 3,
      name: "Sneha Patel",
      avatar: "/placeholder.svg",
      score: 1098,
      badge: "Elite",
      sessionsAttended: 10,
      pollsParticipated: 22,
      questionsAsked: 18,
      trend: "+156",
    },
  ];

  const leaderboardData = [
    ...topUsers.map((user) => ({ ...user, isCurrentUser: false })),
    {
      rank: 4,
      name: "Amit Singh",
      avatar: "/placeholder.svg",
      score: 967,
      badge: "Expert",
      sessionsAttended: 9,
      pollsParticipated: 19,
      questionsAsked: 8,
      trend: "+67",
      isCurrentUser: false,
    },
    {
      rank: 5,
      name: "Neha Gupta",
      avatar: "/placeholder.svg",
      score: 934,
      badge: "Expert",
      sessionsAttended: 8,
      pollsParticipated: 21,
      questionsAsked: 11,
      trend: "+45",
      isCurrentUser: false,
    },
    // Current user
    {
      rank: 12,
      name: "Priya Sharma (You)",
      avatar: "/placeholder.svg",
      score: 847,
      badge: "Elite",
      sessionsAttended: 8,
      pollsParticipated: 15,
      questionsAsked: 6,
      trend: "+127",
      isCurrentUser: true,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Session Master",
      description: "Attended 10+ sessions",
      icon: Users,
      unlocked: true,
      progress: 100,
    },
    {
      id: 2,
      title: "Question Expert",
      description: "Asked 20+ questions",
      icon: Target,
      unlocked: false,
      progress: 30,
    },
    {
      id: 3,
      title: "Poll Enthusiast",
      description: "Participated in 50+ polls",
      icon: Zap,
      unlocked: false,
      progress: 60,
    },
    {
      id: 4,
      title: "Elite Contributor",
      description: "Reach top 10 on leaderboard",
      icon: Crown,
      unlocked: false,
      progress: 83,
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-500" />;
      default:
        return (
          <span className="text-lg font-bold text-muted-foreground">
            #{rank}
          </span>
        );
    }
  };

  const getRankCardStyle = (rank: number, isCurrentUser?: boolean) => {
    if (isCurrentUser) return "border-primary bg-primary/5";
    if (rank === 1) return "border-yellow-500/50 bg-yellow-500/5";
    if (rank === 2) return "border-gray-400/50 bg-gray-400/5";
    if (rank === 3) return "border-orange-500/50 bg-orange-500/5";
    return "border-white/10";
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gradient-primary mb-2">
            Leaderboard
          </h1>
          <p className="text-muted-foreground">
            See how you stack up against other participants
          </p>
        </div>
        <Badge className="gradient-primary gap-2">
          <Trophy className="w-4 h-4" />
          #12 of 156
        </Badge>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div variants={itemVariants}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Top Performers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topUsers.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-center p-6 rounded-lg border ${getRankCardStyle(
                    user.rank
                  )}`}
                >
                  <div className="mb-4">{getRankIcon(user.rank)}</div>
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-lg">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-2">{user.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {user.score}
                  </div>
                  <Badge className="mb-4 gradient-primary">{user.badge}</Badge>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>{user.sessionsAttended} sessions</div>
                    <div>{user.pollsParticipated} polls</div>
                    <div>{user.questionsAsked} questions</div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-primary font-semibold">
                      {user.trend}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Full Leaderboard and Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Full Rankings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboardData.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center justify-between p-4 rounded-lg border ${getRankCardStyle(
                    user.rank,
                    user.isCurrentUser
                  )} transition-all duration-300 hover:bg-card/50`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 flex justify-center">
                      {getRankIcon(user.rank)}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-3">
                        <span>{user.sessionsAttended}S</span>
                        <span>{user.pollsParticipated}P</span>
                        <span>{user.questionsAsked}Q</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">
                      {user.score}
                    </div>
                    <div className="text-sm text-primary flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {user.trend}
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-orange" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      achievement.unlocked
                        ? "border-primary/50 bg-primary/5"
                        : "border-white/10 hover:bg-card/50"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`p-2 rounded-lg ${
                          achievement.unlocked
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span
                          className={
                            achievement.unlocked
                              ? "text-primary"
                              : "text-muted-foreground"
                          }
                        >
                          {achievement.progress}%
                        </span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
