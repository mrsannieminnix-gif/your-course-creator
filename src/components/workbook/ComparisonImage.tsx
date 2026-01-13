import React from "react";
import parentStressed from "@/assets/parent-stressed-child-upset.png";
import parentCalm from "@/assets/parent-calm-child-calm.png";
import anchoringReactive from "@/assets/anchoring-reactive.png";
import anchoringCalm from "@/assets/anchoring-calm.png";
import anchoringWithGod from "@/assets/anchoring-with-god.png";
import validationDismissive from "@/assets/validation-dismissive.png";
import validationEmpathy from "@/assets/validation-empathy.png";
import connectionDistracted from "@/assets/connection-distracted.png";
import connectionPresent from "@/assets/connection-present.png";
import growCritical from "@/assets/grow-critical.png";
import growEncourage from "@/assets/grow-encourage.png";
import empowerControl from "@/assets/empower-control.png";
import empowerTrust from "@/assets/empower-trust.png";
import correctionPunish from "@/assets/correction-punish.png";
import correctionTeach from "@/assets/correction-teach.png";
// Toddler workbook images
import toddlerBrainDemand from "@/assets/toddler-brain-demand.png";
import toddlerBrainUnderstand from "@/assets/toddler-brain-understand.png";
import toddlerTantrumReact from "@/assets/toddler-tantrum-react.png";
import toddlerTantrumAnchor from "@/assets/toddler-tantrum-anchor.png";
import toddlerDefianceForce from "@/assets/toddler-defiance-force.png";
import toddlerDefianceChoice from "@/assets/toddler-defiance-choice.png";
import toddlerSeparationSneak from "@/assets/toddler-separation-sneak.png";
import toddlerSeparationRitual from "@/assets/toddler-separation-ritual.png";
import toddlerSleepBattle from "@/assets/toddler-sleep-battle.png";
import toddlerSleepCalm from "@/assets/toddler-sleep-calm.png";
import toddlerHittingReact from "@/assets/toddler-hitting-react.png";
import toddlerHittingTeach from "@/assets/toddler-hitting-teach.png";
import toddlerTransitionDrag from "@/assets/toddler-transition-drag.png";
import toddlerTransitionSmooth from "@/assets/toddler-transition-smooth.png";
// Jesus faith images for each tool
import jesusFoundation from "@/assets/jesus-foundation.png";
import jesusAnchoring from "@/assets/jesus-anchoring.png";
import jesusValidation from "@/assets/jesus-validation.png";
import jesusConnection from "@/assets/jesus-connection.png";
import jesusGrow from "@/assets/jesus-grow.png";
import jesusEmpower from "@/assets/jesus-empower.png";
import jesusCorrection from "@/assets/jesus-correction.png";

export const faithImageMap: Record<string, string> = {
  "anchoring-with-god": anchoringWithGod,
  "jesus-foundation": jesusFoundation,
  "jesus-anchoring": jesusAnchoring,
  "jesus-validation": jesusValidation,
  "jesus-connection": jesusConnection,
  "jesus-grow": jesusGrow,
  "jesus-empower": jesusEmpower,
  "jesus-correction": jesusCorrection,
};

interface ComparisonImageProps {
  images?: {
    before: string;
    after: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
  tagline?: string;
}

const imageMap: Record<string, string> = {
  "parent-stressed": parentStressed,
  "parent-calm": parentCalm,
  "anchoring-reactive": anchoringReactive,
  "anchoring-calm": anchoringCalm,
  "anchoring-with-god": anchoringWithGod,
  "validation-dismissive": validationDismissive,
  "validation-empathy": validationEmpathy,
  "connection-distracted": connectionDistracted,
  "connection-present": connectionPresent,
  "grow-critical": growCritical,
  "grow-encourage": growEncourage,
  "empower-control": empowerControl,
  "empower-trust": empowerTrust,
  "correction-punish": correctionPunish,
  "correction-teach": correctionTeach,
  // Toddler workbook images
  "toddler-brain-demand": toddlerBrainDemand,
  "toddler-brain-understand": toddlerBrainUnderstand,
  "toddler-tantrum-react": toddlerTantrumReact,
  "toddler-tantrum-anchor": toddlerTantrumAnchor,
  "toddler-defiance-force": toddlerDefianceForce,
  "toddler-defiance-choice": toddlerDefianceChoice,
  "toddler-separation-sneak": toddlerSeparationSneak,
  "toddler-separation-ritual": toddlerSeparationRitual,
  "toddler-sleep-battle": toddlerSleepBattle,
  "toddler-sleep-calm": toddlerSleepCalm,
  "toddler-hitting-react": toddlerHittingReact,
  "toddler-hitting-teach": toddlerHittingTeach,
  "toddler-transition-drag": toddlerTransitionDrag,
  "toddler-transition-smooth": toddlerTransitionSmooth,
};

export const ComparisonImage: React.FC<ComparisonImageProps> = ({ images }) => {
  if (!images) return null;

  const beforeSrc = imageMap[images.before] || images.before;
  const afterSrc = imageMap[images.after] || images.after;

  return (
    <div className="my-6 print:my-2">
      <div className="grid grid-cols-2 gap-6 print:gap-2">
        {/* Before - Stressed scenario */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-lg overflow-hidden border-2 border-destructive/30 bg-destructive/5 print:border">
            <img 
              src={beforeSrc} 
              alt={images.beforeLabel || "Before"} 
              className="w-full h-auto print:max-h-28 print:w-auto print:mx-auto"
            />
            <div className="absolute top-2 left-2 bg-destructive/80 text-destructive-foreground px-2 py-1 rounded text-xs font-semibold print:top-1 print:left-1 print:px-1 print:py-0.5 print:text-[8px]">
              ✗
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-destructive text-center print:mt-1 print:text-[9px]">
            {images.beforeLabel || "When I react..."}
          </p>
        </div>

        {/* After - Calm scenario */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-lg overflow-hidden border-2 border-primary/30 bg-primary/5 print:border">
            <img 
              src={afterSrc} 
              alt={images.afterLabel || "After"} 
              className="w-full h-auto print:max-h-28 print:w-auto print:mx-auto"
            />
            <div className="absolute top-2 left-2 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-xs font-semibold print:top-1 print:left-1 print:px-1 print:py-0.5 print:text-[8px]">
              ✓
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-primary text-center print:mt-1 print:text-[9px]">
            {images.afterLabel || "When I model..."}
          </p>
        </div>
      </div>
      
      <div className="mt-4 text-center print:mt-1">
        <p className="font-handwritten text-xl text-foreground/80 italic print:text-sm">
          "They become what they see."
        </p>
      </div>
    </div>
  );
};
