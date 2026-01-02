import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Check, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    key: "foundation",
    name: "Foundation Workbook",
    description: "The core 6 tools of Model Parenting - anchoring, validation, connection, grow, empower, and correction.",
    price: "$29",
    features: ["Core 6 Tools Framework", "Practice Exercises", "Weekly Trackers"],
  },
  {
    key: "toddler",
    name: "Ages 2-4 Workbook",
    description: "Brain development, nervous system regulation, and applying the tools to common toddler challenges.",
    price: "$29",
    features: ["Brain Development Guide", "Nervous System Regulation", "Toddler-Specific Strategies"],
  },
  {
    key: "bundle",
    name: "Complete Bundle",
    description: "Get both workbooks together at a discounted price.",
    price: "$49",
    originalPrice: "$58",
    features: ["Both Workbooks Included", "Save $9", "Lifetime Access"],
    highlighted: true,
  },
];

const Purchase = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const handlePurchase = async (productKey: string) => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to continue.",
        variant: "destructive",
      });
      return;
    }

    setLoading(productKey);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { productKey, email },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Error",
        description: "Failed to start checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            The Model Parenting Method
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Evidence-based workbooks to transform your parenting journey
          </p>
        </div>

        <div className="mb-8 max-w-md mx-auto">
          <Label htmlFor="email" className="text-base">Your Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Your access code will be sent to this email
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <Card 
              key={product.key} 
              className={`relative ${product.highlighted ? "border-primary ring-2 ring-primary/20" : ""}`}
            >
              {product.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Best Value
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Book className="w-6 h-6 text-primary" />
                  <CardTitle className="font-serif text-xl">{product.name}</CardTitle>
                </div>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through ml-2">{product.originalPrice}</span>
                  )}
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handlePurchase(product.key)}
                  disabled={loading !== null}
                  className="w-full"
                  variant={product.highlighted ? "default" : "outline"}
                >
                  {loading === product.key ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Purchase Now"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-2">Already have an access code?</p>
          <Link to="/" className="text-primary hover:underline">
            Enter your code here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
