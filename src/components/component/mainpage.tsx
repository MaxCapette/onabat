
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import ContactPage from "./contact/contact"
export function Mainpage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <HomeIcon className="h-6 w-6" />
          <span className=" p-2 font-bold text-xl">Onabat</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center ">
          
          <div className="hidden lg:flex">
           
            <Link className="text-sm font-medium hover:underline underline-offset- mx-5" href="#about">
              À Propos
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 mx-5" href="#services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset- mx-5" href="#projects">
              Projets
            </Link>
        
            <Link className="text-sm font-medium hover:underline underline-offset- mx-5" href="#contact">
              Contact
            </Link>
          </div>
        </nav>
        <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only  ">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full max-w-xs bg-slate-100 p-6 backgroundCustom" side="right">
              <div className="flex flex-col gap-6">
                <SheetClose asChild>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#about">
                  À propos
                </Link>
                
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#services">
                  Services
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#projects">
                  Projets
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#contact">
                  Contact
                </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
      </header>
      <main className="flex-1">
        <section className="flex justify-center w-full py-12 sm:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    ONABAT, votre partenaire de confiance pour la construction et la rénovation
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Depuis plus de 20 ans, ONABAT accompagne ses clients dans la réalisation de leurs projets de
                    construction et de rénovation. Faites confiance à notre expertise et notre savoir-faire.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Nos services
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
              <img
                src="/image1.jpeg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="services" className="flex justify-center w-full py-12 sm:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
               
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Construction et rénovation de qualité
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  ONABAT vous accompagne dans tous vos projets de construction et de rénovation, du début à la fin.
                  Faites confiance à notre expertise et à notre savoir-faire.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/image2.jpeg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Construction</h3>
                      <p className="text-muted-foreground">
                        Nous réalisons tous types de projets de construction, du résidentiel au commercial, en passant
                        par l&apos;industriel.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Rénovation</h3>
                      <p className="text-muted-foreground">
                        Nos équipes d&apos;experts en rénovation vous accompagnent dans la transformation de vos bâtiments.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Aménagement</h3>
                      <p className="text-muted-foreground">
                        Nous réalisons également des travaux d&apos;aménagement intérieur et extérieur pour embellir votre
                        espace.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="flex justify-center w-full py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
               
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Découvrez nos projets</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Voici quelques exemples de nos réalisations les plus récentes en construction et en rénovation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <img
                src="/pexels1.jpg"
                width="550"
                height="310"
                alt="Project 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <img
                src="/pexels2.jpg"
                width="550"
                height="310"
                alt="Project 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
              <img
                src="/pexels3.jpg"
                width="550"
                height="310"
                alt="Project 3"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
          
             
            </div>
          </div>
        </section>
        <section id="about" className="flex justify-center w-full py-12 sm:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3 text-center">
             
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Qui sommes-nous ?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ONABAT est une entreprise de construction et de rénovation fondée en 2000. Depuis plus de 20 ans, nous
                mettons notre expertise et notre savoir-faire au service de nos clients pour réaliser leurs projets avec
                passion et professionnalisme.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Nos valeurs</h3>
                <ul className=" space-y-2 pl-4 text-left">
                  <li>
                    <div className="flex items-center gap-2">
                      <CircleCheckIcon className="h-5 w-5 text-green-500" />
                      Qualité et excellence
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <LeafIcon className="h-5 w-5 text-green-500" />
                      Respect de l&apos;environnement
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <SmileIcon className="h-5 w-5 text-green-500" />
                      Satisfaction des clients
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <LightbulbIcon className="h-5 w-5 text-green-500" />
                      Innovation et créativité
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center w-full py-12 sm:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6 space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl ">Contactez-nous</h2>
            <p className="max-w-[700px] mx-auto  md:text-xl">
              Vous avez une question ou vous êtes intéressé par nos services ? Remplissez le formulaire ci-dessous et
              l&apos;un de nos experts vous recontactera.
            </p>
            <ContactPage />
          </div>
        </section>
      </main>
      <footer className="bg-primary p-6 md:py-12 w-full">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 ONABAT.</p>
          <p className="  "> Tous droits réservés.</p>
          </div>
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">7 RUE LEONARD DE VINCI </p>
          <p className="   ">91300 MASSY</p>
          <p className="  mt-4 ">contact@onabat.fr</p>

          <p className="  mt-4 ">TEL: 04 22 13 02 90 </p>
          </div>
      </footer>
    </div>
  )
}

function CircleCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LeafIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function LightbulbIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function SmileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}
