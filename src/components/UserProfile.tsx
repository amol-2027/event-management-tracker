import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, User, LogOut, Trophy } from "lucide-react";

export function UserProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-12 w-12 rounded-full">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
              <AvatarImage src="/placeholder.svg" alt="Priya Sharma" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                PS
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 -right-1">
              <Badge className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5">
                #12
              </Badge>
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-64 glass-card" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" alt="Priya Sharma" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    PS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    Priya Sharma
                  </p>
                  <p className="text-xs leading-none text-muted-foreground mt-1">
                    priya.sharma@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground gap-1">
                  <Trophy className="w-3 h-3" />
                  Elite
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  847 points
                </Badge>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer gap-2">
            <User className="w-4 h-4" />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer gap-2">
            <Settings className="w-4 h-4" />
            Settings
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer gap-2 text-red-400 hover:text-red-300">
            <LogOut className="w-4 h-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
