import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { UserIcon, Mail, Phone, MapPin, Clock } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export function ContactSection() {
  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm col-span-1 md:col-span-3 lg:col-span-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="bg-zinc-800/50 p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <UserIcon className="w-5 h-5 mr-2 text-cyan-400" />
              <h3 className="text-lg font-medium">Get in Touch</h3>
            </div>

            <div className="space-y-6">
              <p className="text-zinc-300">
                I'm always interested in new projects and opportunities. Feel free to reach out if you want to work
                together or just say hello!
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:jane.doe@example.com"
                      className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      jane.doe@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+14155552671" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">
                      +1 (415) 555-2671
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-sm text-zinc-400">San Francisco, California</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-cyan-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Working Hours</h4>
                    <p className="text-sm text-zinc-400">Monday - Friday, 9am - 5pm PST</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium mb-3">Connect with me</h4>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-6 lg:p-8 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800/50">
            <h3 className="text-lg font-medium mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
