
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Пн', rev: 40000, occ: 40 },
  { name: 'Вт', rev: 30000, occ: 35 },
  { name: 'Ср', rev: 20000, occ: 30 },
  { name: 'Чт', rev: 27800, occ: 45 },
  { name: 'Пт', rev: 58900, occ: 55 },
  { name: 'Сб', rev: 93900, occ: 90 },
  { name: 'Вс', rev: 84900, occ: 95 },
];

const OwnerDashboard: React.FC = () => {
  const [isLightAuto, setIsLightAuto] = useState(true);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-8 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <span className="bg-pitch/20 text-pitch text-[10px] px-2 py-0.5 rounded font-black uppercase tracking-widest">Admin Mode</span>
             <h2 className="text-3xl font-heading font-black italic tracking-tighter uppercase text-white">ARENUM PMS: NURSHAT</h2>
          </div>
          <p className="text-gray-400 text-sm">Узел IoT: <span className="text-pitch">Статус: Online</span> • 4 активных брони • 2 новых вызова</p>
        </div>
        <div className="flex gap-4">
           <button className="bg-glass border border-glass-border px-6 py-3 rounded-2xl hover:bg-white/10 transition-all font-black text-[11px] uppercase tracking-widest">Настройки Лиги</button>
           <button className="bg-pitch text-black px-8 py-3 rounded-2xl hover:scale-105 transition-all font-black text-[11px] uppercase tracking-widest shadow-[0_0_20px_rgba(57,255,20,0.3)]">Быстрое бронирование</button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        
        {/* Left: Analytics & Control */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* IoT Quick Control Panel */}
          <div className="bg-gradient-to-r from-glass to-transparent border border-glass-border p-6 rounded-[2.5rem] flex items-center justify-between">
            <div className="flex items-center gap-8">
               <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${isLightAuto ? 'bg-pitch animate-pulse' : 'bg-gray-600'}`}></div>
                  <span className="text-xs font-bold uppercase tracking-widest">Умный Свет (Авто)</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Ворота: Закрыты</span>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isLightAuto} onChange={() => setIsLightAuto(!isLightAuto)} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pitch"></div>
              </label>
              <button className="bg-glass border border-glass-border p-3 rounded-xl hover:text-pitch transition-colors">⚙️</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard label="Выручка (7д)" value="455,200 ₸" trend="+12.5%" />
            <StatCard label="Утилизация" value="84%" trend="+4%" />
            <StatCard label="Лига ЛЛФ" value="24" sub="команды" />
          </div>

          {/* Chart Section */}
          <div className="bg-glass border border-glass-border p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div className="flex justify-between items-center mb-8 relative z-10">
               <h3 className="text-xl font-heading font-bold uppercase tracking-tight italic">Аналитика прибыли (₸)</h3>
               <div className="flex gap-2">
                 <button className="bg-pitch text-black text-[9px] font-black px-3 py-1 rounded-lg">НЕДЕЛЯ</button>
                 <button className="bg-dark text-gray-500 text-[9px] font-black px-3 py-1 rounded-lg">МЕСЯЦ</button>
               </div>
             </div>
             <div className="h-72 w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <XAxis dataKey="name" stroke="#444" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#121212', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}
                      itemStyle={{ color: '#39FF14', fontWeight: 'bold' }}
                      formatter={(value: any) => [`${value} ₸`, 'Выручка']}
                    />
                    <Area type="monotone" dataKey="rev" stroke="#39FF14" fillOpacity={1} fill="url(#colorRev)" strokeWidth={4} />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          {/* Dynamic Schedule View */}
          <div className="bg-glass border border-glass-border p-8 rounded-[2.5rem]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-heading font-bold uppercase tracking-tight italic">Мониторинг Аренды</h3>
              <span className="text-[10px] font-black text-gray-500 tracking-widest uppercase">Сегодня, 15:45</span>
            </div>
            <div className="space-y-6">
              {['Поле A (Main)', 'Поле B (Roof)', 'Поле C (Indoor)'].map((field, idx) => (
                <div key={field} className="flex gap-4 items-center">
                  <div className="w-32 text-[10px] font-black text-gray-400 uppercase tracking-tighter">{field}</div>
                  <div className="flex-grow h-14 bg-dark/50 rounded-2xl relative overflow-hidden border border-glass-border p-1">
                    {idx === 0 && <div className="absolute left-[10%] w-[35%] h-full bg-pitch/10 border-x-2 border-pitch flex items-center px-4">
                       <span className="text-[9px] font-black text-pitch italic uppercase">FC SHYMKENT • 01:45 ОСТАЛОСЬ</span>
                       <div className="absolute right-2 top-2 w-2 h-2 rounded-full bg-pitch animate-pulse"></div>
                    </div>}
                    {idx === 1 && <div className="absolute left-[50%] w-[40%] h-full bg-action/10 border-x-2 border-action flex items-center px-4">
                       <span className="text-[9px] font-black text-action italic uppercase">CHALLENGE: DRAGONS vs MILAN</span>
                    </div>}
                    {idx === 2 && <div className="w-full h-full flex items-center justify-center text-[9px] text-gray-700 font-black uppercase tracking-[0.2em]">Свободно до 18:00</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Operations & Activity */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-glass border border-glass-border p-8 rounded-[2.5rem]">
            <h3 className="text-xl font-heading font-bold uppercase tracking-tight italic mb-6">Журнал Действий</h3>
            <div className="space-y-6">
              {[
                { type: 'booking', time: '2 мин. назад', text: 'Новая бронь: Поле A', user: 'Улан Т.' },
                { type: 'payment', time: '15 мин. назад', text: 'Оплата за Челлендж получена', user: 'FC Dragons' },
                { type: 'iot', time: '1 час назад', text: 'Свет выключен автоматически', user: 'Система IoT' },
              ].map((log, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-glass-border flex items-center justify-center text-lg transition-transform group-hover:scale-110">
                    {log.type === 'booking' ? '⚽' : log.type === 'payment' ? '💳' : '⚡'}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-200">{log.text}</p>
                    <p className="text-xs text-gray-500">{log.user}</p>
                    <p className="text-[9px] text-gray-600 mt-1 uppercase font-bold">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 text-[10px] text-gray-400 hover:text-pitch transition-all uppercase font-black tracking-widest border border-white/5 rounded-2xl">Архив операций</button>
          </div>

          <div className="bg-gradient-to-br from-pitch/10 to-transparent border border-pitch/20 p-8 rounded-[2.5rem] relative overflow-hidden">
            <h4 className="font-heading font-bold text-lg mb-3 italic">Smart Pricing Engine</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-8 font-medium">Обнаружен высокий спрос на субботу. Рекомендуем активировать <span className="text-pitch">Prime Rate (+15%)</span> для увеличения прибыли на 45,000 ₸.</p>
            <button className="w-full bg-pitch text-black font-black py-4 rounded-2xl text-[11px] uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">АКТИВИРОВАТЬ</button>
            <div className="absolute -right-6 -bottom-6 opacity-5 scale-150 rotate-12">📈</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, trend, sub }: { label: string, value: string, trend?: string, sub?: string }) => (
  <div className="bg-glass border border-glass-border p-8 rounded-[2.5rem] hover:border-pitch/30 transition-all cursor-default group">
    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4 group-hover:text-pitch transition-colors">{label}</p>
    <div className="flex items-end gap-2">
      <h4 className="text-3xl font-black font-heading leading-none tracking-tighter">{value}</h4>
      <div className="flex flex-col">
        {trend && <span className="text-[10px] text-pitch font-black mb-0.5">{trend}</span>}
        {sub && <span className="text-[10px] text-gray-600 font-bold uppercase">{sub}</span>}
      </div>
    </div>
  </div>
);

export default OwnerDashboard;
