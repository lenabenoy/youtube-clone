"use client";
import React, { useState } from 'react';
import { 
  Menu, Search, Mic, Video, Bell, Home, Compass, PlaySquare, 
  Clock, ThumbsUp, Flame, Music2, Gamepad2, Newspaper, 
  Trophy, Lightbulb, Shirt, Settings, Flag, HelpCircle, 
  MessageSquare, CheckCircle2, X 
} from 'lucide-react';

// Real-world specific video content data
const MOCK_VIDEOS = [
  {
    id: "d_HAXvK-Nnc", // Real YouTube video IDs for embed stability
    title: "MKBHD - Apple Vision Pro 2 Review: The Future Is Here",
    channel: "Marques Brownlee",
    verified: true,
    views: "2.4M views",
    time: "9 hours ago",
    duration: "18:42",
    thumbnail: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
  },
  {
    id: "Ke90Tje7VS0",
    title: "Next.js Production Architecture Blueprint for 2026",
    channel: "JavaScript Mastery",
    verified: true,
    views: "410K views",
    time: "3 days ago",
    duration: "1:12:05",
    thumbnail: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
  },
  {
    id: "jfKfPfyJRdk",
    title: "lofi hip hop radio 🌌 beats to relax/study to",
    channel: "Lofi Girl",
    verified: true,
    views: "142M views",
    time: "Live streams",
    duration: "LIVE",
    thumbnail: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=60"
  },
  {
    id: "RGoJz5T6t68",
    title: "How Space X Starship Will Land Humans On Mars",
    channel: "NASASpaceflight",
    verified: false,
    views: "932K views",
    time: "1 week ago",
    duration: "22:10",
    thumbnail: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60"
  },
  {
    id: "U7m070eW_zE",
    title: "The Ultimate $10,000 Desk Setup Transformation",
    channel: "Peter McKinnon",
    verified: true,
    views: "1.8M views",
    time: "5 days ago",
    duration: "13:15",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60"
  },
  {
    id: "Ar91t_J8KRE",
    title: "Gordon Ramsay Cooked Me The Best Steak Ever",
    channel: "MrBeast",
    verified: true,
    views: "46M views",
    time: "2 weeks ago",
    duration: "15:40",
    thumbnail: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
  },
  {
    id: "t7n7E0R6_xY",
    title: "Inside Tokyo's Most Micro Capsule Hotel ($12/Night)",
    channel: "Exploring With Josh",
    verified: false,
    views: "620K views",
    time: "1 month ago",
    duration: "24:50",
    thumbnail: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=60"
  },
  {
    id: "w7zH_X9kFm0",
    title: "Building an Enterprise SaaS App From Scratch (Next.js 16)",
    channel: "CodeCraft Labs",
    verified: true,
    views: "185K views",
    time: "4 days ago",
    duration: "3:45:00",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=80",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
  }
];

const CATEGORIES = ["All", "JavaScript", "Next.js", "Live", "Music", "Gaming", "Podcasts", "Tech", "Cooking", "Gadgets", "Travel", "Web Design"];

