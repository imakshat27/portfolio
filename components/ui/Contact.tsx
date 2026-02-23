import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-2xl items-center font-semibold text-center md:text-4xl lg:text-5xl text-black dark:text-white mb-10">
          Get in Touch
        </div>
        <Card className="bg-card/10 backdrop-blur-sm border-border/20 shadow-lg">
          
          <CardContent>
            <form
              action="https://formsubmit.co/2a2a3b11f823e4c986bd0f2426b3845a"
              method="POST"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-background/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  className="bg-background/50 h-48"
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
export default Contact;