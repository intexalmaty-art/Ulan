
import React from 'react';

const MatchCardView: React.FC = () => {
  const playersFilled = 7;
  const totalSlots = 10;
  const progress = (playersFilled / totalSlots) * 100;

  return (
    <div className="max-w-screen-sm mx-auto px-4 py-4 animate-in slide-in-from-bottom duration-500">
      <div className="bg-glass border border-glass-border rounded-[2.5rem] overflow-hidden shadow-2xl relative">
        {/* Hero Section */}
        <div className="h-64 relative">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale-[0.2]" alt="Court" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="bg-pitch text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">Матч 5x5</span>
            <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-white/20">Нурсат Арена</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 -mt-16 relative z-10">
          <div className="mb-6">
            <h2 className="text-4xl font-heading font-black italic tracking-tighter mb-2 leading-none uppercase text-white">Ночная лига: Улан & Co</h2>
            <p className="text-gray-400 flex items-center gap-1 text-sm font-medium">
              <span>📍 Nursat Arena, Поле №1</span>
              <span className="mx-2 text-pitch">•</span>
              <span>⏰ Сегодня, 21:00 - 22:30</span>
            </p>
          </div>

          {/* Filling Status */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-pitch">Статус набора</span>
              <span className="text-xl font-heading font-bold text-white">{playersFilled}/{totalSlots} <span className="text-gray-500 text-sm">Игроков</span></span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden p-[2px]">
              <div 
                className="h-full bg-pitch rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(57,255,20,0.6)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 uppercase text-center font-black tracking-widest">Нужно ещё 3 игрока для игры</p>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-5 gap-3 mb-10">
            {[...Array(totalSlots)].map((_, i) => (
              <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center border-2 transition-all ${i < playersFilled ? 'border-pitch bg-pitch/10 shadow-[0_0_10px_rgba(57,255,20,0.1)]' : 'border-dashed border-gray-700'}`}>
                {i < playersFilled ? (
                   <img src={`https://i.pravatar.cc/150?u=${i + 10}`} className="w-full h-full rounded-2xl grayscale hover:grayscale-0 transition-all cursor-pointer" alt="player" />
                ) : (
                  <span className="text-gray-700 font-bold text-lg">?</span>
                )}
              </div>
            ))}
          </div>

          {/* Fintech Section & Action */}
          <div className="bg-white/5 rounded-3xl p-6 border border-white/10 flex items-center justify-between mb-8 shadow-inner">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-widest">Взнос с игрока</p>
              <p className="text-3xl font-heading font-black text-white">1 500 ₸</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-widest">Кешбэк</p>
              <p className="text-pitch font-bold">+50 Arenum Coins</p>
            </div>
          </div>

          <button className="w-full bg-pitch text-black font-black py-5 rounded-2xl text-xl shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-tighter">
            ЗАПИСАТЬСЯ И ОПЛАТИТЬ
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchCardView;
