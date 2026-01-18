import React from "react";
import { Anchor, Heart, Users, Sprout, Star, BookOpen } from "lucide-react";

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
        </div>
      </div>
    );
  }

  if (mantraId === "connection") {
    return (
      <div className="my-8 flex flex-col items-center">
        <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl p-10 shadow-2xl text-center max-w-lg w-full">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h3 className="font-serif text-4xl font-bold text-white mb-4 tracking-wide">CONNECTION</h3>
          <div className="w-16 h-1 bg-white/50 mx-auto mb-6" />
          <p className="text-white/90 text-xl italic mb-6">"Relationship before rules"</p>
          <div className="space-y-3 text-left bg-white/20 rounded-xl p-6">
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">👁️</span> Eye contact
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🧎</span> Get on their level
            </p>
            <p className="text-white flex items-center gap-3">
              <span className="text-2xl">🎯</span> Be fully present
            </p>
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
        </div>
      </div>
    );
  }

  return null;
};

export default MantraVisual;
