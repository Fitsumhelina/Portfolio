import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { SkillTag } from "@/components/skill-tag"
import { AnimatedSection } from "@/components/animated-section"
import { getCredentialsInfo } from "@/lib/data"

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-cyan-400" />
          <h3 className="text-lg font-medium">Credentials</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Professional Certifications */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Professional Certifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {credentialsInfo.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                    {cert.logo && (
                      <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.issuer}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-medium">{cert.name}</h5>
                      <p className="text-xs text-zinc-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-cyan-400" />
                Education
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {credentialsInfo.education.map((edu, index) => (
                  <div key={index} className="flex items-start bg-zinc-800/30 p-2 sm:p-3 rounded-lg">
                    {edu.logo && (
                      <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-zinc-800">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-medium">{edu.degree}</h5>
                      <p className="text-xs text-zinc-400">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & Expertise */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-zinc-400 flex items-center border-b border-zinc-800 pb-2">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {credentialsInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </CardContent>
    </Card>
  )
}
