import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import Tracker from "./pages/Tracker";
import Quotes from "./pages/Quotes";
import Challenges from "./pages/Challenges";
import Tasks from "./pages/Tasks";
import Community from "./pages/Community";
import Mood from "./pages/Mood";
import Growth from "./pages/Growth";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "@/components/mind2care/Header";
import Footer from "@/components/mind2care/Footer";
import Sidebar from "@/components/mind2care/Sidebar";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div id="top" />
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/community" element={<Community />} />
            <Route path="/mood" element={<Mood />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
