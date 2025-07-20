import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Download,
  FileText,
  Video,
  Code,
  Search,
  ExternalLink,
  Bookmark,
  Star,
  Clock,
  User,
  Tag,
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

export function ResourcesView() {
  const resources = [
    {
      id: 1,
      title: "Web Development Engagement Guide",
      description:
        "Complete guide to increasing engagement in modern web applications",
      type: "PDF",
      size: "2.3 MB",
      downloads: 156,
      session: "Building Engaging Web Applications",
      speaker: "Sarah Chen",
      uploadedAt: "2 hours ago",
      tags: ["Web Dev", "JavaScript"],
      rating: 4.8,
      isBookmarked: true,
      isDownloaded: true,
    },
    {
      id: 2,
      title: "API Design Patterns Slides",
      description:
        "Presentation slides covering scalable API design patterns and best practices",
      type: "PDF",
      size: "5.1 MB",
      downloads: 89,
      session: "Scalable API Design Patterns",
      speaker: "Mike Rodriguez",
      uploadedAt: "5 hours ago",
      tags: ["API", "Backend", "Architecture"],
      rating: 4.6,
      isBookmarked: false,
      isDownloaded: false,
    },
    {
      id: 3,
      title: "React Performance Code Examples",
      description:
        "Source code and examples for React performance optimization techniques",
      type: "ZIP",
      size: "1.8 MB",
      downloads: 67,
      session: "React Performance Optimization",
      speaker: "Alex Kim",
      uploadedAt: "1 day ago",
      tags: ["React", "Performance", "Frontend"],
      rating: 4.9,
      isBookmarked: true,
      isDownloaded: true,
    },
    {
      id: 4,
      title: "Session Recording: Introduction to ML",
      description: "Full session recording with Q&A segment included",
      type: "Video",
      size: "125 MB",
      downloads: 234,
      session: "Introduction to Machine Learning",
      speaker: "Dr. Lisa Wang",
      uploadedAt: "1 day ago",
      tags: ["ML", "Python", "Data Science"],
      rating: 4.7,
      isBookmarked: false,
      isDownloaded: false,
    },
    {
      id: 5,
      title: "Hackathon Starter Kit",
      description:
        "Complete boilerplate code and resources for hackathon projects",
      type: "ZIP",
      size: "12.5 MB",
      downloads: 345,
      session: "General Resources",
      speaker: "Event Organizers",
      uploadedAt: "3 days ago",
      tags: ["Hackathon", "Starter", "Tools"],
      rating: 4.8,
      isBookmarked: true,
      isDownloaded: false,
    },
    {
      id: 6,
      title: "Database Design Cheat Sheet",
      description:
        "Quick reference guide for database design principles and patterns",
      type: "PDF",
      size: "0.8 MB",
      downloads: 178,
      session: "Database Fundamentals",
      speaker: "Elena Rodriguez",
      uploadedAt: "4 days ago",
      tags: ["Database", "SQL", "Design"],
      rating: 4.5,
      isBookmarked: false,
      isDownloaded: true,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return <FileText className="w-5 h-5 text-red-500" />;
      case "video":
        return <Video className="w-5 h-5 text-blue-500" />;
      case "zip":
        return <Code className="w-5 h-5 text-green-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "pdf":
        return "bg-red-500";
      case "video":
        return "bg-blue-500";
      case "zip":
        return "bg-green-500";
      default:
        return "bg-gray-500";
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
            Resources
          </h1>
          <p className="text-muted-foreground">
            Download session materials, code examples, and recordings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              className="w-64 pl-10 bg-background/50"
            />
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Download className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm text-muted-foreground">Downloaded</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Bookmark className="w-8 h-8 text-accent-orange" />
              <div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">Bookmarked</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-accent-blue" />
              <div>
                <div className="text-2xl font-bold">47</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-accent-purple" />
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Recordings</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Resources Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {resources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card-interactive h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="flex-shrink-0">
                      {getTypeIcon(resource.type)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        {resource.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {resource.speaker}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {resource.uploadedAt}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      className={getTypeColor(resource.type)}
                      variant="secondary"
                    >
                      {resource.type}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={
                        resource.isBookmarked
                          ? "text-accent-orange"
                          : "text-muted-foreground"
                      }
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">
                      Size: {resource.size}
                    </span>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-primary" />
                      <span>{resource.downloads} downloads</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{resource.rating}</span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  From: {resource.session}
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    className={`flex-1 ${
                      resource.isDownloaded
                        ? "variant-outline"
                        : "gradient-primary"
                    }`}
                    variant={resource.isDownloaded ? "outline" : "default"}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {resource.isDownloaded ? "Downloaded" : "Download"}
                  </Button>

                  {resource.type === "Video" && (
                    <Button variant="outline" size="icon">
                      <ExternalLink className="w-4 h-4" />
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
