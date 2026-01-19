import React from "react";
import { Anchor, Heart, Users, Sprout, Star, BookOpen, RefreshCw } from "lucide-react";
import { faithImageMap } from "./ComparisonImage";

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

  return null;
};

export default MantraVisual;
