import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const timeline = [
    {
      year: "1969",
      title: "ARPANET",
      description: "Создание первой сети с коммутацией пакетов. Соединение четырёх университетов США.",
      icon: "Network"
    },
    {
      year: "1971",
      title: "Электронная почта",
      description: "Рэй Томлинсон создаёт первую программу для отправки электронной почты и вводит символ @.",
      icon: "Mail"
    },
    {
      year: "1983",
      title: "Протокол TCP/IP",
      description: "ARPANET переходит на протокол TCP/IP, который становится стандартом для передачи данных.",
      icon: "Server"
    },
    {
      year: "1989",
      title: "World Wide Web",
      description: "Тим Бернерс-Ли предлагает концепцию всемирной паутины в CERN.",
      icon: "Globe"
    },
    {
      year: "1991",
      title: "Первый веб-сайт",
      description: "Запущен первый в мире веб-сайт info.cern.ch с информацией о проекте WWW.",
      icon: "FileText"
    },
    {
      year: "1993",
      title: "Браузер Mosaic",
      description: "Выпущен первый графический веб-браузер, сделавший интернет доступным для широкой публики.",
      icon: "Monitor"
    },
    {
      year: "1998",
      title: "Google",
      description: "Основание поисковой системы Google, которая революционизирует поиск информации в интернете.",
      icon: "Search"
    },
    {
      year: "2004",
      title: "Социальные сети",
      description: "Запуск Facebook знаменует начало эры социальных сетей и пользовательского контента.",
      icon: "Users"
    },
    {
      year: "2007",
      title: "Мобильный интернет",
      description: "Выход iPhone открывает эру мобильного интернета и приложений.",
      icon: "Smartphone"
    },
    {
      year: "2020",
      title: "5G и IoT",
      description: "Развёртывание сетей 5G и рост интернета вещей (IoT) открывают новые возможности.",
      icon: "Wifi"
    }
  ];

  const keyFigures = [
    {
      name: "Тим Бернерс-Ли",
      role: "Создатель World Wide Web",
      contribution: "Разработал HTTP, HTML и первый браузер",
      icon: "User"
    },
    {
      name: "Винтон Серф и Роберт Кан",
      role: "Отцы интернета",
      contribution: "Создали протоколы TCP/IP",
      icon: "Users"
    },
    {
      name: "Марк Андриссен",
      role: "Разработчик Mosaic",
      contribution: "Сделал интернет визуальным и доступным",
      icon: "User"
    }
  ];

  const technologies = [
    {
      name: "TCP/IP",
      description: "Протоколы передачи данных, основа современного интернета",
      icon: "Layers"
    },
    {
      name: "HTTP/HTTPS",
      description: "Протоколы передачи гипертекста для веб-страниц",
      icon: "Lock"
    },
    {
      name: "DNS",
      description: "Система доменных имён для преобразования адресов",
      icon: "Database"
    },
    {
      name: "HTML/CSS",
      description: "Языки разметки и стилей для создания веб-страниц",
      icon: "Code"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/80321160-fec1-4858-bc62-d8e6bd3d8e97/files/7a93836a-62e2-4ded-b9f5-764e4f568e7e.jpg" 
              alt="История интернета"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            История интернета
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            От военного проекта до глобальной сети, объединяющей миллиарды людей
          </p>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Clock" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Хронология событий</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    <div className="inline-block">
                      <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full font-semibold mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Icon name={event.icon as any} size={24} className="text-primary-foreground" />
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Users" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Ключевые фигуры</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFigures.map((figure, index) => (
              <Card 
                key={figure.name} 
                className="hover:shadow-lg transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={figure.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{figure.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{figure.role}</p>
                  <p className="text-muted-foreground">{figure.contribution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Cpu" size={32} className="text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Ключевые технологии</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.name}
                className="hover:shadow-lg transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={tech.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-muted-foreground">{tech.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">
            От ARPANET до современного интернета — путь длиной в полвека
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;