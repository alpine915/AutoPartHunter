import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900">Auto Part Hunter</h1>
        <p className="text-lg text-gray-600 mt-2">
          Connecting car part sellers with buyers easily.
        </p>
      </motion.div>

      <Card className="mt-6 p-6 max-w-md w-full">
        <CardContent>
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            Stay Updated!
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Sign up to get notified when we launch.
          </p>
          <div className="flex mt-4 gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={handleSubscribe}>Notify Me</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

