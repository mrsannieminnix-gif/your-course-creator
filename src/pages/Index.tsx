import { useState, useEffect } from "react";
import { WorkbookEditor } from "@/components/workbook/WorkbookEditor";
import { initialWorkbookData } from "@/data/workbookContent";
import { toddlerWorkbookData } from "@/data/toddlerWorkbookContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Lock, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedWorkbook, setSelectedWorkbook] = useState<"foundation" | "toddler" | null>(null);
  const [accessCode, setAccessCode] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [unlockedWorkbooks, setUnlockedWorkbooks] = useState<string[]>([]);
  const { toast } = useToast();

  // Check localStorage for previously verified access
  useEffect(() => {
    const stored = localStorage.getItem("unlockedWorkbooks");
    if (stored) {
      try {
        setUnlockedWorkbooks(JSON.parse(stored));
      } catch {
        localStorage.removeItem("unlockedWorkbooks");
      }
    }
  }, []);

  const verifyAccessCode = async () => {
    if (!accessCode.trim()) {
      toast({
        title: "Enter Access Code",
        description: "Please enter your access code to continue.",
        variant: "destructive",
      });
      return;
    }

    setVerifying(true);
    try {
      const { data, error } = await supabase
        .from("access_codes")
        .select("*")
        .eq("code", accessCode.toUpperCase().trim())
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        toast({
          title: "Invalid Code",
          description: "The access code you entered is not valid.",
          variant: "destructive",
        });
        return;
      }

      // Mark as redeemed if not already
      if (!data.is_redeemed) {
        await supabase
          .from("access_codes")
          .update({ is_redeemed: true, redeemed_at: new Date().toISOString() })
          .eq("id", data.id);
      }

      const products = data.purchased_products as string[];
      setUnlockedWorkbooks(products);
      localStorage.setItem("unlockedWorkbooks", JSON.stringify(products));
      
      toast({
        title: "Access Granted!",
        description: "Your workbooks are now unlocked.",
      });
    } catch (error) {
      console.error("Verification error:", error);
      toast({
        title: "Error",
        description: "Failed to verify access code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setVerifying(false);
    }
  };

  const isUnlocked = (workbook: string) => unlockedWorkbooks.includes(workbook);

  const handleWorkbookSelect = (workbook: "foundation" | "toddler") => {
    if (isUnlocked(workbook)) {
      setSelectedWorkbook(workbook);
    } else {
      toast({
        title: "Workbook Locked",
        description: "Please enter a valid access code or purchase this workbook.",
        variant: "destructive",
      });
    }
  };

  if (selectedWorkbook) {
    const workbookData = selectedWorkbook === "foundation" ? initialWorkbookData : toddlerWorkbookData;
    return (
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSelectedWorkbook(null)}
          className="fixed top-4 right-4 z-50 no-print"
        >
          ← Back to Workbooks
        </Button>
        <WorkbookEditor initialData={workbookData} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
          The Model Parenting Method
        </h1>
        
        {unlockedWorkbooks.length === 0 ? (
          <>
            <p className="text-muted-foreground text-lg">
              Enter your access code to view your workbooks
            </p>
            
            <div className="max-w-sm mx-auto space-y-4">
              <Input
                placeholder="Enter access code"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                className="text-center text-lg tracking-widest font-mono"
                onKeyDown={(e) => e.key === "Enter" && verifyAccessCode()}
              />
              <Button 
                onClick={verifyAccessCode} 
                disabled={verifying}
                className="w-full"
              >
                {verifying ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Unlock Workbooks"
                )}
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground mb-2">Don't have an access code?</p>
              <Link to="/purchase">
                <Button variant="outline">Purchase Workbooks</Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="text-muted-foreground text-lg">
              Choose a workbook to begin
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <button
                onClick={() => handleWorkbookSelect("foundation")}
                className={`page-paper p-8 text-left transition-transform cursor-pointer relative ${
                  isUnlocked("foundation") 
                    ? "hover:scale-[1.02]" 
                    : "opacity-60 cursor-not-allowed"
                }`}
                disabled={!isUnlocked("foundation")}
              >
                {!isUnlocked("foundation") && (
                  <Lock className="absolute top-4 right-4 w-5 h-5 text-muted-foreground" />
                )}
                <Book className="w-10 h-10 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
                  Foundation Workbook
                </h2>
                <p className="text-muted-foreground">
                  The core 6 tools of Model Parenting - anchoring, validation, connection, grow, empower, and correction.
                </p>
              </button>
              <button
                onClick={() => handleWorkbookSelect("toddler")}
                className={`page-paper p-8 text-left transition-transform cursor-pointer relative ${
                  isUnlocked("toddler") 
                    ? "hover:scale-[1.02]" 
                    : "opacity-60 cursor-not-allowed"
                }`}
                disabled={!isUnlocked("toddler")}
              >
                {!isUnlocked("toddler") && (
                  <Lock className="absolute top-4 right-4 w-5 h-5 text-muted-foreground" />
                )}
                <Book className="w-10 h-10 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
                  Ages 2-4 Workbook
                </h2>
                <p className="text-muted-foreground">
                  Brain development, nervous system regulation, and applying the tools to common toddler challenges.
                </p>
              </button>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  localStorage.removeItem("unlockedWorkbooks");
                  setUnlockedWorkbooks([]);
                  setAccessCode("");
                }}
              >
                Use Different Code
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
