import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Droplets, Sparkles, Shield, MapPin, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const services = [
    {
      title: "Högtryckstvätt",
      description: "Vi rengör allt från uppfarter och altaner till fasader, staket och trappor. Smuts, mossa, alger och andra beläggningar försvinner effektivt.",
      icon: <Droplets className="h-8 w-8 text-primary" />
    },
    {
      title: "Fönsterputsning", 
      description: "Noggrann och professionell fönsterputsning för både privatpersoner och företag. Skinande rena fönster utan ränder eller fläckar.",
      icon: <Sparkles className="h-8 w-8 text-primary" />
    },
    {
      title: "Miljövänlig",
      description: "Vi använder miljövänliga metoder och produkter i allt vi gör. Hållbarhet är en självklar del av vårt sätt att arbeta.",
      icon: <Shield className="h-8 w-8 text-primary" />
    }
  ];

  const galleryImages = [
    { before: "https://rensurfmalmo.com/img/f%C3%B6reGolv.jpg", after: "https://rensurfmalmo.com/img/EfterGolv.jpg", title: "Golv" },
    { before: "https://rensurfmalmo.com/img/F%C3%B6reG%C3%A5ng.jpg", after: "https://rensurfmalmo.com/img/EfterG%C3%A5ng.jpg", title: "Gång" },
    { before: "https://rensurfmalmo.com/img/F%C3%B6reTak.jpg", after: "https://rensurfmalmo.com/img/EfterTak.jpg", title: "Tak" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center space-x-12">
              <button onClick={() => scrollToSection('hem')} className="text-foreground hover:text-primary transition-colors">Hem</button>
              <button onClick={() => scrollToSection('om-oss')} className="text-foreground hover:text-primary transition-colors">Om oss</button>
              <button onClick={() => scrollToSection('tjanster')} className="text-foreground hover:text-primary transition-colors">Tjänster</button>
              <button onClick={() => scrollToSection('galleri')} className="text-foreground hover:text-primary transition-colors">Galleri</button>
              <button onClick={() => scrollToSection('kontakt')} className="text-foreground hover:text-primary transition-colors">Kontakt</button>
            </div>

            {/* Mobile Hamburger Button */}
            {/* Mobile Hamburger Button - Positioned to the right */}
            <div className="md:hidden absolute right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('hem')} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">Hem</button>
                <button onClick={() => scrollToSection('om-oss')} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">Om oss</button>
                <button onClick={() => scrollToSection('tjanster')} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">Tjänster</button>
                <button onClick={() => scrollToSection('galleri')} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">Galleri</button>
                <button onClick={() => scrollToSection('kontakt')} className="block w-full text-left text-foreground hover:text-primary transition-colors py-2">Kontakt</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hem" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/dceb6002-3f2d-456e-948e-59c5f9555e46.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" 
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}>
            Välkommen till{" "}
            <span className="text-white">
              RenSurf Malmö
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed" 
             style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)' }}>
            Professionell högtryckstvätt och fönsterputsning i Malmö och hela Skåne – med miljön i fokus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 shadow-lg"
              onClick={() => scrollToSection('kontakt')}
            >
              Få offert
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('tjanster')}
            >
              Våra tjänster
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white drop-shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 bg-gradient-to-b from-background to-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Våra tjänster</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vi levererar professionella rengöringstjänster med fokus på kvalitet och miljöansvar
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Om oss</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Vi är ett företag med bas i Malmö som har ett tydligt mål: att leverera ett skinande rent resultat varje gång, 
                  oavsett om det gäller din uppfart, fasad, altan eller dina fönster.
                </p>
                <p>
                  Med ett skarpt öga för detaljer och ett växande antal nöjda kunder runt om i Skåne sätter vi alltid kvalitet, 
                  noggrannhet och god service i fokus.
                </p>
                <p>
                  När du väljer oss får du inte bara rena ytor. Du får också en pålitlig partner som värdesätter punktlighet, 
                  noggrannhet och ett resultat som både du och vi kan vara stolta över.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" 
                  alt="Professionell rengöring"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vi jobbar i hela Skåne</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vi är stolta över att utgå från Malmö och erbjuda våra högkvalitativa tjänster över hela Skåne. 
            Oavsett om du bor i Lund, Helsingborg, Trelleborg, Ystad, Kristianstad eller någon annan ort i regionen 
            finns vi nära dig när det är dags för en ordentlig rengöring.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galleri" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galleri</h2>
            <p className="text-xl text-muted-foreground">Se exempel på vårt arbete - före och efter</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <Card key={index} className="bg-card shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img src={item.before} alt={`Före - ${item.title}`} className="w-full h-48 object-cover" />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        Före
                      </div>
                    </div>
                    <div className="relative">
                      <img src={item.after} alt={`Efter - ${item.title}`} className="w-full h-48 object-cover" />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                        Efter
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Kontakta oss</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Har du frågor, vill boka en kostnadsfri offert eller bara veta mer om våra tjänster? 
            Tveka inte att höra av dig – vi ser fram emot att hjälpa dig!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ring oss</h3>
                <a href="tel:0707867859" className="text-primary hover:underline text-lg">
                  070-786 78 59
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mejla oss</h3>
                <a href="mailto:rensurfmalmo@gmail.com" className="text-primary hover:underline text-lg">
                  rensurfmalmo@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Instagram className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Följ oss</h3>
                <a href="https://instagram.com/rensurfmalmo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-lg">
                  @rensurfmalmo
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90 shadow-lg">
              <Phone className="mr-2 h-5 w-5" />
              Ring nu
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Mail className="mr-2 h-5 w-5" />
              Skicka mejl
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <Droplets className="h-5 w-5 text-foreground" />
            </div>
            <span className="text-2xl font-bold">RenSurf Malmö</span>
          </div>
          <p className="text-background/70 mb-4">
            Professionell högtryckstvätt och fönsterputsning i Malmö och hela Skåne
          </p>
          <div className="flex justify-center space-x-6">
            <a href="tel:0707867859" className="text-background/70 hover:text-background transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:rensurfmalmo@gmail.com" className="text-background/70 hover:text-background transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/rensurfmalmo" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-background/50">
            © 2024 RenSurf Malmö. Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;