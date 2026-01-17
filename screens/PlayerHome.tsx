
import React, { useState } from 'react';

interface Court {
  id: number;
  name: string;
  distance: string;
  price: string;
  time: string;
  image: string;
  spots: number;
  description: string;
  isIotEnabled: boolean;
  status: 'available' | 'booked' | 'maintenance';
}

const PlayerHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Все');
  
  const courts: Court[] = [
    { 
      id: 1, 
      name: "Nursat Arena", 
      distance: "1.4 км", 
      price: "15 000 ₸", 
      time: "Сегодня, 21:00", 
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=300", 
      spots: 3,
      isIotEnabled: true,
      status: 'available',
      description: "Современный стадион, есть крытые поля для любой погоды. Автоматический доступ."
    },
    { 
      id: 2, 
      name: "Miras Arena", 
      distance: "3.1 км", 
      price: "12 000 ₸", 
      time: "Сегодня, 22:30", 
      image: "https://images.unsplash.com/photo-1529900948632-58674ba193cb?auto=format&fit=crop&q=80&w=300", 
      spots: 2,
      isIotEnabled: true,
      status: 'available',
      description: "Качественный искусственный газон (форматы 6+1, 7+1). Умное освещение."
    },
    { 
      id: 3, 
      name: "Alaman", 
      distance: "4.2 км", 
      price: "14 000 ₸", 
      time: "Завтра, 10:00", 
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=300", 
      spots: 5,
      isIotEnabled: false,
      status: 'available',
      description: "5 полей (включая крытые), раздевалки и душевые."
    },
    { 
      id: 4, 
      name: "Sport Villa", 
      distance: "5.8 км", 
      price: "16 000 ₸", 
      time: "Завтра, 18:00", 
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=300", 
      spots: 1,
      isIotEnabled: true,
      status: 'booked',
      description: "Развлекательный и спортивный комплекс с полями."
    },
    { 
      id: 5, 
      name: "Juniors", 
      distance: "2.1 км", 
      price: "11 000 ₸", 
      time: "Сегодня, 20:00", 
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=300", 
      spots: 4,
      isIotEnabled: false,
      status: 'available',
      description: "Профессиональные поля для аренды."
    },
    { 
      id: 6, 
      name: "Chaplin’s Sport Club", 
      distance: "6.5 км", 
      price: "13 500 ₸", 
      time: "Завтра, 21:00", 
      image: "https://images.unsplash.com/photo-1526232310673-59c24831580c?auto=format&fit=crop&q=80&w=300", 
      spots: 2,
      isIotEnabled: false,
      status: 'available',
      description: "Популярное место для любительских матчей."
    }
  ];

  const handleCourtClick = (court: Court) => {
    alert(`АРЕНУМ ИНФО: ${court.name}\n${court.description}\n\nSmart Features: ${court.isIotEnabled ? 'Включены (Авто-свет, умный замок)' : 'Отсутствуют'}`);
  };

  return (
    <div className="max-w-screen-sm mx-auto px-4 pb-12 animate-in fade-in duration-500">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-heading font-black mb-1 text-white">ПРИВЕТ, УЛАН! 👋</h2>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pitch animate-pulse"></span>
            <p className="text-gray-400 text-sm">Статус: Менеджер FC SHYMKENT</p>
          </div>
        </div>
        <div className="bg-glass border border-glass-border p-2 rounded-xl text-center min-w-[85px]">
          <p className="text-[10px] text-gray-500 font-bold uppercase">Баланс</p>
          <p className="text-pitch font-black">25 000 ₸</p>
        </div>
      </header>

      {/* Поиск и Фильтры */}
      <div className="mb-8 space-y-4">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Поиск полей в Шымкенте..." 
            className="w-full bg-glass border border-glass-border rounded-2xl py-4 px-12 outline-none focus:border-pitch/50 transition-all text-sm font-medium text-white"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-pitch transition-colors">🔍</span>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {['Все', 'Свободные', 'Челленджи', 'ЛЛФ', 'Крытые'].map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-[11px] font-black uppercase tracking-tight transition-all ${activeTab === tab ? 'bg-pitch text-black shadow-[0_0_20px_rgba(57,255,20,0.3)]' : 'bg-glass border border-glass-border text-gray-400 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Смарт-таймер активной аренды */}
      <div className="mb-8 bg-gradient-to-r from-pitch/20 to-dark border border-pitch/30 rounded-3xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
             <div className="w-12 h-12 rounded-full border-4 border-pitch/20 flex items-center justify-center">
               <span className="text-pitch font-black text-xs">45'</span>
             </div>
             <div className="absolute inset-0 w-12 h-12 rounded-full border-t-4 border-pitch animate-spin" style={{ animationDuration: '3s' }}></div>
          </div>
          <div>
            <p className="text-[10px] text-pitch font-black uppercase tracking-widest">Активная игра</p>
            <h4 className="font-bold text-sm text-white italic">Nursat Arena • Корт 1</h4>
          </div>
        </div>
        <button className="bg-glass hover:bg-white/10 px-4 py-2 rounded-2xl transition-all border border-glass-border flex items-center gap-2">
          <span className="text-sm">🔑</span>
          <span className="text-[10px] font-black text-white uppercase tracking-wider">Открыть</span>
        </button>
      </div>

      {/* Список площадок */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-heading uppercase text-pitch italic tracking-tighter">Лучшие поля города</h3>
          <button className="text-[10px] text-gray-500 font-bold uppercase border-b border-gray-700 hover:text-pitch transition-all">На карте</button>
        </div>
        
        <div className="space-y-4">
          {courts.map(court => (
            <button 
              key={court.id} 
              onClick={() => handleCourtClick(court)}
              className="w-full text-left bg-glass border border-glass-border rounded-3xl p-4 flex gap-4 items-center hover:bg-white/5 hover:border-pitch/30 transition-all group active:scale-[0.98]"
            >
              <div className="relative shrink-0">
                <img src={court.image} className="rounded-2xl object-cover h-24 w-24 grayscale-[0.3] group-hover:grayscale-0 transition-all" alt={court.name} />
                {court.isIotEnabled && (
                  <div className="absolute -top-2 -right-2 bg-pitch text-black text-[9px] font-black px-2 py-1 rounded-lg shadow-[0_0_10px_rgba(57,255,20,0.5)] flex items-center gap-1">
                    IoT
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-lg leading-tight group-hover:text-pitch transition-colors text-white">{court.name}</h4>
                  <span className="text-pitch font-black text-lg">{court.price}</span>
                </div>
                <p className="text-[10px] text-gray-400 mb-2 line-clamp-2 italic leading-relaxed">{court.description}</p>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-gray-500 font-bold uppercase">📍 {court.distance}</span>
                    <span className={`text-[10px] font-bold uppercase ${court.status === 'booked' ? 'text-action' : 'text-pitch/70'}`}>
                      {court.status === 'booked' ? '● Занято' : '● Свободно'}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-5 h-5 rounded-full border border-dark bg-gray-700 overflow-hidden shadow-lg">
                        <img src={`https://i.pravatar.cc/50?u=${court.id + i}`} alt="u" />
                      </div>
                    ))}
                    <div className="w-5 h-5 rounded-full border border-dark bg-pitch text-black text-[8px] flex items-center justify-center font-black shadow-lg">+{court.spots}</div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Challenge Board & Tournament Preview */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-action/20 to-transparent border border-action/30 rounded-3xl p-5 group cursor-pointer hover:border-action transition-all relative overflow-hidden shadow-lg">
          <span className="text-action font-black text-[10px] uppercase block mb-2 tracking-widest">Челлендж</span>
          <h4 className="font-heading font-black text-lg italic leading-none mb-4 text-white">БРОСИТЬ ВЫЗОВ</h4>
          <p className="text-[9px] text-gray-400 uppercase leading-tight">Проигравший платит за всё</p>
          <div className="absolute -right-2 -bottom-2 opacity-10 scale-150">⚔️</div>
        </div>

        <div className="bg-gradient-to-br from-pitch/20 to-transparent border border-pitch/30 rounded-3xl p-5 group cursor-pointer hover:border-pitch transition-all relative overflow-hidden shadow-lg">
          <span className="text-pitch font-black text-[10px] uppercase block mb-2 tracking-widest">Лига</span>
          <h4 className="font-heading font-black text-lg italic leading-none mb-4 text-white">ЛЛФ ТУРНИРЫ</h4>
          <p className="text-[9px] text-gray-400 uppercase leading-tight">Сетка и трансферы</p>
          <div className="absolute -right-2 -bottom-2 opacity-10 scale-150">🏆</div>
        </div>
      </section>
    </div>
  );
};

export default PlayerHome;
