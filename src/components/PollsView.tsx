import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  Users,
  Clock,
  Send,
  ThumbsUp,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
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

export function PollsView() {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);
  const [question, setQuestion] = useState("");

  const activePoll = {
    id: "poll-1",
    title: "Which frontend framework do you prefer for hackathons?",
    session: "Building Engaging Web Applications",
    timeLeft: "2:45",
    totalVotes: 156,
    options: [
      { id: "react", label: "React", votes: 89, percentage: 57 },
      { id: "vue", label: "Vue.js", votes: 34, percentage: 22 },
      { id: "angular", label: "Angular", votes: 18, percentage: 12 },
      { id: "svelte", label: "Svelte", votes: 15, percentage: 9 },
    ],
    hasVoted: false,
  };

  const recentPolls = [
    {
      id: "poll-2",
      title: "What is your biggest challenge in API development?",
      session: "Scalable API Design Patterns",
      status: "completed",
      yourAnswer: "Scalability",
      totalVotes: 203,
    },
    {
      id: "poll-3",
      title: "Rate the session difficulty",
      session: "React Performance Optimization",
      status: "completed",
      yourAnswer: "Just Right",
      totalVotes: 89,
    },
  ];

  const qaPairs = [
    {
      id: "qa-1",
      question:
        "How do you handle state management in large React applications?",
      askedBy: "Alex K.",
      session: "React Performance Optimization",
      votes: 15,
      hasAnswer: true,
      timestamp: "5 min ago",
    },
    {
      id: "qa-2",
      question: "What are the best practices for API versioning?",
      askedBy: "You",
      session: "Scalable API Design Patterns",
      votes: 8,
      hasAnswer: false,
      timestamp: "12 min ago",
    },
    {
      id: "qa-3",
      question: "How to optimize bundle size in modern web apps?",
      askedBy: "Maria S.",
      session: "Building Engaging Web Applications",
      votes: 23,
      hasAnswer: true,
      timestamp: "1 hour ago",
    },
  ];

  const handleVote = (optionId: string) => {
    setSelectedPoll(optionId);
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
            Polls & Q&A
          </h1>
          <p className="text-muted-foreground">
            Participate in live polls and ask questions to speakers
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-red-500" variant="secondary">
            <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
            2 Live Polls
          </Badge>
        </div>
      </motion.div>

      {/* Active Poll */}
      <motion.div variants={itemVariants}>
        <Card className="glass-card border-primary/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">{activePoll.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge className="bg-red-500" variant="secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  {activePoll.timeLeft}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Session: {activePoll.session} • {activePoll.totalVotes} votes
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            {activePoll.options.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                  selectedPoll === option.id
                    ? "border-primary bg-primary/10"
                    : "border-white/10 hover:border-white/20 hover:bg-card/50"
                }`}
                onClick={() => handleVote(option.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{option.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {option.votes} votes
                    </span>
                    {selectedPoll === option.id && (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <Progress value={option.percentage} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{option.percentage}%</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <Button
              className="w-full gradient-primary"
              disabled={!selectedPoll}
            >
              Submit Vote
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Grid Layout for Q&A and Recent Polls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ask Question */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Ask a Question
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Ask your question to the speaker..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="min-h-[100px] bg-background/50"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {question.length}/500 characters
                </span>
                <Button className="gap-2" disabled={!question.trim()}>
                  <Send className="w-4 h-4" />
                  Ask Question
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Polls */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent-blue" />
                Recent Polls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPolls.map((poll) => (
                <div
                  key={poll.id}
                  className="p-3 rounded-lg border border-white/10 hover:bg-card/50 transition-all duration-300"
                >
                  <h4 className="font-medium mb-1">{poll.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {poll.session}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Your answer: {poll.yourAnswer}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-3 h-3" />
                      {poll.totalVotes}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Q&A Feed */}
      <motion.div variants={itemVariants}>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-accent-purple" />
              Q&A Feed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {qaPairs.map((qa) => (
              <motion.div
                key={qa.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-lg border border-white/10 hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{qa.question}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Asked by {qa.askedBy}</span>
                      <span>{qa.session}</span>
                      <span>{qa.timestamp}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {qa.hasAnswer ? (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-accent-orange" />
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    {qa.votes}
                  </Button>
                  <Badge variant={qa.hasAnswer ? "default" : "secondary"}>
                    {qa.hasAnswer ? "Answered" : "Pending"}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
