import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  User,
  MapPin,
  Users,
  Play,
  CheckCircle2,
  Calendar,
  Star,
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

export function SessionsView() {
  const sessions = [
    {
      id: 1,
      title: "Building Engaging Web Applications",
      speaker: "Sarah Chen",
      company: "Engagement Institute",
      time: "10:00 AM - 11:30 AM",
      location: "Main Hall",
      attendees: 156,
      capacity: 200,
      status: "live",
      difficulty: "Intermediate",
      tags: ["Web Dev", "JavaScript"],
      description:
        "Learn how to increase engagement in modern web applications using cutting-edge tools and frameworks.",
      engagement: 85,
      isAttending: true,
    },
    {
      id: 2,
      title: "Scalable API Design Patterns",
      speaker: "Mike Rodriguez",
      company: "StartupX",
      time: "2:00 PM - 3:30 PM",
      location: "Room B",
      attendees: 89,
      capacity: 150,
      status: "upcoming",
      difficulty: "Advanced",
      tags: ["API", "Backend", "Architecture"],
      description:
        "Master the art of designing APIs that can scale to millions of users while maintaining performance.",
      engagement: 0,
      isAttending: false,
    },
    {
      id: 3,
      title: "React Performance Optimization",
      speaker: "Alex Kim",
      company: "ReactCorp",
      time: "4:30 PM - 6:00 PM",
      location: "Workshop Room",
      attendees: 67,
      capacity: 80,
      status: "upcoming",
      difficulty: "Intermediate",
      tags: ["React", "Performance", "Frontend"],
      description:
        "Deep dive into React performance optimization techniques and best practices for large-scale applications.",
      engagement: 0,
      isAttending: true,
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      speaker: "Dr. Lisa Wang",
      company: "AI Institute",
      time: "Yesterday, 2:00 PM",
      location: "Main Hall",
      attendees: 180,
      capacity: 200,
      status: "completed",
      difficulty: "Beginner",
      tags: ["ML", "Python", "Data Science"],
      description:
        "A comprehensive introduction to machine learning concepts and practical applications.",
      engagement: 92,
      isAttending: true,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-red-500";
      case "upcoming":
        return "bg-accent-orange";
      case "completed":
        return "bg-primary";
      default:
        return "bg-muted";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500";
      case "Intermediate":
        return "bg-accent-orange";
      case "Advanced":
        return "bg-red-500";
      default:
        return "bg-muted";
    }
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
            Sessions
          </h1>
          <p className="text-muted-foreground">
            Discover, attend, and engage with hackathon sessions
          </p>
        </div>
        <Button className="gradient-primary">
          <Calendar className="w-4 h-4 mr-2" />
          View Schedule
        </Button>
      </motion.div>

      {/* Sessions Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {sessions.map((session, index) => (
          <motion.div
            key={session.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card-interactive h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        className={getStatusColor(session.status)}
                        variant="secondary"
                      >
                        {session.status === "live" && (
                          <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                        )}
                        {session.status.charAt(0).toUpperCase() +
                          session.status.slice(1)}
                      </Badge>
                      <Badge
                        className={getDifficultyColor(session.difficulty)}
                        variant="secondary"
                      >
                        {session.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {session.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {session.speaker}
                      </div>
                      <span className="text-primary">{session.company}</span>
                    </div>
                  </div>
                  {session.isAttending && (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {session.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {session.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-blue" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-purple" />
                    <span>{session.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent-orange" />
                    <span>
                      {session.attendees}/{session.capacity}
                    </span>
                  </div>
                  {session.engagement > 0 && (
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>{session.engagement}% engagement</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Capacity</span>
                    <span>
                      {Math.round((session.attendees / session.capacity) * 100)}
                      %
                    </span>
                  </div>
                  <Progress
                    value={(session.attendees / session.capacity) * 100}
                    className="h-2"
                  />
                </div>

                {session.engagement > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Your Engagement</span>
                      <span className="text-primary font-semibold">
                        {session.engagement}%
                      </span>
                    </div>
                    <Progress value={session.engagement} className="h-2" />
                  </div>
                )}

                <div className="flex items-center gap-2 pt-4">
                  {session.status === "live" ? (
                    <Button className="flex-1 bg-red-500 hover:bg-red-600">
                      <Play className="w-4 h-4 mr-2" />
                      Join Live
                    </Button>
                  ) : session.status === "upcoming" ? (
                    <Button
                      variant={session.isAttending ? "outline" : "default"}
                      className="flex-1"
                    >
                      {session.isAttending ? "Attending" : "Register"}
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1">
                      View Recording
                    </Button>
                  )}

                  {session.status !== "live" && (
                    <Button variant="ghost" size="icon">
                      <Star className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
