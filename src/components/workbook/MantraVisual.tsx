import React from "react";

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
              <span className="text-3xl">❤️</span>
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
              <span className="text-3xl">🤝</span>
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
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-emerald-700 mb-2">3. REDIRECT</h3>
            <p className="text-emerald-600 text-sm italic">"Let's figure this out together."</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MantraVisual;
