import React from 'react';
import { Home, Sun, Mic2, Camera, ThermometerSun, Blinds, Star, ChevronRight, MapPin } from 'lucide-react';

function App() {
  const services = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Iluminação Inteligente",
      description: "Controle total da iluminação através do seu smartphone"
    },
    {
      icon: <Mic2 className="w-8 h-8" />,
      title: "Assistentes Virtuais",
      description: "Integração com Alexa e Google Home"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Câmeras de Segurança",
      description: "Monitoramento em tempo real pelo celular"
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "Sensores Inteligentes",
      description: "Controle de temperatura e presença automatizado"
    },
    {
      icon: <Blinds className="w-8 h-8" />,
      title: "Automação Completa",
      description: "Cortinas, portões e som ambiente integrados"
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      text: "Incrível como a automação mudou nossa rotina. Tudo funciona perfeitamente!",
      stars: 5
    },
    {
      name: "Maria Santos",
      text: "Profissionais excepcionais e tecnologia de ponta. Super recomendo!",
      stars: 5
    },
    {
      name: "Pedro Oliveira",
      text: "A melhor decisão que tomamos para nossa casa. Atendimento nota 10!",
      stars: 5
    }
  ];

  const whatsappLink = "https://wa.me/5515996266927?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20automação%20residencial.";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-[#00f3ff]" />
            <span className="text-2xl font-bold">JC Automação</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover-neon">Início</a>
            <a href="#servicos" className="hover-neon">Serviços</a>
            <a href="#sobre" className="hover-neon">Sobre</a>
            <a href="#depoimentos" className="hover-neon">Depoimentos</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 min-h-screen flex items-center" 
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">
            Transforme sua casa em um lar inteligente
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Automação residencial personalizada, prática e eficiente.
          </p>
          <a href={whatsappLink}
             className="bg-[#00f3ff] text-black px-8 py-4 rounded-full text-lg font-bold hover-neon inline-flex items-center">
            Fale agora no WhatsApp
            <ChevronRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center neon-glow">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="text-[#00f3ff] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-4xl font-bold mb-8 neon-glow">Sobre a JC Automação</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl text-gray-300 mb-6">
                  Somos especialistas em transformar residências comuns em casas inteligentes, 
                  proporcionando conforto, segurança e praticidade através da mais alta tecnologia 
                  em automação residencial.
                </p>
                <p className="text-xl text-gray-300 mb-6">
                  Nossa missão é tornar a vida dos nossos clientes mais simples e conectada, 
                  com soluções personalizadas e atendimento de excelência.
                </p>
                <div className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="w-6 h-6 text-[#00f3ff] mt-1" />
                  <div>
                    <p className="font-bold mb-2">Endereço:</p>
                    <p>Rua José Iran Marino dos Santos, 19</p>
                    <p>Jardim Ipanema</p>
                    <p>Sorocaba - SP</p>
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0447325493786!2d-47.43011492376611!3d-23.49862225883721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58abceb48f0e7%3A0x7431be98da0e5c46!2sR.%20Jos%C3%A9%20Iran%20Marino%20dos%20Santos%2C%2019%20-%20Jardim%20Ipanema%2C%20Sorocaba%20-%20SP%2C%2018052-510!5e0!3m2!1spt-BR!2sbr!4v1710272116809!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center neon-glow">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <p className="font-bold text-[#00f3ff]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 neon-glow">
            Pronto para transformar sua casa?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            A automação que você merece está a um clique!
          </p>
          <a href={whatsappLink}
             className="bg-[#00f3ff] text-black px-12 py-6 rounded-full text-xl font-bold hover-neon inline-flex items-center">
            Solicitar Atendimento via WhatsApp
            <ChevronRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
              <Home className="w-8 h-8 text-[#00f3ff]" />
              <span className="text-2xl font-bold">JC Automação</span>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
              <a href="#inicio" className="hover-neon mb-4 md:mb-0">Início</a>
              <a href="#servicos" className="hover-neon mb-4 md:mb-0">Serviços</a>
              <a href="#sobre" className="hover-neon mb-4 md:mb-0">Sobre</a>
              <a href="#depoimentos" className="hover-neon">Depoimentos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a href={whatsappLink} className="whatsapp-button">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.4 3.6C18.2 1.4 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.4-6.2-3.6-8.4zM12 22c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8 1 1-3.8-.2-.4C2.5 15.6 2 13.8 2 12 2 6.5 6.5 2 12 2c2.6 0 5 1 6.8 2.8C20.6 6.6 21.6 9 21.6 12c0 5.5-4.5 10-9.6 10zm5.2-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6 0-.3-.2-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C9.7 9.7 9.2 8.2 9 7.6c-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.2-.3-.5-.4z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;