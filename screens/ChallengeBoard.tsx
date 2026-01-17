
import React from 'react';

const ChallengeBoard: React.FC = () => {
  return (
    <div className="max-w-screen-sm mx-auto px-4 py-4 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-heading font-black italic tracking-tighter text-action uppercase">Доска Вызовов</h2>
        <div className="bg-action/20 border border-action/40 p-2 rounded-lg text-action text-[10px] font-bold animate-pulse">LIVE</div>
      </div>

      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        Брось перчатку другим командам. В режиме <span className="text-white font-bold italic">Challenge Mode</span> проигравшая команда оплачивает полную стоимость аренды поля через Arenum!
      </p>

      {/* Throw Gauntlet CTA */}
      <button className="w-full bg-transparent border-2 border-action text-action font-heading font-black py-4 rounded-xl mb-10 hover:bg-action hover:text-white transition-all group flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,69,0,0.2)]">
        <span className="text-2xl group-hover:animate-bounce">🛡️</span>
        БРОСИТЬ ВЫЗОВ
      </button>

      {/* Feed of Challenges */}
      <div className="space-y-6">
        {[
          { team: "FC SHYMKENT", field: "Nursat Arena", time: "Сегодня, 20:30", rank: "Gold Elite" },
          { team: "ALAMAN KINGS", field: "Alaman Complex", time: "Сегодня, 22:00", rank: "Silver Pro" },
          { team: "SOUTH SIDE", field: "Miras Arena", time: "Завтра, 19:00", rank: "Bronze Star" }
        ].map((challenge, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-2 top-4 w-1 h-12 bg-action rounded-full shadow-[0_0_10px_#FF4500]"></div>
            <div className="bg-glass border border-glass-border p-6 rounded-3xl ml-4 hover:border-action/50 transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-heading font-black text-xl italic leading-tight text-white group-hover:text-action transition-colors">{challenge.team}</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Рейтинг: {challenge.rank}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/60 font-bold uppercase italic">{challenge.time}</p>
                  <p className="text-[10px] text-action font-bold uppercase tracking-wider">{challenge.field}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-grow h-px bg-white/10"></div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black italic tracking-widest text-white/40 uppercase">В С</div>
                <div className="flex-grow h-px bg-white/10"></div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center font-heading text-xl text-gray-600">?</div>
                   <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter italic">Ожидание соперника...</span>
                </div>
                <button className="bg-white text-black text-[10px] font-black px-5 py-2.5 rounded-xl hover:bg-action hover:text-white transition-all uppercase tracking-widest active:scale-95 shadow-lg">
                  ПРИНЯТЬ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeBoard;
