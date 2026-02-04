import React from "react";
import { Anchor, Heart, Users, Sprout, Star, BookOpen, RefreshCw, Wind, Volume2, Flame, Music, Palette, Baby, Dumbbell, Footprints, ArrowUpDown, Puzzle, HandHeart, Droplets, Apple, Moon, HandHelping, Zap, VolumeX, Gamepad2, MessageCircle, TreePine, Eye, Hand, Ear, Flower2, Cookie, Smile, Frown, Angry, AlertCircle, ThumbsUp, Meh, BedDouble, HeartCrack, ShieldAlert, Sparkles, HelpCircle, CloudSun, PenTool, MessageSquare, TreeDeciduous, Grip, PiggyBank } from "lucide-react";
import { faithImageMap } from "./ComparisonImage";
import logoImage from "@/assets/logo.jpg";

interface MantraVisualProps {
  mantraId: string;
}

const MantraVisual = ({ mantraId }: MantraVisualProps) => {
  if (mantraId === "validate-connect-redirect") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-4xl">
          {/* Step 1: Validate */}
          <div className="flex-1 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 shadow-md border-2 border-rose-200 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-rose-200 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-rose-700 mb-2">1. VALIDATE</h3>
            <p className="text-rose-600 text-sm italic">"I see you're upset. That makes sense."</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-4xl text-muted-foreground">→</div>
          <div className="md:hidden text-4xl text-muted-foreground">↓</div>

          {/* Step 2: Connect */}
          <div className="flex-1 bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-6 shadow-md border-2 border-sky-200 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-sky-200 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-sky-700 mb-2">2. CONNECT</h3>
            <p className="text-sky-600 text-sm italic">Get on their level. Be present.</p>
          </div>

          {/* Arrow */}
          <div className="hidden md:block text-4xl text-muted-foreground">→</div>
          <div className="md:hidden text-4xl text-muted-foreground">↓</div>

          {/* Step 3: Redirect */}
          <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 shadow-md border-2 border-emerald-200 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-emerald-200 rounded-full flex items-center justify-center">
              <Sprout className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-emerald-700 mb-2">3. REDIRECT</h3>
            <p className="text-emerald-600 text-sm italic">"Let's figure this out together."</p>
          </div>
        </div>
        
        {/* Faith Element */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 rounded-2xl p-6 border-2 border-amber-200 max-w-2xl w-full">
          <div className="flex items-center gap-4">
            <img 
              src={faithImageMap["jesus-foundation"]} 
              alt="Jesus with children" 
              className="w-24 h-24 rounded-full object-cover border-4 border-amber-300 shadow-lg"
            />
            <div className="flex-1">
              <p className="text-amber-800 font-serif text-lg italic">
                "Be completely humble and gentle; be patient, bearing with one another in love."
              </p>
              <p className="text-amber-600 text-sm mt-2 font-medium">— Ephesians 4:2</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "anchoring") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-600 rounded-full flex items-center justify-center border-4 border-slate-500">
            <Anchor className="w-12 h-12 text-slate-200" />
          </div>
          <h3 className="font-serif text-4xl font-bold text-white mb-4 tracking-wide">ANCHORING</h3>
          <div className="w-16 h-1 bg-slate-500 mx-auto mb-6" />
          <p className="text-slate-300 text-xl italic mb-6">"Your calm is their anchor"</p>
          <div className="space-y-3 text-left bg-slate-800/50 rounded-xl p-6">
            <p className="text-slate-200 flex items-center gap-3">
              <span className="text-2xl">🧘</span> Pause before responding
            </p>
            <p className="text-slate-200 flex items-center gap-3">
              <span className="text-2xl">🌊</span> Breathe through the storm
            </p>
            <p className="text-slate-200 flex items-center gap-3">
              <span className="text-2xl">⚓</span> Stay grounded in love
            </p>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-6 border-t border-slate-600">
            <div className="flex items-center gap-4 bg-slate-800/70 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-anchoring"]} 
                alt="Jesus calming the storm" 
                className="w-20 h-20 rounded-full object-cover border-3 border-slate-400 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-slate-200 font-serif text-sm italic">
                  "Peace, be still."
                </p>
                <p className="text-slate-400 text-xs mt-1">— Mark 4:39</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "validation") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-serif text-4xl font-bold text-white mb-4 tracking-wide">VALIDATION</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-6" />
          <p className="text-white/90 text-xl italic mb-6">"See their heart first"</p>
          <div className="space-y-3 text-left bg-white/20 rounded-xl p-6">
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">👀</span> "I see you..."
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">💭</span> "That makes sense..."
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🤗</span> "I'm here with you..."
            </p>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-6 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-validation"]} 
                alt="Jesus with compassion" 
                className="w-20 h-20 rounded-full object-cover border-3 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "Jesus wept."
                </p>
                <p className="text-white/70 text-xs mt-1">— John 11:35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "connection") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-3xl p-8 shadow-2xl text-center max-w-3xl w-full">
          {/* Title */}
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">CONNECTION</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-6" />
          
          {/* Flow Visual: Connect → God → Connect → Kid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            {/* Parent/You */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/40 shadow-lg">
                <span className="text-3xl">🙏</span>
              </div>
              <p className="text-white font-bold mt-2 text-sm">YOU</p>
            </div>
            
            {/* Arrow + Connect */}
            <div className="flex flex-col items-center">
              <div className="hidden md:block text-white text-3xl font-bold">→</div>
              <div className="md:hidden text-white text-3xl font-bold">↓</div>
              <p className="text-white/80 text-xs font-medium">CONNECT</p>
            </div>
            
            {/* God */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                <img 
                  src={faithImageMap["jesus-connection"]} 
                  alt="God" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="text-white font-bold mt-2 text-sm">GOD</p>
            </div>
            
            {/* Arrow + Connect */}
            <div className="flex flex-col items-center">
              <div className="hidden md:block text-white text-3xl font-bold">→</div>
              <div className="md:hidden text-white text-3xl font-bold">↓</div>
              <p className="text-white/80 text-xs font-medium">CONNECT</p>
            </div>
            
            {/* Kid */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/40 shadow-lg">
                <span className="text-3xl">👧</span>
              </div>
              <p className="text-white font-bold mt-2 text-sm">KID</p>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-white/90 text-lg italic mb-6">"Fill your cup first, then pour into theirs"</p>
          
          {/* Two-column tips */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Connect with God */}
            <div className="bg-white/20 rounded-xl p-4 text-left">
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">✨</span> Connect with God
              </h4>
              <div className="space-y-2">
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🙏</span> Pause & pray first
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>📖</span> Ground in His Word
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>💪</span> Draw from His strength
                </p>
              </div>
            </div>
            
            {/* Connect with Kid */}
            <div className="bg-white/20 rounded-xl p-4 text-left">
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-xl">💕</span> Connect with Kid
              </h4>
              <div className="space-y-2">
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>👁️</span> Eye contact
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🧎</span> Get on their level
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🎯</span> Be fully present
                </p>
              </div>
            </div>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-6 border-t border-white/30">
            <p className="text-white font-serif text-lg italic">
              "Let the little children come to me."
            </p>
            <p className="text-white/70 text-sm mt-1">— Matthew 19:14</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "grow") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <Sprout className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-serif text-4xl font-bold text-white mb-4 tracking-wide">GROW</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-6" />
          <p className="text-white/90 text-xl italic mb-6">"Encourage the process"</p>
          <div className="space-y-3 text-left bg-white/20 rounded-xl p-6">
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🌱</span> Notice effort, not just results
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">💪</span> "You worked so hard!"
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🎉</span> Celebrate small wins
            </p>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-6 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-grow"]} 
                alt="Growth and nurturing" 
                className="w-20 h-20 rounded-full object-cover border-3 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "Train up a child in the way he should go."
                </p>
                <p className="text-white/70 text-xs mt-1">— Proverbs 22:6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "empower") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <Star className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-serif text-4xl font-bold text-white mb-4 tracking-wide">EMPOWER</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-6" />
          <p className="text-white/90 text-xl italic mb-6">"Trust builds confidence"</p>
          <div className="space-y-3 text-left bg-white/20 rounded-xl p-6">
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🔑</span> Give age-appropriate choices
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🦅</span> Let them try (and fail)
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🌟</span> "I believe in you"
            </p>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-6 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-empower"]} 
                alt="Empowerment" 
                className="w-20 h-20 rounded-full object-cover border-3 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "I can do all things through Christ who strengthens me."
                </p>
                <p className="text-white/70 text-xs mt-1">— Philippians 4:13</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "correction") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-serif text-4xl font-bold text-white mb-4 tracking-wide">CORRECTION</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-6" />
          <p className="text-white/90 text-xl italic mb-6">"Teach, don't punish"</p>
          <div className="space-y-3 text-left bg-white/20 rounded-xl p-6">
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">❓</span> "What happened?"
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">💡</span> "What can we learn?"
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🔄</span> "How can we make it right?"
            </p>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-6 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-correction"]} 
                alt="Gentle correction" 
                className="w-20 h-20 rounded-full object-cover border-3 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "Fathers, do not exasperate your children; bring them up in the training of the Lord."
                </p>
                <p className="text-white/70 text-xs mt-1">— Ephesians 6:4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "play") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-3xl p-8 shadow-2xl text-center max-w-4xl w-full">
          {/* Title */}
          <div className="text-6xl mb-2">🎮</div>
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">PLAY</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-xl italic mb-6">"If it's hard, make it fun!"</p>
          
          {/* Main concept */}
          <div className="bg-white/20 rounded-xl p-5 mb-6">
            <p className="text-white text-lg font-medium">
              Don't focus on leaving the fun thing—<br/>
              <span className="text-yellow-200 font-bold">make the NEXT thing just as exciting!</span>
            </p>
          </div>
          
          {/* Example scenarios */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Bath time */}
            <div className="bg-white/20 rounded-xl p-4 text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🛁</span>
                <h4 className="text-white font-bold">Bath Time Resistance?</h4>
              </div>
              <div className="space-y-2">
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>👁️</span> Play "I Spy" to the tub—pick items along the way!
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🐻</span> "What animal should we walk like to get there?"
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🏃</span> Race to see who can get there first!
                </p>
              </div>
            </div>
            
            {/* Leaving playground */}
            <div className="bg-white/20 rounded-xl p-4 text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🛝</span>
                <h4 className="text-white font-bold">Leaving the Playground?</h4>
              </div>
              <div className="space-y-2">
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🔑</span> "Want to be the car unlocker?"
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🎵</span> "You pick the song we listen to!"
                </p>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <span>🍎</span> "Let's pick a yummy snack for the ride!"
                </p>
              </div>
            </div>
          </div>
          
          {/* More ideas */}
          <div className="bg-white/15 rounded-xl p-4 mb-6">
            <h4 className="text-white font-bold text-lg mb-3">🌟 More Play Ideas</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center">
                <span className="text-2xl">🦁</span>
                <p className="text-white/90 text-xs mt-1">Walk like animals</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">🎯</span>
                <p className="text-white/90 text-xs mt-1">Silly challenges</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">⏱️</span>
                <p className="text-white/90 text-xs mt-1">Beat the timer</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">🎭</span>
                <p className="text-white/90 text-xs mt-1">Pretend play</p>
              </div>
            </div>
          </div>
          
          {/* Key reminder */}
          <div className="bg-yellow-400/30 rounded-xl p-4 border-2 border-yellow-300/50 mb-6">
            <p className="text-white font-bold text-lg">
              💡 The secret: Shift focus from what they're leaving<br/>
              <span className="text-yellow-200">TO what exciting thing comes next!</span>
            </p>
          </div>
          
          {/* Faith Element */}
          <div className="pt-4 border-t border-white/30">
            <p className="text-white font-serif text-lg italic">
              "A cheerful heart is good medicine."
            </p>
            <p className="text-white/70 text-sm mt-1">— Proverbs 17:22</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "good-choices-try-again") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl p-8 shadow-2xl text-center max-w-4xl w-full">
          {/* Title */}
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">GOOD CHOICES & TRY AGAIN</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-lg italic mb-6">"Every choice is a chance to learn"</p>
          
          {/* Three Jars Visual */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Good Choices Jar */}
            <div className="bg-white/20 rounded-2xl p-4 flex flex-col items-center">
              <div className="text-5xl mb-2">🫙</div>
              <div className="w-16 h-20 bg-gradient-to-t from-emerald-300 to-emerald-100 rounded-xl border-4 border-emerald-400 flex items-end justify-center overflow-hidden mb-2">
                <div className="flex flex-wrap gap-1 p-1 justify-center">
                  <span className="text-lg">🟢</span>
                  <span className="text-lg">🟢</span>
                  <span className="text-lg">🟢</span>
                </div>
              </div>
              <h4 className="text-white font-bold text-sm">GOOD CHOICES</h4>
              <p className="text-white/80 text-xs mt-1">Great decisions go here!</p>
            </div>
            
            {/* Try Again Jar */}
            <div className="bg-white/20 rounded-2xl p-4 flex flex-col items-center">
              <div className="text-5xl mb-2">🫙</div>
              <div className="w-16 h-20 bg-gradient-to-t from-amber-300 to-amber-100 rounded-xl border-4 border-amber-400 flex items-end justify-center overflow-hidden mb-2">
                <div className="flex flex-wrap gap-1 p-1 justify-center">
                  <span className="text-lg">🟡</span>
                </div>
              </div>
              <h4 className="text-white font-bold text-sm">TRY AGAIN</h4>
              <p className="text-white/80 text-xs mt-1">Learning moments</p>
            </div>
            
            {/* Reward Counter */}
            <div className="bg-white/20 rounded-2xl p-4 flex flex-col items-center">
              <div className="text-5xl mb-2">🎁</div>
              <div className="w-16 h-20 bg-gradient-to-t from-purple-300 to-purple-100 rounded-xl border-4 border-purple-400 flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-purple-700">10</span>
              </div>
              <h4 className="text-white font-bold text-sm">REWARD!</h4>
              <p className="text-white/80 text-xs mt-1">Every 10 = prize!</p>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="bg-white/20 rounded-xl p-5 text-left mb-6">
            <h4 className="text-white font-bold text-lg mb-3 text-center">✨ How It Works</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xl bg-emerald-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">1</span>
                <p className="text-white text-sm"><strong>Good Choice:</strong> They add a puzzle piece/marble to the Good Choices jar 🎉</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl bg-amber-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">2</span>
                <p className="text-white text-sm"><strong>Not-So-Great Choice:</strong> Sit together, explain why, and put a piece in the Try Again jar</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl bg-teal-300 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">3</span>
                <p className="text-white text-sm"><strong>Make It Right:</strong> If they correct it, the piece moves to Good Choices! 🔄</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl bg-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold shrink-0">4</span>
                <p className="text-white text-sm"><strong>10 Good Choices = Reward!</strong> Pick dinner, treasure box prize, special activity 🌟</p>
              </div>
            </div>
          </div>
          
          {/* Reward Ideas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            <div className="bg-white/15 rounded-lg p-2 text-center">
              <span className="text-2xl">🍕</span>
              <p className="text-white/90 text-xs mt-1">Pick dinner</p>
            </div>
            <div className="bg-white/15 rounded-lg p-2 text-center">
              <span className="text-2xl">🎁</span>
              <p className="text-white/90 text-xs mt-1">Treasure box</p>
            </div>
            <div className="bg-white/15 rounded-lg p-2 text-center">
              <span className="text-2xl">🎮</span>
              <p className="text-white/90 text-xs mt-1">Extra play time</p>
            </div>
            <div className="bg-white/15 rounded-lg p-2 text-center">
              <span className="text-2xl">🎬</span>
              <p className="text-white/90 text-xs mt-1">Movie night</p>
            </div>
          </div>
          
          {/* Faith Element */}
          <div className="pt-4 border-t border-white/30">
            <p className="text-white font-serif text-lg italic">
              "Start children off on the way they should go, and even when they are old they will not turn from it."
            </p>
            <p className="text-white/70 text-sm mt-1">— Proverbs 22:6</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "one-more-opportunity") {
    return (
      <div className="my-6 flex flex-col items-center">
        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 shadow-2xl text-center max-w-xl w-full">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <RefreshCw className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">ONE MORE OPPORTUNITY</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          
          {/* Three Steps */}
          <div className="space-y-4 text-left">
            {/* Step 1 */}
            <div className="bg-white/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">REMIND or TEACH</h4>
                  <p className="text-white/90 text-sm italic">"We don't throw planes. We can throw balls, but not planes."</p>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">GIVE ONE MORE OPPORTUNITY</h4>
                  <p className="text-white/90 text-sm italic">"I'll give you one more opportunity to play with the plane without throwing it."</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">STATE THE CONSEQUENCE</h4>
                  <p className="text-white/90 text-sm italic">"If we can't do that right now, we'll take a break from the plane and try again tomorrow."</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-4 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-correction"]} 
                alt="Grace and second chances" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "His mercies are new every morning."
                </p>
                <p className="text-white/70 text-xs mt-1">— Lamentations 3:23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "repair") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 shadow-2xl text-center max-w-xl w-full">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">REPAIR</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-lg italic mb-6">"If we expect them to apologize, we must first model it"</p>
          
          {/* Key Message */}
          <div className="bg-white/20 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">💜</span> Why Repair Matters
            </h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>• Children learn how to apologize by watching YOU</p>
              <p>• Saying "I'm sorry" shows strength, not weakness</p>
              <p>• Repair builds trust and deepens connection</p>
              <p>• It teaches them it's okay to make mistakes</p>
            </div>
          </div>

          {/* How to Repair */}
          <div className="bg-white/20 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">🔧</span> How to Repair
            </h4>
            <div className="space-y-3">
              <p className="text-white/90 text-sm flex items-start gap-2">
                <span className="text-lg">1️⃣</span> <span><strong>Name it:</strong> "I raised my voice and that wasn't kind"</span>
              </p>
              <p className="text-white/90 text-sm flex items-start gap-2">
                <span className="text-lg">2️⃣</span> <span><strong>Own it:</strong> "I'm sorry. That was my mistake"</span>
              </p>
              <p className="text-white/90 text-sm flex items-start gap-2">
                <span className="text-lg">3️⃣</span> <span><strong>Reconnect:</strong> "I love you. Can I have a hug?"</span>
              </p>
            </div>
          </div>

          {/* God's Model */}
          <div className="bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded-xl p-5 text-left border border-amber-300/30">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">✨</span> God's Model
            </h4>
            <p className="text-white/90 text-sm mb-3">
              God is ALWAYS there for us. No matter how many times we fall, He welcomes us back with open arms. 
              He shows us what unconditional love looks like—and we get to model that same grace for our children.
            </p>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-4 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-validation"]} 
                alt="God's unfailing love" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "If we confess our sins, He is faithful and just to forgive us."
                </p>
                <p className="text-white/70 text-xs mt-1">— 1 John 1:9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "prep-your-child") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 shadow-2xl text-center max-w-xl w-full">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <span className="text-4xl">🗺️</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">PREP YOUR CHILD</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-lg italic mb-6">"Most kids don't like surprises—help them know what's coming"</p>
          
          {/* Why Prep Matters */}
          <div className="bg-white/20 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">💡</span> Why Prep Matters
            </h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>• Children feel safer when they know what to expect</p>
              <p>• Reduces anxiety about transitions</p>
              <p>• Sets clear expectations before challenges arise</p>
              <p>• Makes leaving easier by focusing on what's next</p>
            </div>
          </div>

          {/* Example 1: Playground */}
          <div className="bg-white/20 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">🛝</span> Going to the Playground
            </h4>
            <div className="bg-white/10 rounded-lg p-4 text-white/90 text-sm italic">
              <p>"We're going to the playground and we'll have a fun time there! We will be kind to new friends and take turns well with others.</p>
              <p className="mt-2">I'll let you pick what you'd like to do, and I'll give you a 5-minute warning when it's time to go.</p>
              <p className="mt-2">We'll leave with a fun and grateful heart for getting to go to the park. If we can't leave with ease, we'll need to take a break from the park for a while.</p>
              <p className="mt-2 font-semibold">Are you ready to go have fun?"</p>
            </div>
          </div>

          {/* Example 2: School Drop-off */}
          <div className="bg-white/20 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">🏫</span> School Drop-Off
            </h4>
            <div className="bg-white/10 rounded-lg p-4 text-white/90 text-sm italic">
              <p>"I'm going to drop you off and give you a big hug and a big kiss.</p>
              <p className="mt-2">It might be sad to say goodbye, and that's okay!</p>
              <p className="mt-2 font-semibold">But I will be back to pick you up with another big hug and kiss."</p>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white/20 rounded-xl p-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">✅</span> What to Include
            </h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>• <strong>What we'll do:</strong> The fun activity ahead</p>
              <p>• <strong>How we'll act:</strong> Expected behaviors</p>
              <p>• <strong>When it ends:</strong> Warnings and transitions</p>
              <p>• <strong>What's next:</strong> Make the next thing exciting too</p>
            </div>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-4 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-foundation"]} 
                alt="God prepares the way" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "I will instruct you and teach you in the way you should go."
                </p>
                <p className="text-white/70 text-xs mt-1">— Psalm 32:8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "your-25-year-old") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-slate-600 to-slate-800 rounded-3xl p-8 shadow-2xl text-center max-w-xl w-full">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-4 bg-amber-400 rounded-full flex items-center justify-center border-4 border-amber-300 shadow-lg">
            <span className="text-4xl">🎓</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">YOUR 25-YEAR-OLD CHILD</h3>
          <div className="w-16 h-1 bg-amber-400/50 mx-auto mb-4" />
          <p className="text-white/90 text-lg italic mb-6">"Natural consequences prepare them for real life"</p>
          
          {/* Why Natural Consequences */}
          <div className="bg-white/10 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-amber-300 font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">💡</span> Why Natural Consequences?
            </h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>• At 25, bosses don't give timeouts—they give real consequences</p>
              <p>• No promotion for poor attitudes, not a lecture</p>
              <p>• The world teaches through natural outcomes</p>
              <p>• Our job: let them experience cause & effect safely now</p>
            </div>
          </div>

          {/* Example 1: Jacket */}
          <div className="bg-white/10 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">🧥</span> "I Don't Want a Jacket"
            </h4>
            <div className="bg-white/10 rounded-lg p-4 text-white/90 text-sm">
              <p><strong>Child:</strong> "I don't need a jacket!"</p>
              <p className="mt-2"><strong>Parent:</strong> "Okay, that's your choice."</p>
              <p className="mt-2"><strong>Natural consequence:</strong> They feel cold outside.</p>
              <p className="mt-2 text-amber-300 italic">Tip: Bring the jacket anyway while they're young—they'll learn without suffering too much.</p>
            </div>
          </div>

          {/* Example 2: Playground */}
          <div className="bg-white/10 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">🛝</span> Leaving the Playground
            </h4>
            <div className="bg-white/10 rounded-lg p-4 text-white/90 text-sm">
              <p><strong>Situation:</strong> Can't leave with a good attitude</p>
              <p className="mt-2"><strong>Natural consequence:</strong> We take a break from the playground for a while.</p>
              <p className="mt-2 text-amber-300 italic">At 25: A bad attitude at work = no special opportunities, not a timeout.</p>
            </div>
          </div>

          {/* Real World vs Artificial */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-red-500/20 rounded-xl p-4 text-left border border-red-400/30">
              <h5 className="text-red-300 font-bold text-sm mb-2">❌ Artificial Punishment</h5>
              <div className="text-white/80 text-xs space-y-1">
                <p>• "Go to your room!"</p>
                <p>• "Think about what you did"</p>
                <p>• Unrelated to behavior</p>
              </div>
            </div>
            <div className="bg-green-500/20 rounded-xl p-4 text-left border border-green-400/30">
              <h5 className="text-green-300 font-bold text-sm mb-2">✅ Natural Consequence</h5>
              <div className="text-white/80 text-xs space-y-1">
                <p>• Cold without jacket</p>
                <p>• Break from activity</p>
                <p>• Directly related to choice</p>
              </div>
            </div>
          </div>
          
          {/* Faith Element */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-foundation"]} 
                alt="God uses natural consequences" 
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-300/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "A man reaps what he sows."
                </p>
                <p className="text-white/70 text-xs mt-1">— Galatians 6:7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "life-skills-not-chores") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-8 shadow-2xl text-center max-w-xl w-full">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg">
            <span className="text-4xl">🛠️</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-white mb-2 tracking-wide">LIFE SKILLS, NOT CHORES</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-lg italic mb-6">"We're not doing chores—we're learning to be capable adults"</p>
          
          {/* The Mindset Shift */}
          <div className="bg-white/20 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">💡</span> The Mindset Shift
            </h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>• I don't "do chores"—I have skills to take care of my home</p>
              <p>• These are tasks every adult needs to do to live independently</p>
              <p>• We're not punishing kids with work—we're teaching survival</p>
              <p>• Contributing builds confidence and capability</p>
            </div>
          </div>

          {/* Word Swap */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="bg-red-500/30 rounded-xl p-4 text-left border border-red-300/30">
              <h5 className="text-red-100 font-bold text-sm mb-2 flex items-center gap-2">
                <span>❌</span> Don't Say
              </h5>
              <div className="text-white/80 text-xs space-y-1">
                <p>"Do your chores"</p>
                <p>"You have to clean up"</p>
                <p>"It's your job"</p>
              </div>
            </div>
            <div className="bg-green-500/30 rounded-xl p-4 text-left border border-green-300/30">
              <h5 className="text-green-100 font-bold text-sm mb-2 flex items-center gap-2">
                <span>✅</span> Try Instead
              </h5>
              <div className="text-white/80 text-xs space-y-1">
                <p>"Let's practice this skill"</p>
                <p>"How can you contribute?"</p>
                <p>"You're learning to..."</p>
              </div>
            </div>
          </div>

          {/* Earning Example */}
          <div className="bg-white/20 rounded-xl p-5 mb-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">💰</span> When They Want Something
            </h4>
            <div className="bg-white/10 rounded-lg p-4 text-white/90 text-sm">
              <p><strong>Child:</strong> "Can I have [toy/game/item]?"</p>
              <p className="mt-2"><strong>Parent:</strong> "What can you contribute around the house to earn money for it?"</p>
              <p className="mt-2 text-amber-200 italic">This teaches: work → reward, the same as adult life!</p>
            </div>
          </div>

          {/* Skills List */}
          <div className="bg-white/20 rounded-xl p-5 text-left">
            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
              <span className="text-xl">📋</span> Life Skills to Learn
            </h4>
            <div className="grid grid-cols-2 gap-2 text-white/90 text-sm">
              <p>🍳 Cooking basics</p>
              <p>🧺 Laundry</p>
              <p>🧹 Cleaning spaces</p>
              <p>🛒 Grocery planning</p>
              <p>🌱 Yard care</p>
              <p>🔧 Basic repairs</p>
              <p>📊 Managing money</p>
              <p>📅 Time management</p>
            </div>
          </div>
          
          {/* Faith Element */}
          <div className="mt-6 pt-4 border-t border-white/30">
            <div className="flex items-center gap-4 bg-white/20 rounded-xl p-4">
              <img 
                src={faithImageMap["jesus-foundation"]} 
                alt="God equips us for work" 
                className="w-16 h-16 rounded-full object-cover border-2 border-white/50 shadow-lg"
              />
              <div className="flex-1 text-left">
                <p className="text-white font-serif text-sm italic">
                  "Whatever you do, work at it with all your heart, as working for the Lord."
                </p>
                <p className="text-white/70 text-xs mt-1">— Colossians 3:23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Natural Consequences - Ages 2-4
  if (mantraId === "natural-consequences-2-4") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-6 shadow-2xl text-center max-w-2xl w-full">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">👶</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">NATURAL CONSEQUENCES</h3>
              <p className="text-white/90 text-lg">Ages 2-4</p>
            </div>
          </div>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-sm italic mb-5">"Let life be the teacher while you stay the safe place"</p>
          
          {/* Consequences Grid */}
          <div className="grid gap-3 text-left text-sm">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🧥 Won't wear jacket</strong> → Gets cold (bring one just in case)</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🍎 Won't eat dinner</strong> → Gets hungry before next meal</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🧸 Throws toy</strong> → Toy goes away for a while</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🛝 Won't leave playground nicely</strong> → Break from playground</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🚶 Won't hold hand in parking lot</strong> → Gets carried (safety first)</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📚 Rips book</strong> → Book goes away, we read it together later</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🎨 Won't share crayons</strong> → Coloring time ends for now</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>😴 Fights bedtime</strong> → Too tired to do fun activity tomorrow</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🥛 Spills drink on purpose</strong> → Helps clean it up</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>👋 Hits sibling/friend</strong> → Playtime ends, we try again later</p>
            </div>
          </div>
          
          {/* Tip */}
          <div className="mt-4 bg-white/30 rounded-xl p-3 text-white text-xs italic">
            💡 At this age, always ensure safety first. Stay close and bring backup (jacket, snack) while they learn.
          </div>
        </div>
      </div>
    );
  }

  // Natural Consequences - Ages 5-7
  if (mantraId === "natural-consequences-5-7") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl p-6 shadow-2xl text-center max-w-2xl w-full">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🧒</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">NATURAL CONSEQUENCES</h3>
              <p className="text-white/90 text-lg">Ages 5-7</p>
            </div>
          </div>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-sm italic mb-5">"They can handle more—let them experience cause and effect"</p>
          
          {/* Consequences Grid */}
          <div className="grid gap-3 text-left text-sm">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🎒 Forgets homework</strong> → Gets lower grade or does it at recess</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🧥 Refuses jacket</strong> → Gets cold at recess (no rescue jacket)</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🍱 Doesn't pack lunch</strong> → Goes hungry or eats school lunch</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🚲 Leaves bike out</strong> → Bike gets rained on or taken away</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>⏰ Dawdles in morning</strong> → Goes to school with messy hair</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>💰 Spends all allowance</strong> → Can't buy something else they want</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📺 Won't turn off screen</strong> → Less screen time tomorrow</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🧹 Won't clean room</strong> → Can't find toys, no friends over</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>😤 Mean to friend</strong> → Friend doesn't want to play</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📖 Won't practice reading</strong> → Struggles more in class</p>
            </div>
          </div>
          
          {/* Tip */}
          <div className="mt-4 bg-white/30 rounded-xl p-3 text-white text-xs italic">
            💡 Resist the urge to rescue! A little discomfort now prevents bigger problems later.
          </div>
        </div>
      </div>
    );
  }

  // Natural Consequences - Ages 8-12
  if (mantraId === "natural-consequences-8-12") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 shadow-2xl text-center max-w-2xl w-full">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🧑</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">NATURAL CONSEQUENCES</h3>
              <p className="text-white/90 text-lg">Ages 8-12</p>
            </div>
          </div>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-sm italic mb-5">"Bigger responsibilities, bigger lessons"</p>
          
          {/* Consequences Grid */}
          <div className="grid gap-3 text-left text-sm">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📝 Doesn't do project</strong> → Gets bad grade, talks to teacher</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>💸 Wastes money on junk</strong> → Can't afford thing they really want</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📱 Breaks phone (careless)</strong> → Uses old phone or waits to replace</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>⚽ Skips sports practice</strong> → Doesn't get playing time</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>😤 Rude to coach/teacher</strong> → Has to apologize, loses privileges</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🎮 Games all night</strong> → Exhausted at school, struggles next day</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>👕 Doesn't do laundry</strong> → Wears dirty/wrinkled clothes</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🚌 Misses bus</strong> → Walks, bikes, or misses activity</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🤥 Lies to friend</strong> → Friend loses trust, relationship suffers</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🍕 Eats junk only</strong> → Feels sluggish, stomach hurts</p>
            </div>
          </div>
          
          {/* Tip */}
          <div className="mt-4 bg-white/30 rounded-xl p-3 text-white text-xs italic">
            💡 At this age, let them feel the weight of their choices. Be empathetic, not I-told-you-so.
          </div>
        </div>
      </div>
    );
  }

  // Natural Consequences - Ages 13-18
  if (mantraId === "natural-consequences-13-18") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl p-6 shadow-2xl text-center max-w-2xl w-full">
          {/* Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🧑‍🎓</span>
            <div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">NATURAL CONSEQUENCES</h3>
              <p className="text-white/90 text-lg">Ages 13-18</p>
            </div>
          </div>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
          <p className="text-white/90 text-sm italic mb-5">"Real-world stakes—preparing for independence"</p>
          
          {/* Consequences Grid */}
          <div className="grid gap-3 text-left text-sm">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📚 Doesn't study</strong> → Fails test, affects college options</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🚗 Speeds/reckless driving</strong> → Ticket, higher insurance, loses car</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>💳 Overspends</strong> → Has to work more, can't afford wants</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>😴 Stays up too late</strong> → Exhausted, poor performance</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>👔 Poor attitude at job</strong> → Gets fired or no promotion</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📵 Misses curfew</strong> → Less freedom next time</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🎓 Skips class</strong> → Fails course, summer school</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🤝 Breaks trust</strong> → Takes longer to earn freedoms back</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>📱 Posts inappropriate content</strong> → Affects reputation, college/job</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white"><strong>🍻 Parties irresponsibly</strong> → Legal trouble, health issues</p>
            </div>
          </div>
          
          {/* Tip */}
          <div className="mt-4 bg-white/30 rounded-xl p-3 text-white text-xs italic">
            💡 These are the consequences they'll face at 25. Better to learn now with your support than later alone.
          </div>
        </div>
      </div>
    );
  }

  // ==================== CALM CORNER SHEETS ====================

  if (mantraId === "calm-corner-feelings") {
    return (
      <div className="my-4 flex flex-col items-center">
        <div className="bg-gradient-to-br from-teal-50 to-emerald-100 rounded-3xl p-6 shadow-xl w-full max-w-3xl border-2 border-teal-200 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-script text-3xl text-teal-700 mb-1">My Calm Down Corner</h2>
            <h3 className="font-serif text-2xl font-bold text-teal-800 tracking-wide">NAME YOUR FEELING</h3>
            <p className="text-teal-600 text-sm mt-1">Point to how you feel right now</p>
          </div>
          
          {/* Feelings Grid */}
          <div className="grid grid-cols-4 md:grid-cols-5 gap-3 mb-6">
            {[
              { icon: Smile, label: "Happy", color: "bg-yellow-100 border-yellow-300", iconColor: "text-yellow-600" },
              { icon: Frown, label: "Sad", color: "bg-blue-100 border-blue-300", iconColor: "text-blue-600" },
              { icon: Angry, label: "Angry", color: "bg-red-100 border-red-300", iconColor: "text-red-600" },
              { icon: AlertCircle, label: "Scared", color: "bg-purple-100 border-purple-300", iconColor: "text-purple-600" },
              { icon: HelpCircle, label: "Worried", color: "bg-orange-100 border-orange-300", iconColor: "text-orange-600" },
              { icon: Heart, label: "Loved", color: "bg-pink-100 border-pink-300", iconColor: "text-pink-600" },
              { icon: Zap, label: "Frustrated", color: "bg-rose-100 border-rose-300", iconColor: "text-rose-600" },
              { icon: Moon, label: "Tired", color: "bg-indigo-100 border-indigo-300", iconColor: "text-indigo-600" },
              { icon: HeartCrack, label: "Sick", color: "bg-green-100 border-green-300", iconColor: "text-green-600" },
              { icon: Users, label: "Lonely", color: "bg-gray-100 border-gray-300", iconColor: "text-gray-600" },
              { icon: ShieldAlert, label: "Embarrassed", color: "bg-rose-100 border-rose-300", iconColor: "text-rose-500" },
              { icon: Sparkles, label: "Grateful", color: "bg-amber-100 border-amber-300", iconColor: "text-amber-600" },
              { icon: Star, label: "Surprised", color: "bg-cyan-100 border-cyan-300", iconColor: "text-cyan-600" },
              { icon: Meh, label: "Disappointed", color: "bg-slate-100 border-slate-300", iconColor: "text-slate-600" },
              { icon: CloudSun, label: "Calm", color: "bg-teal-100 border-teal-300", iconColor: "text-teal-600" },
            ].map((feeling, idx) => {
              const IconComponent = feeling.icon;
              return (
                <div key={idx} className={`${feeling.color} rounded-xl p-3 text-center border-2 shadow-sm hover:scale-105 transition-transform`}>
                  <div className="w-8 h-8 mx-auto mb-1 flex items-center justify-center">
                    <IconComponent className={`w-7 h-7 ${feeling.iconColor}`} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{feeling.label}</span>
                </div>
              );
            })}
          </div>
          
          {/* Branding Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-teal-200">
            <img 
              src={logoImage} 
              alt="Model Parenting Method" 
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <p className="text-teal-600 text-xs font-medium italic">Model Parenting Method</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "calm-corner-needs") {
    return (
      <div className="my-4 flex flex-col items-center">
        <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-6 shadow-xl w-full max-w-3xl border-2 border-sky-200 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-script text-3xl text-sky-700 mb-1">My Calm Down Corner</h2>
            <h3 className="font-serif text-2xl font-bold text-sky-800 tracking-wide">NAME YOUR NEED</h3>
            <p className="text-sky-600 text-sm mt-1">What does your body need right now?</p>
          </div>
          
          {/* Needs as Circles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: Droplets, label: "Water", desc: "I need a drink", color: "bg-blue-200 border-blue-400", iconColor: "text-blue-700" },
              { icon: Apple, label: "Food", desc: "I'm hungry", color: "bg-red-200 border-red-400", iconColor: "text-red-700" },
              { icon: BedDouble, label: "Rest", desc: "I need sleep", color: "bg-indigo-200 border-indigo-400", iconColor: "text-indigo-700" },
              { icon: HandHeart, label: "Comfort", desc: "I need a hug", color: "bg-pink-200 border-pink-400", iconColor: "text-pink-700" },
              { icon: Footprints, label: "Movement", desc: "I need to move", color: "bg-green-200 border-green-400", iconColor: "text-green-700" },
              { icon: VolumeX, label: "Quiet", desc: "I need peace", color: "bg-purple-200 border-purple-400", iconColor: "text-purple-700" },
              { icon: Gamepad2, label: "Play", desc: "I need fun", color: "bg-yellow-200 border-yellow-400", iconColor: "text-yellow-700" },
              { icon: MessageCircle, label: "Talk", desc: "I need to share", color: "bg-orange-200 border-orange-400", iconColor: "text-orange-700" },
              { icon: TreeDeciduous, label: "Outside", desc: "I need fresh air", color: "bg-emerald-200 border-emerald-400", iconColor: "text-emerald-700" },
            ].map((need, idx) => {
              const IconComponent = need.icon;
              return (
                <div key={idx} className={`${need.color} rounded-full p-4 text-center border-3 shadow-md aspect-square flex flex-col items-center justify-center`}>
                  <div className="w-10 h-10 mb-1 flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${need.iconColor}`} />
                  </div>
                  <span className="text-sm font-bold text-gray-800">{need.label}</span>
                  <span className="text-xs text-gray-600 mt-1">{need.desc}</span>
                </div>
              );
            })}
          </div>
          
          {/* Branding Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-sky-200">
            <img 
              src={logoImage} 
              alt="Model Parenting Method" 
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <p className="text-sky-600 text-xs font-medium italic">Model Parenting Method</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "calm-corner-zones") {
    return (
      <div className="my-4 flex flex-col items-center">
        <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-6 shadow-xl w-full max-w-3xl border-2 border-slate-200 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-script text-3xl text-slate-700 mb-1">My Calm Down Corner</h2>
            <h3 className="font-serif text-2xl font-bold text-slate-800 tracking-wide">NAME YOUR ZONE</h3>
            <p className="text-slate-600 text-sm mt-1">What nervous system zone are you in?</p>
          </div>
          
          {/* Zones Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Blue Zone */}
            <div className="bg-blue-300 rounded-2xl p-4 border-4 border-blue-500 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Frown className="w-6 h-6 text-blue-900" />
                <h4 className="font-bold text-blue-900 text-lg">Blue Zone</h4>
              </div>
              <ul className="text-blue-900 text-sm space-y-1">
                <li>• Sad</li>
                <li>• Tired</li>
                <li>• Bored</li>
                <li>• Want to be alone</li>
                <li>• Moving slowly</li>
              </ul>
            </div>
            
            {/* Green Zone */}
            <div className="bg-green-300 rounded-2xl p-4 border-4 border-green-500 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Smile className="w-6 h-6 text-green-900" />
                <h4 className="font-bold text-green-900 text-lg">Green Zone</h4>
              </div>
              <ul className="text-green-900 text-sm space-y-1">
                <li>• Calm</li>
                <li>• Happy</li>
                <li>• Ready</li>
                <li>• Feeling good</li>
                <li>• Ready to learn</li>
              </ul>
            </div>
            
            {/* Yellow Zone */}
            <div className="bg-yellow-300 rounded-2xl p-4 border-4 border-yellow-500 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-6 h-6 text-yellow-900" />
                <h4 className="font-bold text-yellow-900 text-lg">Yellow Zone</h4>
              </div>
              <ul className="text-yellow-900 text-sm space-y-1">
                <li>• Wiggly</li>
                <li>• Anxious</li>
                <li>• Nervous</li>
                <li>• Frustrated</li>
                <li>• Confused</li>
              </ul>
            </div>
            
            {/* Red Zone */}
            <div className="bg-red-300 rounded-2xl p-4 border-4 border-red-500 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Angry className="w-6 h-6 text-red-900" />
                <h4 className="font-bold text-red-900 text-lg">Red Zone</h4>
              </div>
              <ul className="text-red-900 text-sm space-y-1">
                <li>• Angry</li>
                <li>• Mad</li>
                <li>• Terrified</li>
                <li>• Want to yell</li>
                <li>• Out of control</li>
              </ul>
            </div>
          </div>
          
          {/* Branding Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <img 
              src={logoImage} 
              alt="Model Parenting Method" 
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <p className="text-slate-600 text-xs font-medium italic">Model Parenting Method</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "calm-corner-helpers") {
    return (
      <div className="my-4 flex flex-col items-center">
        <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-3xl p-6 shadow-xl w-full max-w-3xl border-2 border-violet-200 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-script text-3xl text-violet-700 mb-1">My Calm Down Corner</h2>
            <h3 className="font-serif text-2xl font-bold text-violet-800 tracking-wide">CHOOSE YOUR CALM DOWN HELPER</h3>
            <p className="text-violet-600 text-sm mt-1">Pick a tool to help you feel better</p>
          </div>
          
          {/* Helpers Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {[
              { icon: Wind, label: "Deep Breaths", color: "text-sky-600" },
              { icon: Volume2, label: "Roar it Out", color: "text-orange-600" },
              { icon: Flame, label: "Dragon Breaths", color: "text-red-500" },
              { icon: Music, label: "Listen to Music", color: "text-purple-600" },
              { icon: BookOpen, label: "Read a Book", color: "text-teal-600" },
              { icon: Palette, label: "Draw/Color", color: "text-pink-500" },
              { icon: Baby, label: "Hug a Stuffie", color: "text-amber-600" },
              { icon: Dumbbell, label: "Squeeze & Relax", color: "text-slate-600" },
              { icon: Footprints, label: "Jump Around", color: "text-green-600" },
              { icon: ArrowUpDown, label: "Swing", color: "text-indigo-600" },
              { icon: Puzzle, label: "Do a Puzzle", color: "text-emerald-600" },
              { icon: HandHeart, label: "Ask for a Hug", color: "text-rose-500" },
            ].map((helper, idx) => {
              const IconComponent = helper.icon;
              return (
                <div key={idx} className="bg-white/80 rounded-xl p-3 text-center border-2 border-violet-200 shadow-sm hover:scale-105 transition-transform hover:bg-violet-100">
                  <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${helper.color}`} />
                  </div>
                  <span className="text-xs font-medium text-violet-800">{helper.label}</span>
                </div>
              );
            })}
          </div>
          
          {/* Branding Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-violet-200">
            <img 
              src={logoImage} 
              alt="Model Parenting Method" 
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <p className="text-violet-600 text-xs font-medium italic">Model Parenting Method</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "calm-corner-grounding") {
    return (
      <div className="my-4 flex flex-col items-center">
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-6 shadow-xl w-full max-w-3xl border-2 border-amber-200 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-script text-3xl text-amber-700 mb-1">My Calm Down Corner</h2>
            <h3 className="font-serif text-2xl font-bold text-amber-800 tracking-wide">GROUND YOURSELF</h3>
            <p className="text-amber-600 text-sm mt-1">Calm your nervous system by using your 5 senses</p>
          </div>
          
          {/* 5-4-3-2-1 Technique */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-4 bg-blue-100 rounded-xl p-4 border-2 border-blue-300">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">5</div>
              <div className="flex-1 flex items-center gap-2">
                <Eye className="w-8 h-8 text-blue-700" />
                <span className="font-bold text-blue-800">5 things you can SEE</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-green-100 rounded-xl p-4 border-2 border-green-300">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">4</div>
              <div className="flex-1 flex items-center gap-2">
                <Hand className="w-8 h-8 text-green-700" />
                <span className="font-bold text-green-800">4 things you can TOUCH</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-yellow-100 rounded-xl p-4 border-2 border-yellow-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
              <div className="flex-1 flex items-center gap-2">
                <Ear className="w-8 h-8 text-yellow-700" />
                <span className="font-bold text-yellow-800">3 things you can HEAR</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-orange-100 rounded-xl p-4 border-2 border-orange-300">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
              <div className="flex-1 flex items-center gap-2">
                <Flower2 className="w-8 h-8 text-orange-700" />
                <span className="font-bold text-orange-800">2 things you can SMELL</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-red-100 rounded-xl p-4 border-2 border-red-300">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
              <div className="flex-1 flex items-center gap-2">
                <Cookie className="w-8 h-8 text-red-700" />
                <span className="font-bold text-red-800">1 thing you can TASTE</span>
              </div>
            </div>
          </div>
          
          {/* Branding Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-amber-200">
            <img 
              src={logoImage} 
              alt="Model Parenting Method" 
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <p className="text-amber-600 text-xs font-medium italic">Model Parenting Method</p>
          </div>
        </div>
      </div>
    );
  }

  if (mantraId === "calm-corner-behaviors") {
    return (
      <div className="my-4 flex flex-col items-center">
        <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-3xl p-6 shadow-xl w-full max-w-3xl border-2 border-rose-200 relative">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="font-script text-3xl text-rose-700 mb-1">My Calm Down Corner</h2>
            <h3 className="font-serif text-2xl font-bold text-rose-800 tracking-wide">CHOOSE YOUR HEALTHY BEHAVIOR</h3>
            <p className="text-rose-600 text-sm mt-1">Healthy ways to express big feelings</p>
          </div>
          
          {/* Behaviors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {[
              { icon: MessageSquare, label: "Talk about it", desc: "Tell someone how you feel", iconColor: "text-blue-600" },
              { icon: PenTool, label: "Write it down", desc: "Journal your thoughts", iconColor: "text-purple-600" },
              { icon: Palette, label: "Draw your feelings", desc: "Art helps express", iconColor: "text-pink-600" },
              { icon: Footprints, label: "Move your body", desc: "Run, jump, dance", iconColor: "text-green-600" },
              { icon: Wind, label: "Take deep breaths", desc: "Slow in, slow out", iconColor: "text-sky-600" },
              { icon: BookOpen, label: "Read a book", desc: "Escape and relax", iconColor: "text-teal-600" },
              { icon: Music, label: "Listen to music", desc: "Calm or fun songs", iconColor: "text-violet-600" },
              { icon: TreeDeciduous, label: "Go outside", desc: "Fresh air helps", iconColor: "text-emerald-600" },
              { icon: Baby, label: "Comfort item", desc: "Hug something soft", iconColor: "text-amber-600" },
              { icon: Grip, label: "Push a wall", desc: "Get the energy out", iconColor: "text-slate-600" },
              { icon: HandHeart, label: "Get a hug", desc: "Connection heals", iconColor: "text-rose-600" },
              { icon: Heart, label: "Pray", desc: "Talk to God", iconColor: "text-red-500" },
            ].map((behavior, idx) => {
              const IconComponent = behavior.icon;
              return (
                <div key={idx} className="bg-white/80 rounded-xl p-3 text-center border-2 border-rose-200 shadow-sm hover:scale-105 transition-transform">
                  <div className="w-10 h-10 mx-auto mb-1 flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${behavior.iconColor}`} />
                  </div>
                  <span className="text-sm font-bold text-rose-800">{behavior.label}</span>
                  <span className="text-xs text-rose-600 block mt-1">{behavior.desc}</span>
                </div>
              );
            })}
          </div>
          
          {/* Branding Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-rose-200">
            <img 
              src={logoImage} 
              alt="Model Parenting Method" 
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <p className="text-rose-600 text-xs font-medium italic">Model Parenting Method</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MantraVisual;
