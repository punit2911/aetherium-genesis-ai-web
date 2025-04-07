
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

interface AIDemoProps {
  apiKey: string;
}

const AIDemo = ({ apiKey }: AIDemoProps) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { toast } = useToast();
  const responseRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate a response.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    setResponse("");
    
    try {
      const result = await fetchGeminiResponse(prompt);
      setResponse(result);
      
      // Scroll to response
      if (responseRef.current) {
        responseRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      toast({
        title: "Error",
        description: "Failed to generate a response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const fetchGeminiResponse = async (userPrompt: string) => {
    try {
      // Updated URL to use the correct API version and model
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: userPrompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
        }),
      });
      
      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts) {
        return data.candidates[0].content.parts[0].text;
      } else if (data.error) {
        throw new Error(data.error.message || "Unknown error occurred");
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Gemini API error:", error);
      throw error;
    }
  };

  return (
    <section id="demo" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient font-['Space_Grotesk']">
            Experience AI in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Try our AI technology powered by Google's Gemini. Ask a question or provide a prompt to see the results.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cosmic-card rounded-xl p-6 mb-6"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Textarea
                  placeholder="Enter your prompt here..."
                  className={`bg-cosmic-blue/20 border-cosmic-cyan/30 focus:border-cosmic-cyan transition-all h-32 ${
                    isFocused ? "border-2" : "border"
                  }`}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
              </div>
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  className="glass-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Generate Response"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
          
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="cosmic-card rounded-xl p-6"
              ref={responseRef}
            >
              <h3 className="text-xl font-semibold mb-4 text-cosmic-cyan">AI Response:</h3>
              <div className="whitespace-pre-line text-gray-200">
                {response}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-cosmic-purple opacity-20 blur-3xl"></div>
    </section>
  );
};

export default AIDemo;