export default function YouTubeClone() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null); // Keeps track of what video is currently playing

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f1f1f1] font-sans antialiased selection:bg-neutral-700">
      
      {/* 1. NAVBAR WITH REAL OFFICIAL LOGO */}
      <nav className="fixed top-0 left-0 right-0 h-14 bg-[#0f0f0f] flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 shortcuts-hover hover:bg-[#272727] active:bg-[#3f3f3f] rounded-full transition-colors duration-150"
          >
            <Menu className="w-5 h-5 stroke-[1.8]" />
          </button>
          
          {/* Precise YouTube SVG Brand Logo Path */}
          <div className="flex items-center pl-2 cursor-pointer select-none" onClick={() => setActiveVideo(null)}>
            <svg viewBox="0 0 200 60" className="w-[100px] h-14 fill-white">
              <g>
                <path fill="#FF0000" d="M63,14.8c-0.7-2.6-2.7-4.7-5.3-5.4C53,8,33,8,33,8s-20,0-24.7,1.3c-2.6,0.7-4.7,2.7-5.3,5.4C1.7,19.5,1.7,29.7,1.7,29.7s0,10.2,1.3,14.9c0.7,2.6,2.7,4.7,5.3,5.4C13,51.3,33,51.3,33,51.3s20,0,24.7-1.3c2.6-0.7,4.6-2.7,5.3-5.4C64.3,39.9,64.3,29.7,64.3,29.7S64.3,19.5,63,14.8z"/>
                <polygon fill="#FFFFFF" points="26.7,39 43,29.7 26.7,20.3"/>
              </g>
              <g className="font-semibold text-[32px] tracking-tighter">
                <text x="72" y="41" fill="currentColor" letterSpacing="-1.5">YouTube</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Center Search Elements */}
        <div className="flex flex-1 max-w-[640px] items-center gap-4 mx-4">
          <div className="flex w-full bg-[#121212] border border-[#303030] rounded-full overflow-hidden focus-within:border-[#1c62b9] focus-within:ml-0 pl-1">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-transparent px-4 py-2 outline-none text-base font-normal text-white placeholder-neutral-400"
            />
            <button className="bg-[#222222] px-6 border-l border-[#303030] hover:bg-[#272727] flex items-center justify-center cursor-pointer">
              <Search className="w-5 h-5 text-neutral-200 stroke-[1.5]" />
            </button>
          </div>
          <button className="p-2.5 bg-[#222222] hover:bg-[#272727] active:bg-[#3f3f3f] rounded-full hidden sm:block cursor-pointer transition-colors">
            <Mic className="w-5 h-5 stroke-[1.8]" />
          </button>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button className="p-2.5 hover:bg-[#272727] rounded-full hidden sm:block cursor-pointer"><Video className="w-5 h-5 stroke-[1.8]" /></button>
          <button className="p-2.5 hover:bg-[#272727] rounded-full hidden sm:block cursor-pointer relative">
            <Bell className="w-5 h-5 stroke-[1.8]" />
            <span className="absolute top-1 right-1 bg-red-600 text-white font-medium text-[10px] px-1 rounded-full scale-90">9+</span>
          </button>
          <button className="ml-1 w-8 h-8 rounded-full overflow-hidden border border-neutral-700 bg-neutral-800 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </nav>

      <div className="flex pt-14">
        
        {/* 2. NAVIGATION SIDEBAR */}
        <aside className={`fixed left-0 top-14 h-[calc(100vh-56px)] bg-[#0f0f0f] overflow-y-auto pb-4 transition-all duration-150 z-40 no-scrollbar
          ${isSidebarOpen ? 'w-60 px-3 hidden md:block' : 'w-18 px-1 hidden lg:block'}`}>
          
          {isSidebarOpen ? (
            <div className="space-y-0.5 pt-3">
              <SidebarItem icon={<Home className="w-5 h-5 fill-white text-white" />} label="Home" active />
              <SidebarItem icon={<Compass className="w-5 h-5" />} label="Shorts" />
              <SidebarItem icon={<PlaySquare className="w-5 h-5" />} label="Subscriptions" />
              <hr className="border-neutral-800 my-3" />
              <h3 className="px-3 text-sm font-semibold text-neutral-200 mb-1">You</h3>
              <SidebarItem icon={<Clock className="w-5 h-5" />} label="History" />
              <SidebarItem icon={<PlaySquare className="w-5 h-5" />} label="Your Videos" />
              <SidebarItem icon={<Clock className="w-5 h-5" />} label="Watch Later" />
              <SidebarItem icon={<ThumbsUp className="w-5 h-5" />} label="Liked Videos" />
              <hr className="border-neutral-800 my-3" />
              <h3 className="px-3 text-sm font-semibold text-neutral-200 mb-1">Explore</h3>
              <SidebarItem icon={<Flame className="w-5 h-5" />} label="Trending" />
              <SidebarItem icon={<Music2 className="w-5 h-5" />} label="Music" />
              <SidebarItem icon={<Gamepad2 className="w-5 h-5" />} label="Gaming" />
              <SidebarItem icon={<Newspaper className="w-5 h-5" />} label="News" />
              <SidebarItem icon={<Trophy className="w-5 h-5" />} label="Sports" />
              <SidebarItem icon={<Lightbulb className="w-5 h-5" />} label="Courses" />
              <SidebarItem icon={<Shirt className="w-5 h-5" />} label="Fashion & Beauty" />
              <hr className="border-neutral-800 my-3" />
              <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
              <SidebarItem icon={<Flag className="w-5 h-5" />} label="Report history" />
              <SidebarItem icon={<HelpCircle className="w-5 h-5" />} label="Help" />
              <SidebarItem icon={<MessageSquare className="w-5 h-5" />} label="Send feedback" />
            </div>
          ) : (
            <div className="space-y-1 pt-1 flex flex-col items-center">
              <MiniSidebarItem icon={<Home className="w-[22px] h-[22px] fill-white text-white" />} label="Home" />
              <MiniSidebarItem icon={<Compass className="w-[22px] h-[22px]" />} label="Shorts" />
              <MiniSidebarItem icon={<PlaySquare className="w-[22px] h-[22px]" />} label="Subs" />
              <MiniSidebarItem icon={<Clock className="w-[22px] h-[22px]" />} label="You" />
            </div>
          )}
        </aside>

        {/* 3. DYNAMIC WORKSPACE CONTENT */}
        <main className={`flex-1 min-h-screen bg-[#0f0f0f] transition-all duration-150
          ${isSidebarOpen ? 'md:ml-60' : 'lg:ml-18'}`}>
          
          {/* THEATRE MODE VIDEO PLAYER PORTAL */}
          {activeVideo && (
            <div className="bg-black w-full px-4 md:px-12 py-4 border-b border-neutral-800 animate-fadeIn">
              <div className="max-w-[1280px] mx-auto">
                {/* 16:9 Aspect Frame container */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  ></iframe>
                </div>
                {/* Embedded Video Metadata description context info */}
                <div className="flex justify-between items-start mt-4 gap-4">
                  <div>
                    <h1 className="text-xl font-bold text-white leading-snug">{activeVideo.title}</h1>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={activeVideo.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <div className="flex items-center gap-1 font-semibold text-white">
                          <span>{activeVideo.channel}</span>
                          {activeVideo.verified && <CheckCircle2 className="w-4 h-4 fill-neutral-400 text-black" />}
                        </div>
                        <p className="text-xs text-neutral-400">{activeVideo.views} • {activeVideo.time}</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Top Categories Navigation Filters */}
          <div className="sticky top-14 bg-[#0f0f0f] z-30 py-3 px-6 flex gap-3 overflow-x-auto no-scrollbar whitespace-nowrap">
            {CATEGORIES.map((cat, idx) => (
              <button 
                key={idx} 
                className={`px-3 py-1.5 text-sm font-medium rounded-lg cursor-pointer transition-colors duration-150 select-none
                  ${idx === 0 ? 'bg-[#f1f1f1] text-[#0f0f0f]' : 'bg-[#222222] hover:bg-[#272727] text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRID RENDER BLOCKS */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
            {MOCK_VIDEOS.map((video, index) => (
              <div 
                key={index} 
                onClick={() => {
                  setActiveVideo(video);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex flex-col gap-3 cursor-pointer group"
              >
                {/* Interactive Grid Thumbnail Display */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-800 select-none shadow-md">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="object-cover w-full h-full group-hover:scale-[1.02] transition-all duration-200"
                  />
                  <span className={`absolute bottom-2 right-2 text-xs px-1.5 py-0.5 rounded font-semibold tracking-wide
                    ${video.duration === 'LIVE' ? 'bg-red-600 text-white font-bold' : 'bg-black/80 text-white'}`}>
                    {video.duration}
                  </span>
                </div>
                
                {/* Meta Description Context Block */}
                <div className="flex gap-3 px-1">
                  <img src={video.avatar} alt="Avatar" className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                  <div className="flex flex-col">
                    <h3 className="text-[15px] font-semibold text-[#f1f1f1] line-clamp-2 leading-tight tracking-normal pr-2 group-hover:text-neutral-200">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[14px] text-neutral-400 mt-1.5 hover:text-[#f1f1f1] transition-colors">
                      <span>{video.channel}</span>
                      {video.verified && <CheckCircle2 className="w-3.5 h-3.5 fill-neutral-400 text-[#0f0f0f]" />}
                    </div>
                    <p className="text-[14px] text-neutral-400 mt-0.5 font-normal">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <button className={`w-full flex items-center gap-6 px-3 py-2 rounded-xl text-[14px] font-normal transition-colors duration-100 cursor-pointer
      ${active ? 'bg-[#222222] font-medium text-white' : 'hover:bg-[#272727] text-[#f1f1f1]'}`}>
      {icon}
      <span className="truncate tracking-normal">{label}</span>
    </button>
  );
}

function MiniSidebarItem({ icon, label }) {
  return (
    <button className="w-full flex flex-col items-center justify-center py-4 rounded-xl hover:bg-[#272727] transition-colors duration-100 cursor-pointer text-[#f1f1f1]">
      {icon}
      <span className="text-[10px] mt-1.5 font-normal tracking-wide">{label}</span>
    </button>
  );
}
